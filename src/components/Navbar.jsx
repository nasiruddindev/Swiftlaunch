import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function Navbar({ config, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>{config.announcement}</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              W
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 flex items-center">
                Webcraft<span className="text-blue-600 ml-1">BD</span>
              </span>
              <span className="text-[10px] text-slate-500 block -mt-1 font-medium">স্মার্ট ই-কমার্স সল্যুশন</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#demos" className="hover:text-blue-600 transition-colors">ডেমো স্টোর</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">কেন আমাদের সাইট সেরা</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">প্যাকেজ ও অফার</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">প্রশ্নোত্তর</a>
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${config.whatsapp}?text=হ্যালো,%20আমি%20৳১২,৯৯৯%20প্যাকেজে%20ই-কমার্স%20ওয়েবসাইট%20বানাতে%20চাই`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-lg border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>হোয়াটসঅ্যাপ চ্যাট</span>
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm transition-all"
            >
              <span>অর্ডার করুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <a
            href="#demos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-700"
          >
            ডেমো স্টোরসমূহ
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-700"
          >
            কেন আমাদের সাইট সেরা
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-700"
          >
            প্যাকেজ ও অফার
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-700"
          >
            প্রশ্ন-উত্তর
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${config.whatsapp}?text=হ্যালো,%20আমি%20৳১২,৯৯৯%20প্যাকেজে%20ওয়েবসাইট%20বানাতে%20চাই`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>হোয়াটসঅ্যাপে কথা বলুন</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-xs text-center"
            >
              অর্ডার করুন
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
