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
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
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
        className={`fixed top-0 left-0 w-full z-[100] text-white transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-6">
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
                className="transition-colors text-base font-medium tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <div className="border-t border-white/10 hidden md:block">
              <Link
                href="/reservation"
                className="block w-full px-5 py-3 text-center bg-[#c5a059] text-black  rounded-xl font-bold text-lg hover:bg-[#d4af37] transition-colors"
              >
                RESERVE NOW
              </Link>
            </div>

            {/* Mobile Toggle */}
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

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-black z-[70] shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
      </div>
    </>
  );
}
