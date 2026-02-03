"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaQuoteLeft,
  FaGlobe,
  FaUniversity,
  FaChartLine,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function AboutClient() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: journeyRef, inView: journeyInView } = useInView({
    triggerOnce: true,
  });
  const { ref: leadershipRef, inView: leadershipInView } = useInView({
    triggerOnce: true,
  });
  const { ref: academicRef, inView: academicInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. ABOUT (HERO) */}
      <section
        ref={headerRef}
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${headerInView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-amber-500"></span>
                <span className="text-amber-600 text-xs font-bold tracking-[0.4em] uppercase">
                  About Sabina Akter
                </span>
              </div>
              <h1 className="text-6xl lg:text-[7rem] font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
                Architect of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
                  Possibility.
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Chairperson of Betopia Group & Bdcalling IT. Transforming the
                digital landscape of Bangladesh through visionary leadership and
                human-centric innovation.
              </p>
              <div className="flex gap-4">
                <SocialButton icon={FaLinkedin} />
                <SocialButton icon={FaTwitter} />
                <SocialButton icon={FaEnvelope} />
              </div>
            </div>

            <div
              className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${headerInView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image
                  src="https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp"
                  alt="Sabina Akter"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENTREPRENEURIAL JOURNEY */}
      <section ref={journeyRef} className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${journeyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div>
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                The Journey
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                From Inception to <br />
                <span className="text-amber-600 font-serif italic">
                  Global Impact.
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Sabina Akter&apos;s entrepreneurial path began in 2014 with a
                  singular vision: to create opportunities where none existed.
                  What started as a modest initiative has blossomed into a
                  digital empire.
                </p>
                <p>
                  By co-founding <strong>Bdcalling IT</strong> in 2017, she laid
                  the groundwork for what would become one of the nation&apos;s
                  premier IT service providers. Today, her journey is marked by
                  the empowerment of over 3,500 professionals and operations
                  spanning 22 countries.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors"
                >
                  View Full Interactive Timeline <FaChartLine />
                </Link>
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] -mr-32 -mt-32 opacity-60"></div>
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    10+
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    5k+
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    Jobs Created
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm col-span-2">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    22+
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    Global Markets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE LEADERSHIP */}
      <section
        ref={leadershipRef}
        className="py-32 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${leadershipInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <h4 className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Enterprise Leadership
            </h4>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Values that Drive <br />{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                The Ecosystem.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto md:mx-0">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity First</h3>
              <p className="text-slate-400 leading-relaxed">
                Upholding the highest ethical standards in every business
                dealing, ensuring trust remains our most valuable currency.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto md:mx-0">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-400 leading-relaxed">
                Constantly challenging the status quo to bring groundbreaking
                solutions to the global market.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto md:mx-0">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
              <p className="text-slate-400 leading-relaxed">
                Creating pathways for young talent to thrive, learn, and lead in
                the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC FOUNDATION */}
      <section ref={academicRef} className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex flex-col lg:flex-row gap-16 items-center transition-all duration-1000 ${academicInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="lg:w-1/2">
              <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                  alt="Academic Foundation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <FaUniversity className="text-5xl mb-4 text-amber-400" />
                  <h3 className="text-3xl font-bold">Lifelong Learner</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Academic Foundation
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                Rooted in{" "}
                <span className="font-serif italic text-amber-600">
                  Knowledge.
                </span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 font-bold border border-slate-100">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Diploma in Computer Technology
                    </h3>
                    <p className="text-slate-500 mt-1">
                      Brahmanbaria Polytechnic Institute
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 font-bold border border-slate-100">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      B.Sc. in Computer Science (Ongoing)
                    </h3>
                    <p className="text-slate-500 mt-1">
                      Daffodil International University
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-10 text-slate-500 leading-relaxed italic border-l-4 border-amber-500 pl-6">
                &quot;Education is not just about acquiring degrees; it&apos;s
                about building the intellectual resilience to solve
                tomorrow&apos;s problems.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP ALIGNMENT */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FaQuoteLeft className="text-5xl text-amber-100 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-serif italic text-slate-800 leading-tight mb-12">
            &quot;True leadership aligns vision with action. It&apos;s about
            creating a harmony between business growth and social impact.&quot;
          </h2>
          <div className="inline-flex flex-col items-center">
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-4"></div>
            <h4 className="text-xl font-bold text-slate-900 uppercase tracking-widest">
              Sabina Akter
            </h4>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1">
              Leadership Philosophy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const SocialButton = ({ icon: Icon }) => (
  <a
    href="#"
    className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm"
  >
    <Icon size={16} />
  </a>
);
