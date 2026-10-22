import React from 'react';
import { X, Check, ArrowRight, ExternalLink } from 'lucide-react';

export default function DemoPreviewModal({ demo, onClose, onOrderDemo }) {
  if (!demo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 px-2.5 py-0.5 rounded">
              {demo.category}
            </span>
            <h3 className="font-bold text-slate-900 text-xl mt-1">{demo.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-72 sm:max-h-96">
            <img src={demo.image} alt={demo.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2">প্রজেক্টের বিবরণ:</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{demo.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-base mb-3">যেসব ফিচার অন্তর্ভুক্ত:</h4>
            <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>মোবাইল ও পিসিতে দ্রুত লোডিং</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>বিকাশ/নগদ ও ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>সহজ প্রোডাক্ট আপলোড ড্যাশবোর্ড</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>ইনভয়েস ও কাস্টমার ডেটাবেজ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            আপনার পণ্যের ছবি ও বিবরণ দিয়ে এই ডিজাইনেই সাইট বানিয়ে নিতে পারেন।
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors"
            >
              বন্ধ করুন
            </button>
            <button
              onClick={() => {
                onClose();
                onOrderDemo(demo.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
            >
              <span>এই ডিজাইনে সাইট চাই</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
