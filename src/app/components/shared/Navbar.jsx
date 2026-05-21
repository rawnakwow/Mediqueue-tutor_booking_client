"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, Avatar } from "@heroui/react"; // Safely importing valid atomic components
import toast from "react-hot-toast";
import { authClient } from "../../api/auth/auth-client";
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Simulated Account Auth State Observer Map
  const [user, setUser] = useState({
    displayName: "Alex Carter",
    email: "student.alex@mediqueue.com",
    photoURL: "https://unsplash.com"
  });

  useEffect(() => {
    const syncSystemTheme = () => {
      const isDarkSelected = localStorage.getItem("theme") === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDarkSelected) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    };

    syncSystemTheme();
  }, []);

  const handleThemeToggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Successfully logged out from session registry.");
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    router.push("/");
  };

  const getLinkClass = (href) => 
    `text-sm font-bold transition-all relative py-1 ${
      pathname === href 
        ? "text-blue-600 dark:text-blue-400 font-extrabold" 
        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
    }`;

  return (
    <nav className="w-full bg-white/90 dark:bg-slate-950/90 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 backdrop-blur-md px-6 md:px-16 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Mobile Hamburg Trigger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-slate-600 dark:text-slate-400 focus:outline-none p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Brand Logo Layout Wrapper */}
        <Link href="/" className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span className="bg-blue-600 text-white px-2.5 py-1 rounded-xl text-xl font-black shadow-md shadow-blue-500/20">M</span>
          MediQueue
        </Link>

        {/* Desktop Navigation Links Container */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          <li><Link href="/" className={getLinkClass("/")}>Home</Link></li>
          <li><Link href="/tutors" className={getLinkClass("/tutors")}>Tutors</Link></li>
          {user && (
            <>
              <li><Link href="/add-tutor" className={getLinkClass("/add-tutor")}>Add Tutor</Link></li>
              <li><Link href="/my-tutors" className={getLinkClass("/my-tutors")}>My Tutors</Link></li>
              <li><Link href="/my-bookings" className={getLinkClass("/my-bookings")}>My Booked Sessions</Link></li>
            </>
          )}
        </ul>

        {/* Utility Actions & User Configurations */}
        <div className="flex items-center gap-4 relative">
          
          {/* Theme Control Toggler */}
          <Button isIconOnly variant="light" radius="full" onClick={handleThemeToggle} className="text-slate-600 dark:text-slate-400">
            {isDarkMode ? (
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </Button>

          {user ? (
            /* Lightweight Accessible Dropdown Menu */
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="focus:outline-none block relative z-10 transition-transform duration-200 hover:scale-105"
              >
                <Avatar isBordered color="primary" radius="full" name={user.displayName} src={user.photoURL} className="w-10 h-10 object-cover" />
              </button>

              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl py-2.5 z-20 animate-fadeIn text-left">
                    <div className="px-4 py-2 border-b border-slate-50 dark:border-slate-800 mb-1.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active System Identity</p>
                      <p className="text-xs font-extrabold text-slate-800 dark:text-white truncate mt-0.5">{user.email}</p>
                    </div>
                    <button 
                      onClick={() => { router.push("/profile"); setIsDropdownOpen(false); }}
                      className="w-full text-left block px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      My Profile Dashboard
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-xs font-black text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors mt-1"
                    >
                      Log Out Account
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Button 
              as={Link} 
              href="/login" 
              color="primary" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 rounded-xl shadow-lg shadow-blue-500/15 text-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              Login / Register
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Overlay Sub-navigation Track */}
      {isMenuOpen && (
        <ul className="lg:hidden mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3 list-none m-0 p-0 animate-slideDown">
          <li><Link href="/" onClick={() => setIsMenuOpen(false)} className={`w-full block py-2 text-sm font-bold ${pathname === "/" ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`}>Home</Link></li>
          <li><Link href="/tutors" onClick={() => setIsMenuOpen(false)} className={`w-full block py-2 text-sm font-bold ${pathname === "/tutors" ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`}>Tutors</Link></li>
          {user && (
            <>
              <li><Link href="/add-tutor" onClick={() => setIsMenuOpen(false)} className={`w-full block py-2 text-sm font-bold ${pathname === "/add-tutor" ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`}>Add Tutor</Link></li>
              <li><Link href="/my-tutors" onClick={() => setIsMenuOpen(false)} className={`w-full block py-2 text-sm font-bold ${pathname === "/my-tutors" ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`}>My Tutors</Link></li>
              <li><Link href="/my-bookings" onClick={() => setIsMenuOpen(false)} className={`w-full block py-2 text-sm font-bold ${pathname === "/my-bookings" ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`}>My Booked Sessions</Link></li>
              <hr className="border-slate-100 dark:border-slate-800 my-1" />
              <li><button onClick={handleLogout} className="w-full text-left py-1 text-sm font-black text-red-500">Log Out Account</button></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
