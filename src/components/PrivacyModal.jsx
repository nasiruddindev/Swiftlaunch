import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose, policy }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{policy.title}</h3>
              <p className="text-xs text-slate-500">সর্বশেষ আপডেট: {policy.lastUpdated}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {policy.sections.map((sec, idx) => (
            <div key={idx} className="bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-base mb-1.5">{sec.heading}</h4>
              <p className="text-slate-600">{sec.body}</p>
            </div>
          ))}

          <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
            * কোনো প্রশ্ন বা তথ্যের জন্য আমাদের কন্টাক্ট নাম্বারে বা সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করতে পারেন।
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            ঠিক আছে, বুঝেছি
          </button>
        </div>

      </div>
    </div>
  );
}
