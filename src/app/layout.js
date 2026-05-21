"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

// Fixed Relative Paths: Moving up from app/ into src/ to resolve the components folder sibling
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
        
        {/* Global Nav Anchor */}
        <Navbar />
        
        {/* Dynamic Multi-Route Content Section View */}
        <main className="min-h-[75vh]">
          {children}
        </main>
        
        {/* Global Footer Anchor */}
        <Footer />
        
        {/* Global toast notification alert engine overlay anchor */}
        <Toaster position="top-center" reverseOrder={false} />
        
      </body>
    </html>
  );
}
