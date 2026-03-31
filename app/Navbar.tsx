"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060a06]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          
          {/* Icon */}
          <div className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center 
            bg-gradient-to-br from-[#00E676]/10 to-[#00BCD4]/10 
            border border-[#00E676]/25 
            shadow-[0_0_16px_rgba(0,230,118,0.15)]">

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <defs>
                <linearGradient id="plusGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#00BCD4" />
                </linearGradient>
              </defs>
              <rect x="8.5" y="1" width="3" height="18" rx="1.5" fill="url(#plusGrad)" />
              <rect x="1" y="8.5" width="18" height="3" rx="1.5" fill="url(#plusGrad)" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[1px]">
            <span className="text-[18px] font-black leading-none tracking-tight flex items-baseline gap-1">
              <span className="text-white">MyCare</span>
              <span className="bg-gradient-to-r from-[#00E676] to-[#00BCD4] bg-clip-text text-transparent">
                +
              </span>
            </span>
            <span className="text-[8px] tracking-[0.18em] uppercase font-semibold text-[#2a5a2a]">
              Medical Assistant
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Features", "Doctors", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-semibold tracking-wide text-[#3a5a3a] hover:text-[#00E676] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
            className="px-4 py-2 text-[11px] font-bold rounded-lg border border-[#00E676]/20 text-[#00E676] hover:bg-[#00E676]/10 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 text-[11px] font-black rounded-lg bg-gradient-to-r from-[#00E676] to-[#00C853] text-black shadow-[0_4px_16px_rgba(0,230,118,0.2)] hover:shadow-[0_0_20px_#00E676] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            } bg-[#00E676]`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            } bg-[#00E676]`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            } bg-[#00E676]`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-4 bg-[#060a06]/95 backdrop-blur-xl border-t border-white/[0.05]">
          
          {["Home", "Features", "Doctors", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#3a5a3a] hover:text-[#00E676] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="flex gap-3 pt-2">
            <Link
              href="/login"
              className="flex-1 text-center py-2.5 text-xs font-bold rounded-lg border border-[#00E676]/20 text-[#00E676]"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="flex-1 text-center py-2.5 text-xs font-black rounded-lg bg-gradient-to-r from-[#00E676] to-[#00C853] text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}