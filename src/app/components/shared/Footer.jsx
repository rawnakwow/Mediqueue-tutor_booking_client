"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 px-6 md:px-16 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Primary Branding Row */}
        <div className="mb-14">
          <h2 className="text-4xl font-black text-white tracking-tight flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-lg text-lg font-black">M</span>
            MediQueue
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            Eliminating scheduling conflicts to connect global students with elite, certified live tutors for an organized learning experience.
          </p>
        </div>

        {/* Informational Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-slate-900 pt-12">
          
          {/* Newsletter Integration */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-4">NEWSLETTER</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Subscribe to get instant alerts on opening tutor slots and study guides.
            </p>
            <div className="flex items-center bg-slate-900 rounded-xl px-4 py-3 border border-slate-800 focus-within:border-blue-500 transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 text-xs text-white placeholder-slate-600"
              />
              <span className="text-white text-sm font-bold cursor-pointer hover:text-blue-400 transition-colors">↗</span>
            </div>
          </div>

          {/* Tutor Services Selection Links */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-4">LEARNING SERVICES</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/tutors?subject=Mathematics" className="hover:text-blue-400 transition-colors">Advanced Mathematics</Link></li>
              <li><Link href="/tutors?subject=Physics" className="hover:text-blue-400 transition-colors">Quantum Physics</Link></li>
              <li><Link href="/tutors?subject=Chemistry" className="hover:text-blue-400 transition-colors">Organic Chemistry</Link></li>
              <li><Link href="/tutors?subject=Economics" className="hover:text-blue-400 transition-colors">Macroeconomics Analysis</Link></li>
            </ul>
          </div>

          {/* Quick Platform Support */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-4">SUPPORT CHANNELS</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/help" className="hover:text-blue-400 transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy Statement</Link></li>
            </ul>
          </div>

          {/* Contact Verification Parameters */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-4">CONTACT INFRASTRUCTURE</h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-300">
              <li>📞 +1 786 901 1622</li>
              <li>✉️ support@mediqueue.com</li>
              <li className="text-slate-600 text-[11px] font-normal pt-1">Operation Hours: Sun - Thu</li>
            </ul>
          </div>

        </div>

        {/* Footer Base Baseline Area */}
        <div className="border-t border-slate-900 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © 2026 MediQueue Systems Inc. All rights reserved.
          </p>

          {/* Rebranded Social Anchors (X Logo Verification Checklist Match) */}
          <div className="flex gap-6 text-xs font-bold text-slate-500">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
