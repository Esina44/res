"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "top-0 pt-3 pb-3 bg-background shadow-lg"
          : "top-5 pt-3 pb-12 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold font-serif tracking-wider">
          <span className="text-[var(--primary)]">Royal</span>
          <span className="text-white"> Platter</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link
            href="/"
            className="hover:text-[var(--primary)] transition-colors text-base font-medium tracking-widest uppercase"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="hover:text-[var(--primary)] transition-colors text-base font-medium tracking-widest uppercase"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="hover:text-[var(--primary)] transition-colors text-base font-medium tracking-widest uppercase"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[var(--primary)] transition-colors text-base font-medium tracking-widest uppercase"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <button className="relative group">
            <svg
              className="w-7 h-7 hover:text-[var(--primary)] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-[var(--secondary)] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <Link href="/reservation" className="btn-primary py-3 px-8 text-base">
            RESERVE NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
