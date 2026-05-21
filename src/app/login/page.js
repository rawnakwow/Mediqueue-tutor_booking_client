"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../api/auth/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    document.title = "User Login | MediQueue";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast.error(error.message || "Invalid authentication parameters mapping.");
        return;
      }

      toast.success("Welcome back! Dashboard verification complete.");
      router.push("/");
    } catch (err) {
      toast.error("Network interface connection dropped.");
    } finally {
      setLoading(false);
    }
  };

  // High-Utility Google Account Access Callback Trigger Handler Rule
  const handleGoogleSocialLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", // Redirects back to home route upon success
      });
    } catch (err) {
      toast.error("Google authentication channel verification dropped.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight text-center mb-1">Welcome Back</h2>
        <p className="text-xs text-slate-400 text-center mb-8">Access your personalized tutor booking schedule ledger</p>
        
        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Email Address</label>
            <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="name@domain.com" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3.5 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors dark:text-white" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Password Identification</label>
            </div>
            <input name="password" type="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3.5 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors dark:text-white" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all duration-200">
            {loading ? "Verifying Credentials..." : "Log In to Account"}
          </button>
        </form>

        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-slate-100 dark:bg-slate-800" />
          <span className="bg-white dark:bg-slate-900 px-3 text-xs text-slate-400 font-bold uppercase relative z-10">Or Access Via</span>
        </div>

        {/* High-Utility Google Activation Anchor */}
        <button 
          onClick={handleGoogleSocialLogin} 
          className="w-full flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-3.5 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.58z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.91 12c0-.79.13-1.57.41-2.24V6.61H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.39l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"/>
          </svg>
          Continue with Google Account
        </button>

        <p className="text-center text-xs text-slate-400 font-medium mt-6">
          New to the system directory? <Link href="/register" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Register Account</Link>
        </p>
      </div>
    </div>
  );
}
