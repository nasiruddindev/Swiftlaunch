import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2, ShieldCheck, Clock, Loader2 } from 'lucide-react';
import { addLead } from '../firebase/leadsService';

export default function Contact({ config, preselectedPlan, preselectedDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    package: 'ফুল স্মার্ট ই-কমার্স স্টোর (৳১২,৯৯৯)',
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, package: preselectedPlan }));
    }
  }, [preselectedPlan]);

  useEffect(() => {
    if (preselectedDemo) {
      setFormData((prev) => ({
        ...prev,
        note: `আমি '${preselectedDemo}' ডেমো স্টাইলের ওয়েবসাইট বানাতে আগ্রহী।`,
      }));
    }
  }, [preselectedDemo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addLead(formData);
    } catch (err) {
      console.warn("Could not save to db, proceeding with whatsapp:", err);
    }

    const text = `*ওয়েবসাইট অর্ডার / অনুসন্ধান:*
👤 নাম: ${formData.name}
📱 মোবাইল: ${formData.phone}
💼 ব্যবসা: ${formData.businessName || 'অনলাইন শপ'}
📦 প্যাকেজ: ${formData.package}
📝 নোট: ${formData.note || '০ টাকা অগ্রিমে শুরু করতে চাই।'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodedText}`;

    setIsSubmitting(false);
    setSubmitted(true);

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-xs inline-block">
            অর্ডার ও ফ্রি কনসালটেশন
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
            আজই আপনার ওয়েবসাইটের কাজ শুরু করুন
          </h2>
          <p className="text-slate-600 text-sm">
            নিচের ফর্মটি পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে মেসেজ পাঠান।
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp & Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 animate-pulse" />
                <span>০ টাকা অগ্রিম গ্যারান্টি</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                কোনো অগ্রিম পেমেন্ট ছাড়াই আপনার রিকোয়ারমেন্ট অনুযায়ী ওয়েবসাইট ডেমো বানিয়ে দেখাব। পছন্দ হলে তারপর পেমেন্ট!
              </p>

              {/* Direct WhatsApp Box with hover lift */}
              <a
                href={`https://wa.me/${config.whatsapp}?text=হ্যালো,%20আমি%20একটি%20ওয়েবসাইট%20বানাতে%20চাই`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200/90 text-emerald-950 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs hover:shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-emerald-700">সরাসরি হোয়াটসঅ্যাপে নক দিন</div>
                  <div className="text-sm font-bold font-mono">{config.phone}</div>
                </div>
              </a>

              {/* Direct Phone with hover lift */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-slate-900 transition-all hover:scale-[1.02] group">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">সরাসরি কল নম্বর</div>
                  <div className="text-sm font-bold font-mono">{config.phone}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>সকাল ৯টা থেকে রাত ১১টা পর্যন্ত সার্বক্ষণিক যোগাযোগ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Form */}
          <div className="md:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    ধন্যবাদ! আপনার তথ্য সংরক্ষিত হয়েছে
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    আপনার অর্ডারটি ডেটাবেজে সেভ হয়েছে এবং হোয়াটসঅ্যাপে পাঠানো হয়েছে। আমরা খুব দ্রুত আপনার সাথে যোগাযোগ করব।
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 underline pt-2"
                  >
                    আরেকটি মেসেজ পাঠান
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    ওয়েবসাইটের অর্ডার সাবমিট করুন
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        আপনার নাম *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="আপনার নাম"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-600 text-xs text-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="017xxxxxxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-600 text-xs text-slate-800 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        ব্যবসা বা পেজের নাম
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="যেমন: ফ্যাশন হাউজ"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-600 text-xs text-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        প্যাকেজ নির্বাচন করুন
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-600 text-xs text-slate-800 bg-white transition-all cursor-pointer"
                      >
                        <option value="ফুল স্মার্ট ই-কমার্স স্টোর (৳১২,৯৯৯)">ফুল স্মার্ট ই-কমার্স শপ (৳১২,৯৯৯)</option>
                        <option value="স্টার্টার ল্যান্ডিং পেজ (৳৫,৯৯৯)">স্টার্টার ল্যান্ডিং পেজ (৳৫,৯৯৯)</option>
                        <option value="কাস্টম সল্যুশন">কাস্টম সল্যুশন</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      কোনো বিশেষ রিকোয়ারমেন্ট থাকলে লিখুন
                    </label>
                    <textarea
                      name="note"
                      rows={2}
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="যেমন: ৩ দিনে ডেলিভারি দরকার, বিকাশ অটোপে লাগবে..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-600 text-xs text-slate-800 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70"
                  >
                    <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                    <span>WhatsApp-এ অর্ডার পাঠান (০ টাকা অগ্রিমে)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
