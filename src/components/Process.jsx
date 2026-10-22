import React from 'react';

export default function Process({ process }) {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold text-sm tracking-wider uppercase bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            সহজ কাজের প্রক্রিয়া
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
            ৪টি সহজ ধাপে আপনার ওয়েবসাইট বুঝে নিন
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            কোনো জটিলতা ছাড়াই খুব দ্রুত ও নির্বিঘ্নে আমরা আপনার স্বপ্নের প্রজেক্ট ডেলিভারি করি।
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {process.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-black text-indigo-200 mb-4 font-mono">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-indigo-600">
                ধাপ {step.step} সম্পন্ন
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
