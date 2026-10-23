import React, { useState } from 'react';
import { siteConfig } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Demos from './components/Demos';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';
import DemoPreviewModal from './components/DemoPreviewModal';
import AdminModal from './components/AdminModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CursorEffect from './components/CursorEffect';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [previewDemo, setPreviewDemo] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedDemo, setSelectedDemo] = useState('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (planName) => {
    setSelectedPlan(planName);
    scrollToContact();
  };

  const handleOrderDemo = (demoTitle) => {
    setSelectedDemo(demoTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Top Banner & Header */}
      <Navbar
        config={siteConfig}
        onOpenContact={scrollToContact}
      />

      <main className="flex-1">
        {/* Compact Hero with Flagship Offer & Interactive Mockup */}
        <Hero
          config={siteConfig}
          onOpenContact={scrollToContact}
        />

        {/* 3 Focused Specialized Demos (Fashion, Gadget, Organic Food) */}
        <Demos
          demos={siteConfig.demos}
          onOpenPreview={(demo) => setPreviewDemo(demo)}
          onOrderDemo={handleOrderDemo}
        />

        {/* Why Choose Our Tech / 6 Core Features */}
        <Features
          features={siteConfig.features}
        />

        {/* Transparent Compact Pricing */}
        <Pricing
          pricing={siteConfig.pricing}
          onSelectPackage={handleSelectPackage}
        />

        {/* Crisp FAQs */}
        <FAQ
          faqs={siteConfig.faqs}
        />

        {/* Direct Order Form & WhatsApp Submission */}
        <Contact
          config={siteConfig}
          preselectedPlan={selectedPlan}
          preselectedDemo={selectedDemo}
        />
      </main>

      {/* Clean Footer */}
      <Footer
        config={siteConfig}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Modals */}
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        policy={siteConfig.privacyPolicy}
      />

      <DemoPreviewModal
        demo={previewDemo}
        onClose={() => setPreviewDemo(null)}
        onOrderDemo={handleOrderDemo}
      />

      {/* Admin Leads Dashboard Modal */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp
        whatsappNumber={siteConfig.whatsapp}
      />

      {/* Interactive Cursor Follower & Hover Glow */}
      <CursorEffect />
    </div>
  );
}
