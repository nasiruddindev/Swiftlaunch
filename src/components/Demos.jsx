import React from 'react';
import { Eye, ArrowRight, Zap, Check, ExternalLink } from 'lucide-react';

export default function Demos({ demos, onOpenPreview, onOrderDemo }) {
  return (
    <section id="demos" className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-xs inline-block">
            স্পেশালাইজড ডেমো স্টোরসমূহ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
            আপনার ব্যবসার সাথে মানানসই ওয়েবসাইট বেছে নিন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            আপনার প্রোডাক্ট ও লোগো দিয়ে ঠিক এই লেআউটে সাইট তৈরি করে দেওয়া হবে।
          </p>
        </div>

        {/* 3 Grid Showcase with rich hover effects */}
        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group interactive-card"
            >
              <div>
                {/* Image with zoom and interactive overlay */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle hover gradient curtain */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <button
                      onClick={() => onOpenPreview(demo)}
                      className="w-full py-1.5 bg-white/95 backdrop-blur text-slate-900 text-xs font-bold rounded-lg shadow-md flex items-center justify-center gap-1.5 hover:bg-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                      <span>ফুল স্ক্রিন প্রিভিউ দেখুন</span>
                    </button>
                  </div>

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-800 shadow-xs border border-slate-100">
                    {demo.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>{demo.speed}</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {demo.subtitle}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {demo.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-4 pt-0 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenPreview(demo)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>প্রিভিউ</span>
                </button>
                <button
                  onClick={() => onOrderDemo(demo.title)}
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs hover:shadow-md hover:shadow-blue-600/30 group/btn"
                >
                  <span>অর্ডার করুন</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
