"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const MedicalCrossIcon = ({ size = 24, color = "#00e676" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="9.5" y="2" width="5" height="20" rx="2.5" fill={color}/>
    <rect x="2" y="9.5" width="20" height="5" rx="2.5" fill={color}/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#060a06]/85 backdrop-blur-xl border-b border-white/[0.06]"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — Full Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Icon */}
          <div className="w-9 h-9 rounded-[10px] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,230,118,0.15), rgba(0,188,212,0.08))",
              border: "1px solid rgba(0,230,118,0.25)"
            }}>
            <MedicalCrossIcon size={18} color="#00e676" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-0">
            <span className="text-[18px] font-black leading-none tracking-tight text-white"
              style={{ letterSpacing: "-0.03em" }}>
              MyCare
              <span style={{
                background: "linear-gradient(135deg, #00e676, #00bcd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>+</span>
            </span>
            <span className="text-[8px] tracking-[0.18em] uppercase font-semibold"
              style={{ color: "#3a6a3a" }}>
              Medical Assistant
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Features", "Doctors", "About"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              className="text-[11px] font-semibold tracking-wide transition-colors duration-300"
              style={{ color: "#3a5a3a", letterSpacing: "0.04em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00e676")}
              onMouseLeave={e => (e.currentTarget.style.color = "#3a5a3a")}>
              {item}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login"
            className="px-4 py-2 text-[11px] font-bold rounded-lg transition-all duration-300"
            style={{
              border: "1px solid rgba(0,230,118,0.22)",
              color: "#00e676",
              background: "transparent"
            }}>
            Login
          </Link>
          <Link href="/register"
            className="px-4 py-2 text-[11px] font-black rounded-lg transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00e676, #00c853)",
              color: "#000",
              boxShadow: "0 4px 16px rgba(0,230,118,0.2)"
            }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#00e676" }}/>
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#00e676" }}/>
          <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#00e676" }}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{
            background: "rgba(6,10,6,0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.05)"
          }}>
          {["Home", "Features", "Doctors", "About"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors"
              style={{ color: "#3a5a3a" }}
              onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/login" className="flex-1 text-center py-2.5 text-xs font-bold rounded-lg"
              style={{ border: "1px solid rgba(0,230,118,0.22)", color: "#00e676" }}>
              Login
            </Link>
            <Link href="/register" className="flex-1 text-center py-2.5 text-xs font-black rounded-lg"
              style={{ background: "linear-gradient(135deg, #00e676, #00c853)", color: "#000" }}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}