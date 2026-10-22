import React from 'react';
import { ShieldCheck, Heart, Lock } from 'lucide-react';

export default function Footer({ config, onOpenPrivacy, onOpenAdmin }) {
  return (
    <footer className="bg-white py-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm">{config.brandName}</span>
            <span>—</span>
            <span>{config.tagline}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-blue-600 transition-colors flex items-center gap-1 font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>শর্তাবলী ও নীতিমালা</span>
            </button>

            <span>•</span>

            <button
              onClick={onOpenAdmin}
              className="hover:text-blue-600 transition-colors flex items-center gap-1 font-semibold text-slate-400 hover:text-slate-600"
              title="অ্যাডমিন লগইন"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>অ্যাডমিন</span>
            </button>

            <span>•</span>

            <div className="flex items-center gap-1">
              <span>ডিজাইনার:</span>
              <span className="font-bold text-slate-800">{config.founder}</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
