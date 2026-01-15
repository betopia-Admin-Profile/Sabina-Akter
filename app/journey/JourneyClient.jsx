"use client";
import React from 'react';
import Image from 'next/image';
import { FaFlag, FaAward, FaBuilding, FaBriefcase, FaRocket, FaGlobe, FaUsers, FaArrowRight, FaCalendarAlt, FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
    {
        year: "2014",
        title: "The Inception",
        tagline: "A Seed of Vision",
        description: "The journey began in a small room with a massive vision. Sabina Akter identified the untapped potential in Bangladesh's digital landscape, focusing on skill development and core IT services.",
        icon: FaFlag,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        details: ["Initial core team formation", "Market research & strategy", "First service deployment"],
        color: "from-blue-500/20 to-transparent"
    },
    {
        year: "2017",
        title: "Bdcalling IT Ltd",
        tagline: "Scaling New Heights",
        description: "Co-founding Bdcalling IT marked a pivotal shift from local services to global scale. We established rigorous quality standards that would soon make us a household name in IT exports.",
        icon: FaBriefcase,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
        details: ["International client acquisition", "100+ Team members", "State-of-the-art workspace"],
        color: "from-gold/10 to-transparent"
    },
    {
        year: "2020",
        title: "National ICT Award",
        tagline: "Excellence Recognized",
        description: "Winning the BASIS National ICT Award solidified our position as industry leaders. It was a moment of national pride and a validation of our commitment to technological innovation.",
        icon: FaAward,
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop",
        details: ["National industry recognition", "Innovator of the year nominee", "Advocacy for Tech education"],
        color: "from-emerald-500/10 to-transparent"
    },
    {
        year: "2023",
        title: "The Global Footprint",
        tagline: "Beyond Borders",
        description: "Expanding to 22+ countries, Betopia Group became a truly global entity. We diversified into Fintech, Real Estate, and AI, proving that Bangladeshi leadership has no limits.",
        icon: FaGlobe,
        image: "https://images.unsplash.com/photo-1529400971008-f56fa2379d38?q=80&w=2070&auto=format&fit=crop",
        details: ["Operations in 22+ Countries", "Diverse Business SBU formation", "Global partnership networks"],
        color: "from-purple-500/10 to-transparent"
    },
    {
        year: "2025",
        title: "Chairperson's Era",
        tagline: "Leading the Conglomerate",
        description: "Assuming the role of Chairperson, Sabina Akter now leads 5,000+ employees. The focus is now on 'Vision 2030'—a blueprint for national impact and global tech dominance.",
        icon: FaBuilding,
        image: "https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp",
        details: ["Directing 20+ Business Units", "5,000+ Job creation impact", "Vision 2030 Strategic Lead"],
        color: "from-slate-900/40 to-transparent"
    },
];

export default function JourneyClient() {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

    return (
        <div className="bg-[#fcfcfd] min-h-screen selection:bg-gold/30">
            {/* Editorial Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 bg-slate-950 overflow-hidden"
            >
                {/* Background Large Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <h1 className="text-[25vw] font-black text-white leading-none tracking-tighter">ERA</h1>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className={`transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${heroInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="flex items-center gap-4 mb-8 overflow-hidden">
                            <span className="h-px w-12 bg-gold/50"></span>
                            <span className="text-gold text-xs font-bold tracking-[0.5em] uppercase">Chronicles of a Visionary</span>
                        </div>

                        <h1 className="text-6xl lg:text-9xl font-bold text-white mb-10 leading-none tracking-wide">
                            A Decade of <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-slate-400 to-slate-600">
                                Impact.
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl">
                            Traversing the path from a humble beginning to a global conglomerate. This is the timeline of resilience, innovation, and unwavering leadership.
                        </p>
                    </div>
                </div>

            </section>

            {/* Main Digital Timeline */}
            <section className="py-32 relative">
                {/* Central Glistening Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 hidden lg:block overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-gold to-transparent opacity-20 animate-pulse-slow"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-48 md:space-y-56">
                        {timelineEvents.map((event, idx) => (
                            <TimelineItem key={idx} event={event} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Milestone CTA */}
            <section className="py-48 bg-white border-t border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
                    <FaRocket size={400} />
                </div>

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-slate-50 shadow-xl mb-12 border border-slate-100 group hover:bg-gold transition-all duration-500">
                        <FaStar className="text-slate-900 text-3xl group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight">The Future is <span className="italic font-serif text-slate-500">Limitless.</span></h2>
                    <p className="text-slate-500 text-xl lg:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                        Our journey is the foundation for Vision 2030. We are scaling new heights to empower 30,000 talents and build a legacy that transcends generations.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="/vision" className="px-12 py-5 bg-slate-900 text-white font-bold tracking-widest text-xs uppercase rounded-full hover:bg-gold transition-all duration-300 shadow-3xl hover:shadow-gold/30 flex items-center justify-center gap-3 group">
                            Explore Vision 2030
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                        <a href="/ecosystem" className="px-12 py-5 border border-slate-200 text-slate-900 font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white hover:border-gold transition-all duration-300 flex items-center justify-center gap-3">
                            View Ecosystem
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TimelineItem({ event, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
            {/* Year Background Display (Desktop Only) */}
            <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 text-right' : 'left-0 text-left'} pointer-events-none select-none z-0`}>
                <span className="text-[18rem] font-bold text-slate-100/50 tracking-wide leading-none opacity-40">
                    {event.year}
                </span>
            </div>

            {/* Content Segment */}
            <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative z-10`}>
                <div className="space-y-8">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center text-slate-900 border border-slate-50 group-hover:bg-gold transition-all">
                            <event.icon size={24} />
                        </div>
                        <div>
                            <span className="text-gold text-[16px] font-bold tracking-widest uppercase block mb-1">{event.year} Milestone</span>
                            <h4 className="text-xl font-bold text-slate-500 font-serif italic">{event.tagline}</h4>
                        </div>
                    </div>

                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                        {event.title}
                    </h3>

                    <p className="text-slate-500 text-lg lg:text-xl leading-relaxed font-light">
                        {event.description}
                    </p>

                    <div className="pt-4 space-y-4">
                        {event.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-gold/50"></div>
                                <span className="text-md font-bold text-slate-900 tracking-wide">{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mid Node - Desktop Only */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                <div className="w-12 h-12 bg-white rounded-full border border-slate-100 shadow-2xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-gold rounded-full animate-ping opacity-75"></div>
                    <div className="absolute w-3 h-3 bg-gold rounded-full"></div>
                </div>
            </div>

            {/* Visual Segment */}
            <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative z-10`}>
                <div className="relative group">
                    {/* Floating Decorative Panel */}
                    <div className={`absolute -inset-6 bg-linear-to-br ${event.color} rounded-[4rem] group-hover:rotate-2 transition-transform duration-1000`}></div>

                    <div className="relative h-[450px] lg:h-[550px] w-full rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-3xl group">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>

                        {/* Summary Badge */}
                        <div className="absolute bottom-10 left-10 p-8 pt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] max-w-[280px] text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
                            <div className="text-[10px] font-black tracking-[0.3em] uppercase mb-4 opacity-60">Impact Snapshot</div>
                            <p className="text-sm font-medium leading-relaxed italic line-clamp-2">
                                {event.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
