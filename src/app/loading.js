"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Universal CSS Spinning Keyframe Ring */}
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <h3 className="text-slate-500 dark:text-slate-400 mt-4 text-sm font-semibold tracking-wide animate-pulse">
        Synchronizing MediQueue Dashboards...
      </h3>
    </div>
  );
}
