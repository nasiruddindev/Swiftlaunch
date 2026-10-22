import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ pricing, onSelectPackage }) {
  return (
    <section id="pricing" className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            স্বচ্ছ মূল্য তালিকা
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            আপনার বাজেট অনুযায়ী সঠিক প্ল্যানটি বেছে নিন
          </h2>
          <p className="text-slate-600 text-sm">
            কোনো প্রকার লুকানো চার্জ বা মাসিক ফি নেই। ডোমেইন ও কোডের শতভাগ মালিকানা আপনার।
          </p>
        </div>

        {/* 2 Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {pricing.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-xl border-2 border-blue-500 relative'
                  : 'bg-[#fafafa] text-slate-900 border border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className={`text-4xl font-black font-mono tracking-tight ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                      ৳{plan.price}
                    </span>
                    <span className={`text-xs ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      (এককালীন চার্জ)
                    </span>
                  </div>
                </div>

                <div className="py-2 mb-4 border-y border-slate-200/20 text-xs font-semibold flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>০ টাকা অগ্রিমে শুরু করার সুযোগ</span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${plan.popular ? 'bg-blue-500 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectPackage(plan.name)}
                className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
