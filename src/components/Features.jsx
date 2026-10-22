import React from 'react';
import { ShieldCheck, CreditCard, Truck, Smartphone, Zap, Award } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  CreditCard: CreditCard,
  Truck: Truck,
  Smartphone: Smartphone,
  Zap: Zap,
  Award: Award,
};

export default function Features({ features }) {
  return (
    <section id="features" className="py-16 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            আমাদের বিশেষত্ব
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            কেন সাধারণ ওয়েবসাইট থেকে আমাদের সিস্টেম আলাদা?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            আমরা শুধু ওয়েবসাইট বানাই না, নিশ্চিত করি যাতে আপনার ব্যবসা দ্রুত বড় হতে পারে।
          </p>
        </div>

        {/* 6-Grid Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
