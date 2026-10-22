import React from 'react';
import { ShoppingCart, Building2, Flame, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  ShoppingCart: ShoppingCart,
  Building2: Building2,
  Flame: Flame,
  Zap: Zap,
};

export default function Services({ services, onSelectService }) {
  return (
    <section id="services" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold text-sm tracking-wider uppercase bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            আমাদের সার্ভিসসমূহ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
            আপনার ব্যবসার জন্য যা যা তৈরি করে থাকি
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            ছোট ফেসবুক পেজ থেকে শুরু করে বড় শোরুম—সব ধরণের ব্যবসার অনলাইন উপস্থিতির পূর্ণ সমাধান।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || ShoppingCart;
            return (
              <div
                key={service.id}
                className="group relative bg-[#fafafa] hover:bg-white p-8 rounded-2xl border border-slate-200/90 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 mt-2"
                >
                  <span>এই সার্ভিসে ওয়েবসাইট বানাতে চাই</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
