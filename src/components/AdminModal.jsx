import React, { useState, useEffect } from 'react';
import { X, Lock, KeyRound, Database, RefreshCw, MessageCircle, Phone, Trash2, CheckCircle2, Clock, Filter } from 'lucide-react';
import { fetchLeads, updateLeadStatus, deleteLead } from '../firebase/leadsService';

export default function AdminModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('সব');

  const CORRECT_PIN = '1766'; // নাসির ভাইয়ের অ্যাডমিন পিন

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads();
    }
  }, [isAuthenticated]);

  const loadLeads = async () => {
    setLoading(true);
    const data = await fetchLeads();
    setLeads(data);
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleStatusChange = async (id, status) => {
    await updateLeadStatus(id, status);
    loadLeads();
  };

  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই লিডটি ডিলিট করতে চান?")) {
      await deleteLead(id);
      loadLeads();
    }
  };

  if (!isOpen) return null;

  const filteredLeads = filterStatus === 'সব'
    ? leads
    : leads.filter(l => l.status === filterStatus);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                অ্যাডমিন ড্যাশবোর্ড (Firebase Leads)
              </h3>
              <p className="text-xs text-slate-500">
                ওয়েবসাইট থেকে আসা সকল কাস্টমার লিড ও অর্ডারের তালিকা
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {!isAuthenticated ? (
            /* PIN Login Screen */
            <div className="max-w-xs mx-auto py-12 text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <Lock className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">অ্যাডমিন পিন দিন</h4>
              <p className="text-xs text-slate-500 mb-6">
                নিরাপত্তা পিন দিয়ে ড্যাশবোর্ডে প্রবেশ করুন
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    maxLength={6}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="৪ ডিজিটের পিন লিখুন"
                    autoFocus
                    className="w-full text-center tracking-widest text-lg font-mono py-2.5 px-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                  {pinError && (
                    <p className="text-xs text-rose-500 mt-2 font-medium">
                      ভুল পিন! অনুগ্রহ করে সঠিক পিন দিন।
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  লগইন করুন
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Leads Viewer */
            <div className="space-y-5">
              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">মোট কাস্টমার লিড</div>
                  <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">{leads.length}</div>
                </div>
                <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100">
                  <div className="text-xs text-blue-700 font-medium">নতুন অর্ডার</div>
                  <div className="text-xl font-bold text-blue-900 font-mono mt-0.5">
                    {leads.filter(l => l.status === 'নতুন').length}
                  </div>
                </div>
                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                  <div className="text-xs text-emerald-700 font-medium">যোগাযোগ সম্পন্ন</div>
                  <div className="text-xl font-bold text-emerald-900 font-mono mt-0.5">
                    {leads.filter(l => l.status === 'সম্পন্ন').length}
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-xs">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-500 font-medium">ফিল্টার:</span>
                  {['সব', 'নতুন', 'যোগাযোগ হয়েছে', 'সম্পন্ন'].map(st => (
                    <button
                      key={st}
                      onClick={() => setFilterStatus(st)}
                      className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                        filterStatus === st
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <button
                  onClick={loadLeads}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg font-medium transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>রিফ্রেশ</span>
                </button>
              </div>

              {/* Leads List */}
              {filteredLeads.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
                  <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-600">কোনো লিড পাওয়া যায়নি</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ওয়েবসাইট থেকে কেউ ফর্ম সাবমিট করলেই এখানে সাথে সাথে দেখতে পাবেন।
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{lead.name}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            lead.status === 'নতুন'
                              ? 'bg-blue-100 text-blue-700'
                              : lead.status === 'যোগাযোগ হয়েছে'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {lead.status}
                          </span>
                        </div>

                        <div className="text-xs text-slate-600 flex flex-wrap items-center gap-3">
                          <span className="font-mono font-bold text-slate-800">{lead.phone}</span>
                          {lead.businessName && <span>ব্যবসা: {lead.businessName}</span>}
                          <span className="text-blue-600 font-semibold">{lead.package}</span>
                        </div>

                        {lead.note && (
                          <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded-lg">
                            "{lead.note}"
                          </p>
                        )}

                        <div className="text-[10px] text-slate-400">
                          {new Date(lead.createdAt).toLocaleString('bn-BD')}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        {/* WhatsApp Direct message */}
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=হ্যালো%20${encodeURIComponent(lead.name)},%20Webcraft%20BD%20থেকে%20নাসির%20বলছি।%20আপনার%20ওয়েবসাইট%20অর্ডারটি%20নিয়ে%20কথা%20বলতে%20চাই।`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200"
                          title="WhatsApp এ রিপ্লাই দিন"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>

                        {/* Call */}
                        <a
                          href={`tel:${lead.phone}`}
                          className="p-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg"
                          title="সরাসরি কল দিন"
                        >
                          <Phone className="w-4 h-4" />
                        </a>

                        {/* Status Select */}
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className="text-xs font-semibold px-2 py-1.5 rounded-lg border border-slate-200 bg-white"
                        >
                          <option value="নতুন">নতুন</option>
                          <option value="যোগাযোগ হয়েছে">যোগাযোগ হয়েছে</option>
                          <option value="সম্পন্ন">সম্পন্ন</option>
                        </select>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"
                          title="ডিলিট করুন"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-between px-6">
          <span>🔒 সুরক্ষিত অ্যাডমিন কনসোল</span>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-slate-400 hover:text-slate-700 text-xs font-medium"
          >
            লগআউট
          </button>
        </div>

      </div>
    </div>
  );
}
