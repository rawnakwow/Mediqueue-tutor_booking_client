import React from "react";
export default function StudentReviews() {
  const feedback = [
    { name: "Leo Harrison", role: "Grade 12 Scholar", text: "MediQueue completely streamlined my calculus preparation cycles. The instant class token confirmation handles parameters safely." },
    { name: "Maya Gupta", role: "University Freshman", text: "No scheduling overlaps, verified pricing rates, and lightning-fast profile query searches. Highly recommended system architecture." }
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-2xl font-black tracking-tight text-center mb-10">Student Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedback.map((f, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xs">
            <p className="text-xs italic text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">"{f.text}"</p>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{f.name}</h4>
            <span className="text-[10px] font-semibold text-slate-400 block">{f.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
