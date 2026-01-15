"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { FaBullseye, FaUsers, FaProjectDiagram, FaGlobe, FaArrowRight, FaChartLine } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function VisionClient() {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const visionPillars = [
        {
            icon: <FaUsers />,
            title: "Human Empowerment",
            desc: "Creating a platform where 30,000 talents can thrive, innovate, and lead global projects.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaProjectDiagram />,
            title: "Sustainable Ecosystem",
            desc: "Building a interconnected network of SBUs that support and uplift each other organically.",
            color: "from-emerald-500 to-teal-500"
        },
        {
            icon: <FaGlobe />,
            title: "Global Integration",
            desc: "Positioning Bangladesh as a key player in the global technology and service export market.",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <div className="bg-slate-950 min-h-screen text-white overflow-hidden">
            {/* Immersive Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center pt-20"
            >
                {/* Background Visualization */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://i.postimg.cc/3xcL8VRr/betopiaCity.png"
                        alt="Visionary Betopia City"
                        fill
                        className="object-cover opacity-30 mix-blend-luminosity"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className={`lg:col-span-7 transition-all duration-1000 transform ${heroInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
                                <FaBullseye className="text-gold" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase">The Blueprint 2030</span>
                            </div>

                            <h1 className="text-6xl lg:text-9xl font-black mb-8 leading-none">
                                Visionary <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-slate-400">Impact.</span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mb-12">
                                "Leadership is not about being in charge. It is about taking care of those in your charge." - Sabina Akter's driving philosophy for 2030.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <a href="#details" className="px-10 py-4 bg-white text-slate-950 font-bold tracking-widest text-xs uppercase rounded-full hover:bg-gold hover:text-white transition-all duration-300 flex items-center gap-2">
                                    Explore The Plan
                                    <FaArrowRight />
                                </a>
                                <div className="flex items-center gap-4 px-6 border-l border-white/10">
                                    <div className="text-3xl font-bold">12%</div>
                                    <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight">Current Progress <br /> Towards Goal</div>
                                </div>
                            </div>
                        </div>

                        {/* Circular Impact Visualization */}
                        <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 transform ${heroInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="relative w-full aspect-square flex items-center justify-center">
                                {/* Rotating Rings */}
                                <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-10 border border-gold/20 rounded-full animate-reverse-spin-slow"></div>

                                {/* Central Counter */}
                                <div className="relative z-20 text-center bg-slate-900/60 backdrop-blur-3xl p-12 lg:p-16 rounded-full border border-white/10 shadow-2xl">
                                    <div className="text-[10px] text-gold font-bold tracking-[0.4em] uppercase mb-4">Target Talents</div>
                                    <div className="text-8xl lg:text-9xl font-black tracking-tighter mb-2">
                                        {heroInView ? <CountUp end={30} duration={3} /> : "0"}<span className="text-gold">K</span>
                                    </div>
                                    <div className="text-xs text-slate-400 font-medium">By year 2030</div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-0 right-0 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[10px] font-bold tracking-widest uppercase">
                                    Innovation Hub
                                </div>
                                <div className="absolute bottom-10 left-0 bg-gold/10 backdrop-blur-md px-4 py-2 rounded-xl border border-gold/20 text-[10px] font-bold tracking-widest uppercase text-gold">
                                    Economic Driver
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy & Pillars */}
            <section id="details" className="py-32 relative bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6">Built on Foundation of Trust</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Our vision isn't just a number. It's about creating a sustainable future where every individual has the opportunity to be their best self.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {visionPillars.map((pillar, idx) => (
                            <div key={idx} className="group relative p-1 bg-white/5 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors duration-500">
                                <div className={`absolute inset-0 bg-linear-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                                <div className="relative p-12 text-center flex flex-col items-center">
                                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-gold transition-all duration-500">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                    <p className="text-slate-400 leading-relaxed font-light">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Progress Stats Section */}
            <section ref={statsRef} className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className={`space-y-10 transition-all duration-1000 ${statsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <h2 className="text-4xl lg:text-5xl font-bold">The Roadmap <br /> To 30,000</h2>

                            <div className="space-y-8">
                                {[
                                    { label: "Talent Acquisition", value: 45, color: "bg-blue-500" },
                                    { label: "Infrastructure Readiness", value: 30, color: "bg-gold" },
                                    { label: "Global Partnership", value: 65, color: "bg-emerald-500" },
                                ].map((stat, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <div className="flex justify-between text-xs font-bold tracking-widest uppercase">
                                            <span>{stat.label}</span>
                                            <span className="text-slate-400">{stat.value}% Committed</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${stat.color} transition-all duration-1000 delay-500 ease-out`}
                                                style={{ width: statsInView ? `${stat.value}%` : '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex items-start gap-6">
                                    <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                                        <FaChartLine />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Steady Growth Curve</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            We are currently maintaining a 28% year-on-year growth rate in our talent pool, putting us exactly on track for our 2030 target.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative transition-all duration-1000 delay-300 ${statsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="relative h-[600px] rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl group">
                                <Image
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                                    alt="Strategic Planning"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                                <div className="absolute bottom-10 left-10 right-10 p-8 bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
                                    <p className="text-lg italic font-light leading-relaxed mb-6 italic">
                                        "We are building more than a business; we are building a legacy of opportunity for the next generation of Bangladesh."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-px flex-1 bg-white/10"></div>
                                        <span className="text-[10px] font-black tracking-widest uppercase text-gold">Founder & Group CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-32 bg-white text-slate-950">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl lg:text-6xl font-black mb-8">Be Part of the <span className="text-gold">Future.</span></h2>
                    <p className="text-slate-500 text-xl leading-relaxed mb-12">
                        Whether you are a talent looking for opportunity, a business seeking partnership, or a visionary wanting to make an impact, our ecosystem is open for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="/contact" className="px-12 py-5 bg-slate-950 text-white font-bold tracking-widest text-xs uppercase rounded-full hover:bg-gold transition-all duration-300 shadow-xl">
                            Partner With Us
                        </a>
                        <a href="/about" className="px-12 py-5 bg-slate-100 text-slate-950 font-bold tracking-widest text-xs uppercase rounded-full hover:bg-slate-200 transition-all duration-300">
                            Meet the Chairperson
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
