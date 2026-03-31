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
          ? "bg-[#0a0f0a]/90 backdrop-blur-md border-b border-[rgba(0,230,118,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#00e676] flex items-center justify-center pulse-glow">
            <span className="text-black font-black text-lg">M+</span>
          </div>
          <span className="text-xl font-black text-white group-hover:text-[#00e676] transition-colors duration-300">
            My<span className="text-[#00e676]">Care</span>Plus
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Features", "Doctors", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-[#00e676] transition-colors duration-300 text-sm font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00e676] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-[#00e676] border border-[#00e676] rounded-lg hover:bg-[#00e676] hover:text-black transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm bg-[#00e676] text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,230,118,0.5)] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#00e676] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#00e676] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#00e676] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f0a]/95 backdrop-blur-md border-t border-[rgba(0,230,118,0.2)] px-6 py-4 flex flex-col gap-4">
          {["Home", "Features", "Doctors", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-[#00e676] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="/login" className="text-[#00e676] font-medium">Login</Link>
          <Link href="/register" className="bg-[#00e676] text-black font-bold px-4 py-2 rounded-lg text-center">Get Started</Link>
        </div>
      )}
    </nav>
  );
}
