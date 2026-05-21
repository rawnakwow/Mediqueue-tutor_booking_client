import React from "react";
export default function WhyChooseUs() {
  const pillars = [
    { title: "No Time Conflicts", desc: "Our real-time booking sequence completely prevents automated dual slot scheduling collisions." },
    { title: "Verified Instructors", desc: "Every structural tutor profile goes through rigid validation checks for authentication safety." },
    { title: "Instant Token Checks", desc: "Immediate secure ledger token deployment ensures access safety across dashboard views." }
  ];
  return (
    <section className="bg-slate-100 dark:bg-slate-950 border-y border-slate-200/40 dark:border-slate-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-black tracking-tight text-center mb-10">How MediQueue Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xs text-center border border-slate-200/10">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-base font-black flex items-center justify-center mx-auto mb-4">{idx + 1}</span>
              <h3 className="text-base font-bold mb-2">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
