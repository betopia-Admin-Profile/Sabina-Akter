"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "JOURNEY", href: "/journey" },
    { name: "ECOSYSTEM", href: "/ecosystem" },
    { name: "VISION", href: "/vision" },
    { name: "NEWS", href: "/news" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-5"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="group z-50 relative">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-slate-900 group-hover:opacity-80 transition-opacity">
                SABINA <span className="text-red-500 italic">AKTER</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-widest transition-colors uppercase relative group
                  ${pathname === link.href ? "text-amber-600" : "text-slate-600 hover:text-amber-600"}
                `}
              >
                {link.name}
                {/* Active Indicator Dot */}
                {pathname === link.href && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2 bg-slate-900 text-white text-xs font-bold tracking-widest rounded-full hover:bg-amber-600 transition-colors duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-900 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX size={28} className="text-slate-900" />
            ) : (
              <HiMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Side Drawer */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.77, 0, 0.175, 1) lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full relative">
          {/* Close Button Area */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <HiX size={24} className="text-slate-900" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 px-8 mt-4 overflow-y-auto max-h-[70vh]">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex flex-col items-start border-b border-slate-100 pb-4 ${
                  pathname === link.href ? "border-amber-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {pathname === link.href && (
                    <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
                  )}
                  <span
                    className={`text-2xl font-bold transition-colors ${
                      pathname === link.href
                        ? "text-amber-600"
                        : "text-slate-900 group-hover:text-amber-600"
                    }`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {link.name}
                  </span>
                </div>

                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Explore
                </span>
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full py-4 bg-slate-900 text-white text-center text-sm font-bold tracking-widest rounded-xl hover:bg-amber-600 transition-colors"
            >
              CONTACT TEAM
            </Link>
          </div>

          {/* Decorative Foot */}
          <div className="mt-auto p-8 bg-slate-50 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">
              Sabina Akter
            </h4>
            <p className="text-[10px] text-slate-500">
              Chairperson, Betopia Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
