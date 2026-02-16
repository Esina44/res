"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 pt-3 pb-3 bg-background shadow-lg"
            : "top-5 pt-3 pb-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/"
            className="text-4xl font-bold font-serif tracking-wider"
          >
            <span className="text-[var(--primary)]">Royal</span>
            <span className="text-white"> Platter</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[var(--primary)] transition-colors text-base font-medium tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/reservation"
                className="btn-primary py-3 px-8 text-base"
              >
                RESERVE NOW
              </Link>
            </div>

            {/* Mobile Toggle Button (Visible only on small screens) */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0c0c0c] z-[70] shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross button at the top right of sidebar */}
        <div className="p-6 flex justify-end">
          <button
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-8 gap-8 mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#c5a059] text-xl font-medium tracking-widest uppercase transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-8 border-t border-white/10">
            <Link
              href="/reservation"
              className="block w-full text-center bg-[#c5a059] text-black py-4 rounded-xl font-bold text-lg hover:bg-[#d4af37] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              RESERVE NOW
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-auto p-8 text-center border-t border-white/10 opacity-50">
          <p className="text-white text-xs tracking-widest uppercase mb-4">
            Established 1998
          </p>
          <div className="flex justify-center gap-6">
            <span className="text-white text-xs font-bold">IG</span>
            <span className="text-white text-xs font-bold">FB</span>
            <span className="text-white text-xs font-bold">TW</span>
          </div>
        </div>
      </div>
    </>
  );
}
