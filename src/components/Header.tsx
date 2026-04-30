"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 h-24 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 border-b border-stone-200/50 shadow-sm"
          : "bg-white/15 backdrop-blur-xl border-b border-stone-200/20"
      }`}
    >
      {/* Left Nav */}
      <div className="flex-1 hidden md:flex items-center gap-8 font-serif tracking-[0.2em] uppercase text-xs">
        <Link
          href="/collections"
          className={`border-b border-amber-500/50 pb-1 hover:text-amber-600 transition-all duration-500 active:scale-95 ${
            scrolled ? "text-stone-900" : "text-stone-900"
          }`}
        >
          Collections
        </Link>
        <Link
          href="/couture"
          className={`hover:text-amber-600 transition-all duration-500 active:scale-95 ${
            scrolled ? "text-stone-500" : "text-stone-500"
          }`}
        >
          Couture
        </Link>
        <Link
          href="/lookbook"
          className={`hover:text-amber-600 transition-all duration-500 active:scale-95 ${
            scrolled ? "text-stone-500" : "text-stone-500"
          }`}
        >
          Editorial
        </Link>
        <Link
          href="/about"
          className={`hover:text-amber-600 transition-all duration-500 active:scale-95 ${
            scrolled ? "text-stone-500" : "text-stone-500"
          }`}
        >
          About
        </Link>
      </div>

      {/* Logo */}
      <div className="flex-1 flex justify-center">
        <Link href="/">
          <span className="text-3xl font-light tracking-[0.5em] text-stone-900 font-serif">
            VYRA
          </span>
        </Link>
      </div>

      {/* Right Nav */}
      <div className="flex-1 flex justify-end items-center gap-6 text-stone-900">
        <button
          className="hover:text-amber-600 transition-all duration-500 active:scale-95"
          aria-label="Search"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
        <button
          className="hover:text-amber-600 transition-all duration-500 active:scale-95"
          aria-label="Shopping bag"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
        <button
          className="hover:text-amber-600 transition-all duration-500 active:scale-95"
          aria-label="Account"
        >
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </nav>
  );
}
