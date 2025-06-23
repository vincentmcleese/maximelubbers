"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FOMO 2.0", href: "#fomo" },
  { label: "TEDx", href: "#tedx" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo/Name */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl tracking-tight text-foreground"
        >
          <Image
            src="/images/headerlogo.png"
            alt="Maxime Lubbers Logo"
            width={40}
            height={40}
            className="rounded-none"
          />
          <div>
            Maxime <span className="font-light">Lubbers</span>
          </div>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:underline underline-offset-8 transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-foreground/30"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://www.untanglelab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#6C7AD7] text-white font-medium hover:bg-[#6C7AD7]/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6C7AD7]/50"
            >
              Untangle Lab
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#FF1DE9] text-white font-medium hover:bg-[#FF1DE9]/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#FF1DE9]/50"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-foreground rounded"></span>
          <span className="block w-6 h-0.5 bg-foreground rounded"></span>
          <span className="block w-6 h-0.5 bg-foreground rounded"></span>
        </button>
        {/* Mobile Menu */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-background border-t border-black/10 dark:border-white/10 flex flex-col items-center gap-4 py-4 md:hidden shadow-lg z-50">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-1 px-4 text-lg hover:underline underline-offset-4"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://www.untanglelab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-[#6C7AD7] text-white font-medium hover:bg-[#6C7AD7]/90 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                Untangle Lab
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="px-6 py-2 rounded-full bg-[#FF1DE9] text-white font-medium hover:bg-[#FF1DE9]/90 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
