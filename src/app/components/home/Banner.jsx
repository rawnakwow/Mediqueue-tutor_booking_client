"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  const [active, setActive] = useState(0);
  const slides = [
  {
    image: "/banner/banner1.jpg", // Leading slash automatically references the public/ directory
    tagline: "ELITE ACADEMIC GUIDANCE",
    title: "Master Your Future Progress",
    description: "Unlock your absolute potential with custom 1-on-1 online learning channels directed by the planet's top academic professors."
  },
  {
    image: "/banner/banner2.jpg",
    tagline: "ELIMINATE SCHEDULING CONFLICTS",
    title: "Seamless Real-Time Bookings",
    description: "Secure dedicated session digital tokens instantly. Skip standard manual processing delay holding parameters entirely."
  },
  {
    image: "/banner/banner3.jpg",
    tagline: "FLEXIBLE LEARNING CHANNELS",
    title: "Learn Anywhere, On Your Clock",
    description: "Filter verified tutors by subject category metrics, location boundaries, and modern hybrid flexible communication structures."
  }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[540px] md:h-[600px] bg-slate-900 overflow-hidden">
      {slides.map((s, idx) => (
        <div key={idx} className={`absolute inset-0 w-full h-full transition-all duration-1000 ${idx === active ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
          <img src={s.img} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-2xl leading-none mb-4">{s.title}</h1>
            <p className="text-sm md:text-lg text-slate-300 max-w-lg mb-6">{s.desc}</p>
            <Button as={Link} href="/tutors" color="primary" radius="xl" className="bg-blue-600 font-bold px-8 shadow-xl shadow-blue-500/20" endContent={<ArrowRight size={16} />}>Browse Tutors</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
