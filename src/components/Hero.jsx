import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, MessageCircle, ShoppingBag, Truck, CreditCard } from 'lucide-react';

export default function Hero({ config, onOpenContact }) {
  const { hero } = config;
  const [activeTab, setActiveTab] = useState(0);

  const previewTabs = [
    {
      name: "ফ্যাশন ও বুটিক",
      title: "অরা মোডেস্ট কালেকশন",
      price: "৳২,৮৫০",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
      tag: "সাইজ চার্ট + স্লাইড কার্ট",
    },
    {
      name: "গ্যাজেট ও টেক",
      title: "নেক্সাস ওয়্যারলেস ইয়ারবাডস",
      price: "৳১,৯৫০",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
      tag: "১ বছর অফিসিয়াল ওয়ারেন্টি",
    },
    {
      name: "অর্গানিক ফুড",
      title: "সুন্দরবনের কাঁচা মধু (১ কেজি)",
      price: "৳১,২০০",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80",
      tag: "১-পেজ ফাস্ট চেকআউট",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Offer & Details */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-4">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 font-normal">
              {hero.subtitle}
            </p>

            {/* Bullets */}
            <div className="grid sm:grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 mb-8 text-left">
              {hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#demos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-all"
              >
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>

            {/* 4 Key Stats */}
            <div className="grid grid-cols-4 gap-2 pt-6 border-t border-slate-200">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl font-black text-slate-900 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Live Store Mockup with Interactive Tabs */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-md mx-auto">
              
              {/* Browser bar */}
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>https://yourbrand.com</span>
                </div>
                <div className="text-[10px] text-emerald-600 font-bold">● ১.১ সে.</div>
              </div>

              {/* Category Tab Selector */}
              <div className="flex border-b border-slate-200 bg-slate-50/80 text-xs font-semibold">
                {previewTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-2 text-center transition-colors ${
                      activeTab === idx
                        ? 'bg-white text-blue-600 border-b-2 border-blue-600 font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Preview Content */}
              <div className="p-4 space-y-3 bg-slate-50/40">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <ShoppingBag className="w-4 h-4" />
                    <span>{previewTabs[activeTab].tag}</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px]">
                    ইন-স্টক
                  </span>
                </div>

                {/* Product Card */}
                <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs flex gap-3">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={previewTabs[activeTab].image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        {previewTabs[activeTab].title}
                      </div>
                      <div className="text-sm font-extrabold text-blue-600 mt-1 font-mono">
                        {previewTabs[activeTab].price}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      <Truck className="w-3 h-3 text-slate-400" />
                      <span>হোম ডেলিভারি ৬০ টাকা</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Payment Integration */}
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                  <span className="flex items-center gap-1 text-slate-500">
                    <CreditCard className="w-3.5 h-3.5 text-blue-600" /> অটোপে:
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <span className="bg-pink-50 text-pink-700 px-1.5 py-0.5 rounded border border-pink-100">বিকাশ</span>
                    <span className="bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-100">নগদ</span>
                    <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100">ক্যাশ অন ডেলিভারি</span>
                  </div>
                </div>

                {/* Direct 1-Click Order Button inside Mockup */}
                <button
                  onClick={onOpenContact}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>এই স্টোরটি ডেমো দেখতে চাই</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
