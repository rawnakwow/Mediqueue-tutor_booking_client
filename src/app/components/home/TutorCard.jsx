"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function TutorCard({ tutor }) {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
      <div>
        <div className="h-44 bg-slate-100 dark:bg-slate-950 rounded-xl overflow-hidden mb-4 relative">
          <img src={tutor.photo} alt={tutor.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-black tracking-wide px-2 py-0.5 rounded-full uppercase">{tutor.teachingMode}</span>
        </div>
        <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest block mb-1">{tutor.subject}</span>
        <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 mb-1">{tutor.name}</h3>
        <p className="text-xs text-slate-400 line-clamp-1 mb-4">🏫 {tutor.institution}</p>
      </div>
      <div className="border-t border-slate-50 dark:border-slate-800/40 pt-4 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-400 block font-bold uppercase">Rate</span>
          <span className="text-sm font-black text-slate-800 dark:text-slate-100">${tutor.hourlyFee}/hr</span>
        </div>
        <Button onClick={() => router.push(`/tutors/${tutor._id}`)} size="sm" radius="lg" className="bg-blue-600 text-white font-bold px-4 text-xs shadow-sm">Book Session</Button>
      </div>
    </div>
  );
}
