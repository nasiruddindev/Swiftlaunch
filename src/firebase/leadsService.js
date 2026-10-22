import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';

// -------------------------------------------------------------
// আপনার Firebase Console (https://console.firebase.google.com/)
// থেকে পাওয়া কনফিগটি নিচে বসিয়ে দিন।
// যদি কনফিগ এখনো না থাকে, তবে স্বয়ংক্রিয়ভাবে লোকাল স্টোরেজে সেভ হবে
// যাতে ওয়েবসাইট ও ড্যাশবোর্ড এখনই সম্পূর্ণ সচল থাকে!
// -------------------------------------------------------------
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Check if valid credentials are provided
const isConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== "YOUR_API_KEY_HERE" &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID"
);

let db = null;

if (isConfigured) {
  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  } catch (error) {
    console.warn("Firebase initialization failed, falling back to local storage:", error);
  }
}

// Local storage fallback helper
const LOCAL_STORAGE_KEY = 'webcraft_leads_db';

const getLocalLeads = () => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const saveLocalLead = (lead) => {
  const current = getLocalLeads();
  const newLead = {
    ...lead,
    id: 'local_' + Date.now(),
    createdAt: new Date().toISOString(),
    status: 'নতুন', // 'নতুন' | 'যোগাযোগ হয়েছে' | 'সম্পন্ন'
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newLead, ...current]));
  return newLead;
};

// --- SERVICE FUNCTIONS ---

export async function addLead(leadData) {
  if (db) {
    try {
      const docRef = await addDoc(collection(db, "leads"), {
        ...leadData,
        status: "নতুন",
        createdAt: serverTimestamp(),
      });
      return { id: docRef.id, ...leadData };
    } catch (e) {
      console.warn("Firestore error, saving locally:", e);
      return saveLocalLead(leadData);
    }
  } else {
    return saveLocalLead(leadData);
  }
}

export async function fetchLeads() {
  if (db) {
    try {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate ? doc.data().createdAt.toDate().toISOString() : new Date().toISOString()
      }));
    } catch (e) {
      console.warn("Firestore fetch error, reading locally:", e);
      return getLocalLeads();
    }
  } else {
    return getLocalLeads();
  }
}

export async function updateLeadStatus(id, newStatus) {
  if (db && !id.startsWith('local_')) {
    try {
      const docRef = doc(db, "leads", id);
      await updateDoc(docRef, { status: newStatus });
    } catch (e) {
      console.error("Firestore update error:", e);
    }
  } else {
    const current = getLocalLeads();
    const updated = current.map(item => item.id === id ? { ...item, status: newStatus } : item);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  }
}

export async function deleteLead(id) {
  if (db && !id.startsWith('local_')) {
    try {
      const docRef = doc(db, "leads", id);
      await deleteDoc(docRef);
    } catch (e) {
      console.error("Firestore delete error:", e);
    }
  } else {
    const current = getLocalLeads();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  }
}
