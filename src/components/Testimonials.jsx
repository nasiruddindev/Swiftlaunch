import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-bold text-sm tracking-wider uppercase bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
            ক্লায়েন্টদের মতামত
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-4">
            আমাদের সার্ভিস নিয়ে উদ্যোক্তাদের অভিজ্ঞতা
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            শতভাগ আন্তরিকতা ও বিশ্বস্ততার সাথে আমরা ক্লায়েন্টদের ব্যবসা বৃদ্ধিতে সাহায্য করি।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-indigo-100 absolute top-6 right-6" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-base">
                  {review.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
