"use client";
import React, { useEffect, useState } from "react";
import { axiosPublic } from "@/api/axiosPublic";
import TutorCard from "./TutorCard";
import Spinner from "../shared/Spinner";

export default function FeaturedTutors() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic.get("/tutors?limit=6")
      .then(({ data }) => setTutors(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-black tracking-tight mb-2">Featured Instructors</h2>
      <p className="text-sm text-slate-400 mb-8">Top-tier verified educators ready to accelerate your structural field progress.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map(t => <TutorCard key={t._id} tutor={t} />)}
      </div>
    </section>
  );
}
