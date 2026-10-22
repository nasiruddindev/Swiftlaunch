import React from 'react';
import { Eye, ArrowRight, Zap, Check } from 'lucide-react';

export default function Demos({ demos, onOpenPreview, onOrderDemo }) {
  return (
    <section id="demos" className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            স্পেশালাইজড ডেমো স্টোরসমূহ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            আপনার ব্যবসার সাথে মানানসই ওয়েবসাইট বেছে নিন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            আপনার প্রোডাক্ট ও লোগো দিয়ে ঠিক এই লেআউটে সাইট তৈরি করে দেওয়া হবে।
          </p>
        </div>

        {/* 3 Grid Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-0.5 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
                    {demo.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur text-white px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>{demo.speed}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
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
                  className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>প্রিভিউ</span>
                </button>
                <button
                  onClick={() => onOrderDemo(demo.title)}
                  className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <span>অর্ডার করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
