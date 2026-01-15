"use client";
import React from "react";
import Image from "next/image";
import { FaAward, FaQuoteLeft, FaGraduationCap, FaBriefcase, FaUsers, FaHeart, FaArrowRight, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Journey from "../components/Journey";

export default function AboutClient() {
    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: bioRef, inView: bioInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: valueRef, inView: valueInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-gold/30">
            {/* Premium Editorial Hero Section */}
            <section
                ref={headerRef}
                className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 bg-slate-950 overflow-hidden"
            >
                {/* Abstract Background Design */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] animate-pulse-slow"></div>
                    <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px]"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        {/* Text Side */}
                        <div className={`lg:col-span-7 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${headerInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                            <div className="inline-flex items-center gap-4 mb-10 overflow-hidden">
                                <span className="h-px w-12 bg-gold/50"></span>
                                <span className="text-gold text-xs font-bold tracking-[0.5em] uppercase">Executive Profile</span>
                            </div>

                            <h1 className="text-6xl lg:text-[10rem] font-bold text-white mb-10 leading-[0.85]">
                                Sabina <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-slate-500">
                                    Akter.
                                </span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-white/10 pt-12">
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-4">The Vision</h3>
                                    <p className="text-slate-500 leading-relaxed font-light text-lg">
                                        Driving the digital revolution in Bangladesh by fostering institutional excellence and human-centric innovation.
                                    </p>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="flex gap-6">
                                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold transition-all duration-300"><FaLinkedin size={18} /></a>
                                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold transition-all duration-300"><FaTwitter size={18} /></a>
                                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold transition-all duration-300"><FaEnvelope size={18} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 cubic-bezier(0.23, 1, 0.32, 1) ${headerInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                            <div className="relative aspect-[4/5] w-full rounded-[4rem] overflow-hidden border-[12px] border-white/5 shadow-3xl group">
                                <Image
                                    src="https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp"
                                    alt="Sabina Akter"
                                    fill
                                    className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>

                                {/* Floating Designation */}
                                <div className="absolute bottom-12 left-0 right-0 text-center px-8">
                                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 py-6 px-4 rounded-[2.5rem]">
                                        <p className="text-white font-bold tracking-widest text-xs uppercase mb-1">Chairperson</p>
                                        <p className="text-gold font-medium text-sm">Betopia Group & Bdcalling IT</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/20 rounded-full animate-spin-slow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Stats - High Impact */}
            <section className="relative -mt-24 z-30 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Jobs Created", value: "5,000+", icon: <FaUsers />, sub: "Empowering National Workforce" },
                        { label: "Global Presence", value: "22+", icon: <FaGlobe />, sub: "Across 4 Continents" },
                        { label: "Recognition", value: "National", icon: <FaAward />, sub: "BASIS ICT Award Winner" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-xl shadow border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-4 transition-all duration-500">

                            <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tighter">{stat.value}</div>
                            <div className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                            <p className="text-slate-500 text-sm">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Narrative Section */}
            <section className="py-40" ref={bioRef}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        {/* Editorial Left Side */}
                        <div className={`space-y-6 transition-all duration-1000 ${bioInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                A Catalyst for <br />
                                <span className="italic font-serif text-slate-500">Digital Change.</span>
                            </h2>
                            <div className="w-24 h-1.5 bg-gold rounded-full"></div>
                            <div className="space-y-6 text-xl text-slate-500 font-light leading-relaxed">
                                <p>
                                    Sabina Akter's journey is a testament to the power of resilient leadership. As the Chairperson of **Betopia Group**, she has transformed a vision into a diversified conglomerate that serves as a cornerstone of Bangladesh's IT exports.
                                </p>
                                <p>
                                    Her approach integrates high-level strategic thinking with a deep commitment to social responsibility. By focusing on creating scalable opportunities, she has enabled thousands of young professionals to find their place in the global economy.
                                </p>
                            </div>

                            <div className="pt-8">
                                <a href="/journey" className="inline-flex items-center gap-4 text-slate-950 font-bold group">
                                    <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        <FaArrowRight />
                                    </span>
                                    <span className="tracking-widest text-xs uppercase">View Full Career Timeline</span>
                                </a>
                            </div>
                        </div>

                        {/* Grid Cards Right Side */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${bioInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                            {/* Card 1 */}
                            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                                <FaGraduationCap className="text-3xl text-gold mb-8 group-hover:rotate-12 transition-transform" />
                                <h4 className="text-xl font-bold text-slate-900 mb-4">Academic Roots</h4>
                                <p className="text-slate-500 text-md leading-relaxed">
                                    Diploma in Computer Technology from Brahmanbaria Polytechnic, currently pursuing B.Sc in CSE. A lifelong learner.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-slate-900 p-10 rounded-[3rem] shadow-xl text-white transform md:translate-y-12 transition-all duration-500 group">
                                <FaHeart className="text-3xl text-rose-500 mb-8 group-hover:scale-125 transition-transform" />
                                <h4 className="text-xl font-bold mb-4">Core Balance</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    A mother of five, Sabina balances her role as a nurturing parent with her responsibilities as a global executive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Statement Section */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none select-none">
                    <span className="text-[20rem] font-bold text-slate-900 tracking-tighter">"</span>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-12">
                        <FaQuoteLeft className="text-6xl text-gold/20" />
                        <p className="text-3xl lg:text-5xl font-serif italic text-slate-800 leading-tight">
                            "Prosperity is measured by the opportunities we create, the lives we uplift, and the confidence we inspire in people to reach their ultimate potential."
                        </p>
                        <div className="space-y-4">
                            <div className="h-0.5 w-24 bg-gold mx-auto"></div>
                            <h4 className="text-2xl font-bold text-slate-900">Sabina Akter</h4>
                            <p className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Founder's Philosophy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrated Journey Preview */}
            <div className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h4 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">Milestones</h4>
                            <h2 className="text-5xl font-bold text-slate-900 tracking-tight">The Growth <span className="text-slate-500 text-4xl block md:inline">Trajector.</span></h2>
                        </div>
                        <p className="max-w-md text-slate-500 font-light text-xl">
                            From a vision in 2014 to a multi-national presence in 2025. Explore the key moments that defined our legacy.
                        </p>
                    </div>
                </div>
                <Journey />
            </div>

            {/* Excellence Pillars */}
            <section className="py-40 bg-slate-950 text-white overflow-hidden relative" ref={valueRef}>
                <div className="absolute inset-0 bg-gold/5 blur-[150px]-z-10 animate-pulse"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 transition-all duration-1000 ${valueInView ? 'opacity-100' : 'opacity-0'}">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Pillars of Excellence.</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            The core values that drive every decision within the Betopia Ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Empowerment", desc: "Building platforms where talent meets opportunity without borders.", icon: "01" },
                            { title: "Integrity", desc: "Maintaining the highest standards of ethical leadership in all ventures.", icon: "02" },
                            { title: "Innovation", desc: "Relentlessly pursuing technological breakthroughs that matter.", icon: "03" },
                        ].map((val, idx) => (
                            <div key={idx} className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all duration-500">
                                <span className="absolute top-10 right-10 text-5xl font-bold text-white/5 group-hover:text-gold/10 transition-colors uppercase">{val.icon}</span>
                                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-gold transition-colors">{val.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-light">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Final CTA */}
            <section className="py-40 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-slate-50 p-12 lg:p-24 rounded-[4rem] border border-slate-100 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-slate-900 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                            Ready to Shape the <br /> <span className="text-gold">Future Together?</span>
                        </h2>
                        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Join us as we move towards Vision 2030. Whether you're a potential partner, student, or talent, there's a place for you in our ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href="/contact" className="px-12 py-5 bg-slate-900 text-white font-bold tracking-widest text-xs uppercase rounded-full hover:bg-gold transition-all duration-300 shadow-2xl hover:shadow-gold/30">
                                Get In Touch
                            </a>
                            <a href="/vision" className="px-12 py-5 border border-slate-200 text-slate-950 font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white hover:border-gold transition-all duration-300">
                                Explore Vision 2030
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Custom Icons
const FaGlobe = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const FaChartLine = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
);
