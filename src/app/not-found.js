"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  // Satisfies the Dynamic Website Title change constraint for the error state
  useEffect(() => {
    document.title = "404 - Page Not Found | MediQueue";
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-white dark:bg-slate-950 px-6 py-12 transition-colors duration-300">
      <div className="max-w-md w-full text-center flex flex-col items-center animate-fadeIn">
        
        {/* Animated Visual Anchor / Icon Graphics */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl w-48 h-48 animate-pulse" />
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-100/50 dark:shadow-none relative z-10">
            <span className="text-7xl font-black tracking-tight text-blue-600 dark:text-blue-500 block mb-1">
              404
            </span>
            <div className="flex items-center justify-center gap-1 text-slate-400 dark:text-slate-500 font-mono text-xs uppercase tracking-widest">
              <Search size={12} /> Route Missing
            </div>
          </div>
        </div>

        {/* Requirements Uniform Typography Headings */}
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
          Lost in Destination Route?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
          The educational directory mapping index parameter you requested does not exist or has been shifted across active booking database clusters.
        </p>

        {/* Shared Theme Button Styling Matrix */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full justify-center">
          <Button
            as={Link}
            href="/"
            color="primary"
            size="lg"
            radius="xl"
            className="bg-blue-600 hover:bg-blue-700 font-bold px-6 py-5 text-sm shadow-lg shadow-blue-500/20 w-full sm:w-auto transition-transform hover:-translate-y-0.5"
            startContent={<Home size={16} />}
          >
            Return to Safety
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="bordered"
            size="lg"
            radius="xl"
            className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold px-6 py-5 text-sm w-full sm:w-auto transition-transform hover:-translate-y-0.5"
            startContent={<ArrowLeft size={16} />}
          >
            Previous Track
          </Button>
        </div>
      </div>
    </div>
  );
}
