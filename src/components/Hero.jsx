import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, ShoppingBag, Truck, CreditCard, Sparkles, Check } from 'lucide-react';

export default function Hero({ config, onOpenContact }) {
  const { hero } = config;
  const [activeTab, setActiveTab] = useState(0);
  const [simulatedOrder, setSimulatedOrder] = useState(false);

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

  const handleSimulateOrder = () => {
    setSimulatedOrder(true);
    setTimeout(() => setSimulatedOrder(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200/60 overflow-hidden">
      {/* Background dynamic ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Offer & Details */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge with subtle bounce hover */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100/80 border border-blue-200/70 text-blue-700 text-xs font-bold mb-4 shadow-xs transition-all cursor-default group">
              <ShieldCheck className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-4 tracking-tight">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 font-normal">
              {hero.subtitle}
            </p>

            {/* Bullets with hover highlight */}
            <div className="grid sm:grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 mb-8 text-left">
              {hero.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 p-1.5 rounded-lg hover:bg-slate-100/70 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons with high-end hover effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {/* Shine reflection effect */}
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href="#demos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 hover:border-slate-400 shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>

            {/* 4 Key Stats with interactive hover cards */}
            <div className="grid grid-cols-4 gap-2 pt-6 border-t border-slate-200">
              {hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center lg:text-left p-2 rounded-xl hover:bg-blue-50/50 transition-colors group cursor-default"
                >
                  <div className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-600 font-mono transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Mockup Card with 3D Hover & Live Order Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-300/80 transition-all duration-300 max-w-md mx-auto group/mockup">
              
              {/* Browser top bar */}
              <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400 group-hover/mockup:scale-110 transition-transform" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover/mockup:scale-110 transition-transform delay-75" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover/mockup:scale-110 transition-transform delay-150" />
                </div>
                <div className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-0.5 rounded border border-slate-200 flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  <span>https://yourbrand.com</span>
                </div>
                <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ১.১ সে.
                </div>
              </div>

              {/* Category Tab Selector with smooth pill hover */}
              <div className="flex border-b border-slate-200 bg-slate-50/80 text-xs font-semibold p-1 gap-1">
                {previewTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
                      activeTab === idx
                        ? 'bg-white text-blue-600 shadow-xs font-bold border border-slate-200/60'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Preview Content */}
              <div className="p-4 space-y-3 bg-slate-50/40">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{previewTabs[activeTab].tag}</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-semibold border border-emerald-100">
                    ● ইন-স্টক
                  </span>
                </div>

                {/* Product Card with hover zoom */}
                <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs hover:border-blue-200 transition-all flex gap-3 group/prod">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={previewTabs[activeTab].image}
                      alt="Preview"
                      className="w-full h-full object-cover group-hover/prod:scale-110 transition-transform duration-500"
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
                    <span className="bg-pink-50 text-pink-700 px-1.5 py-0.5 rounded border border-pink-100 hover:scale-105 transition-transform">বিকাশ</span>
                    <span className="bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded border border-orange-100 hover:scale-105 transition-transform">নগদ</span>
                    <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-100 hover:scale-105 transition-transform">ক্যাশ অন ডেলিভারি</span>
                  </div>
                </div>

                {/* Interactive Simulated Order Trigger Button */}
                <div className="pt-1 flex gap-2">
                  <button
                    onClick={handleSimulateOrder}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all ${
                      simulatedOrder
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow hover:-translate-y-0.5'
                    }`}
                  >
                    {simulatedOrder ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>অর্ডার সম্পন্ন! (ডেমো টেস্ট)</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>টেস্ট অর্ডার করে দেখুন</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold border border-blue-200 hover:-translate-y-0.5 transition-all"
                    title="এই স্টাইল পছন্দ হয়েছে"
                  >
                    সাইট চাই
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
