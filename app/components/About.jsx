"use client";
import {
  FaQuoteLeft,
  FaBriefcase,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FaUsers,
      value: "5000+",
      label: "Global Talent",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: FaGlobe,
      value: "22+",
      label: "Countries",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: FaCheckCircle,
      value: "1200+",
      label: "Empowerment",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: FaAward,
      value: "20+",
      label: "Awards",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-10 bg-brand-bright-orange"></span>
            <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm">
              About The Leader
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Crafting a Legacy of{" "}
            <span className="text-brand-bright-orange">Impact</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card - Large (Span 8) */}
          <div
            className={`md:col-span-8 bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Visionary Leadership
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                <strong className="text-slate-900 font-medium">
                  Sabina Akter
                </strong>{" "}
                is the Chairperson of Betopia Group, dedicated to redefining
                excellence across industries through innovation.
              </p>
              <p>
                As a pioneering Co-Founder of{" "}
                <span className="text-brand-bright-orange font-medium">
                  Bdcalling IT Ltd.
                </span>
                , her journey is a testament to resilience transforming a
                startup into a global powerhouse that creates thousands of
                opportunities for youth and women.
              </p>
            </div>
          </div>

          {/* Quote Card - Colored (Span 4) */}
          <div
            className={`md:col-span-4 bg-brand-bright-orange p-8 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <FaQuoteLeft className="text-brand-dark-gray text-6xl absolute top-4 right-4 opacity-20" />
            <div className="relative z-10">
              <p className="text-xl lg:text-2xl font-medium italic leading-relaxed mb-6">
                &ldquo;To empower people and organizations to reach their
                highest potential.&rdquo;
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <FaBriefcase size={14} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider opacity-80">
                  Our Mission
                </p>
                <p className="text-xs opacity-60">Betopia Group</p>
              </div>
            </div>
          </div>

          {/* Stats Cards - Row of 4 (Span 3 each) */}
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`md:col-span-6 lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-100 transition-all duration-500 hover:-translate-y-1 group delay-${300 + idx * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-2xl bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon size={20} />
                </div>
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Journey Bar - Full Width (Span 12) */}
          <div
            className={`md:col-span-12 bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden transition-all duration-700 delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-indigo-900 to-transparent opacity-50"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="max-w-xl">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <FaBriefcase className="text-brand-bright-orange" />{" "}
                  Leadership Journey
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Starting with a vision to bridge the digital gap, she has
                  successfully led teams to deliver thousands of projects
                  globally.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <span className="block text-2xl font-bold text-brand-bright-orange">
                    10+
                  </span>
                  <span className="text-xs text-slate-400 uppercase">
                    Years
                  </span>
                </div>
                <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                  <span className="block text-2xl font-bold text-brand-bright-orange">
                    5+
                  </span>
                  <span className="text-xs text-slate-400 uppercase">
                    Ventures
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
