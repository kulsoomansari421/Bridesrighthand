"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
  <Link
  href="/"
  className="relative shrink-0 w-[320px] h-[100px]"
>
  <Image
    src="/BridesrightLogo.png"
    alt="BridesRight logo"
    fill
    className="object-contain"
    sizes="420px"
    priority
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.3em] text-[#4d413b] hover:text-[#8c6a3f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex h-11 items-center justify-center bg-[#a67f4a] px-6 text-[10px] uppercase tracking-[0.22em] text-white transition hover:opacity-90"
        >
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e0d1bf] bg-white">
          <div className="flex flex-col px-6 py-4">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-[#4d413b]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex h-11 items-center justify-center bg-[#a67f4a] px-6 text-[10px] uppercase tracking-[0.22em] text-white"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}