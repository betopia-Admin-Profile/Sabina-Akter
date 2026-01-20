"use client";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaArrowRight, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Vision", href: "#vision" },
    { name: "Biography", href: "#biography" },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaTwitter, href: "#" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 rounded-t-[3rem] mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold tracking-widest text-white">
                  SABINA AKTER
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mt-1">
                  Chairperson, Betopia Group
                </span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering the next generation of leaders through innovation,
              strategic mentorship, and sustainable business practices.
              Building a future where opportunity knows no
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 text-slate-400 group">
                <FaMapMarkerAlt className="mt-1 text-gold group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 group">
                <FaEnvelope className="text-gold group-hover:text-white transition-colors" />
                <a href="mailto:contact@sabinaakter.com" className="group-hover:text-white transition-colors">
                  contact@sabinaakter.com
                </a>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-8">
              Explore
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-widest text-gold uppercase mb-8">
              Stay Connected
            </h3>
            <p className="text-slate-400 mb-6 text-sm">
              Subscribe to receive updates on latest ventures, thought leadership articles, and community initiatives.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-full focus:outline-none focus:border-gold transition-colors placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-slate-900 hover:bg-white transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <FaArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-900 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Sabina Akter. All rights reserved.
          </p>

          <div className="flex gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:border-gold hover:text-gold hover:bg-slate-900 transition-all duration-300"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
