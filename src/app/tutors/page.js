"use client";
import React, { useState, useEffect } from "react";
import { axiosPublic } from "@/api/axiosPublic";
import TutorCard from "@/components/home/TutorCard";
import Spinner from "@/components/shared/Spinner";

export default function TutorsPage() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams();
    if (search) query.append("search", search);
    if (start) query.append("startDate", start);
    if (end) query.append("endDate", end);

    axiosPublic.get(`/tutors?${query.toString()}`)
      .then(({ data }) => setTutors(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [search, start, end]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 min-h-screen">
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-2xs border border-slate-100 dark:border-slate-800 mb-8 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="text-[10px] font-black text-slate-400 block mb-1.5 uppercase tracking-wide">Search Tutor Name</label>
          <input type="text" placeholder="e.g. Professor Harrison" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500" />
        </div>
        <div className="w-full md:w-48">
          <label className="text-[10px] font-black text-slate-400 block mb-1.5 uppercase tracking-wide">Available From</label>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500" />
        </div>
        <div className="w-full md:w-48">
          <label className="text-[10px] font-black text-slate-400 block mb-1.5 uppercase tracking-wide">Available To</label>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl text-xs outline-none focus:border-blue-500" />
        </div>
      </div>

      {loading ? <Spinner /> : tutors.length === 0 ? (
        <div className="text-center py-20 text-slate-400">No tutors match the parameters set.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map(t => <TutorCard key={t._id} tutor={t} />)}
        </div>
      )}
    </div>
  );
}
