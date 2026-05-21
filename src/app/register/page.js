"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosPublic from "../../api/axiosPublic";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", photoURL: "", password: "" });

  useEffect(() => {
    document.title = "User Registration | MediQueue";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Password Verification Logic Rule Constraints Matrix
  const validatePasswordMetrics = (pass) => {
    if (pass.length < 6) return "Length must be at least 6 characters";
    if (!/[A-Z]/.test(pass)) return "Must have an Uppercase letter in the password";
    if (!/[a-z]/.test(pass)) return "Must have a Lowercase letter in the password";
    return null;
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    
    // Check Password Validation Criteria Rule Before Submitting
    const passwordErrorMsg = validatePasswordMetrics(formData.password);
    if (passwordErrorMsg) {
      toast.error(passwordErrorMsg);
      return;
    }

    setLoading(true);
    try {
      const response = await axiosPublic.post("/register", formData);
      if (response.status === 201 || response.status === 200) {
        toast.success("Account directory created! Redirecting to login panel.");
        router.push("/login");
      }
    } catch (error) {
      const fallbackMsg = error.response?.data?.message || "Registration processing fault encountered.";
      toast.error(fallbackMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSocialLogin = async () => {
    try {
      const mockSocialPayload = { email: "googleuser@gmail.com", name: "Google Representative" };
      const response = await axiosPublic.post("/social-login", mockSocialPayload);
      
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Google account enrollment validation complete!");
        router.push("/");
      }
    } catch (error) {
      toast.error("Social login mapping pipeline disconnected.");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-8 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-xl w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight text-center mb-1">Create Account</h2>
        <p className="text-xs text-slate-400 text-center mb-8">Register your credentials to claim online learning seats</p>

        <form onSubmit={handleRegistrationSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Identity Name</label>
            <input name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Alex Carter" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
            <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="alex@example.com" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Photo-URL Path Link</label>
            <input name="photoURL" type="url" required value={formData.photoURL} onChange={handleChange} placeholder="https://imagehost.com" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Secure Password Structure</label>
            <input name="password" type="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors" />
          </div>
          <button type="submit" disabled={loading} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all duration-200">
            {loading ? "Processing Database Registry..." : "Register New Identity"}
          </button>
        </form>

        <div className="relative my-5 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-slate-100 dark:bg-slate-800" />
          <span className="bg-white dark:bg-slate-900 px-3 text-xs text-slate-400 font-bold uppercase relative z-10">Or Connect Via</span>
        </div>

        <button onClick={handleGoogleSocialLogin} className="w-full flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold py-3 rounded-xl text-sm transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" color="#4285f4"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" color="#34a853"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" color="#fbbc05"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" color="#ea4335"/></svg>
          Sign Up with Google
        </button>

        <p className="text-center text-xs text-slate-400 font-medium mt-5">
          Already registered in our ledger? <Link href="/login" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Login to Session</Link>
        </p>
      </div>
    </div>
  );
}
