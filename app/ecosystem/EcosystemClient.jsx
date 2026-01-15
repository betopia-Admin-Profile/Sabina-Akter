"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGlobe, FaArrowRight, FaRocket, FaShieldAlt, FaLightbulb, FaTools, FaUsers } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ventures = [
    {
        name: "Bdcalling IT Ltd",
        role: "Chairperson & Co-Founder",
        desc: "Shaping Bangladesh’s digital future with ERP systems, AWS services, B2B/B2G platforms, and training programs fueling innovation.",
        category: "IT & Software",
        url: "https://bdcalling.com",
        domain: "bdcalling.com",
        imageUrl: ""
    },
    {
        name: "Softvence LLC",
        role: "Subsidiary",
        desc: "Turning ideas into sleek digital experiences from branding to web & mobile development helping businesses make their mark online.",
        category: "Creative Agency",
        url: "https://softvence.agency",
        domain: "softvence.agency",
        imageUrl: "https://i.postimg.cc/kMKqVVBk/10002.png"
    },
    {
        name: "Sparktech Agency",
        role: "Subsidiary",
        desc: "Blending creativity and tech smarts to build everything from games to AI tools. Helping clients grow.",
        category: "Game & AI",
        url: "https://sparktech.agency",
        domain: "sparktech.agency",
        imageUrl: "https://i.postimg.cc/zDK8LLy8/logo4.png"
    },
    {
        name: "SM Technology",
        role: "Subsidiary",
        desc: "Delivering digital solutions that truly work from UI/UX to AI-powered apps supporting businesses worldwide.",
        category: "Technology",
        url: "https://smtech24.com",
        domain: "smtech24.com",
        imageUrl: "https://i.postimg.cc/KcBxKK12/logo5.png"
    },
    {
        name: "Backbencher Studio",
        role: "Subsidiary",
        desc: "Crafting visual stories through branding, motion design, and digital strategies that connect with people and drive results.",
        category: "Design Studio",
        url: "https://backbencher.studio",
        domain: "backbencher.studio",
        imageUrl: "https://i.postimg.cc/tRWp11sb/logo6.webp"
    },
    {
        name: "JVAI",
        role: "Subsidiary",
        desc: "Bringing smart tech to life with AI-driven apps, chatbots, and custom platforms, solving real-world problems.",
        category: "AI Solutions",
        url: "https://joinventureai.com",
        domain: "joinventureai.com",
        imageUrl: "https://i.postimg.cc/tJ3j8cK2/javi.jpg"
    },
    {
        name: "ScaleUp",
        role: "Subsidiary",
        desc: "Helping brands get seen with clean web design, sharp SEO, and ad campaigns across Meta, Google, and beyond.",
        category: "Marketing",
        url: "https://scaleupadsagency.com",
        domain: "scaleupadsagency.com",
        imageUrl: "https://i.postimg.cc/DfLnWW89/logo11.png"
    },
    {
        name: "ZenexCloud",
        role: "Subsidiary",
        desc: "Powering businesses with secure hosting, cloud infrastructure, email, and domain services. Reliable digital backbone.",
        category: "Cloud Services",
        url: "https://zenexcloud.com",
        domain: "zenexcloud.com",
        imageUrl: "https://i.postimg.cc/PJWj07gW/logo13.png"
    },
    {
        name: "Bdcalling Academy",
        role: "Education Initiative",
        desc: "More than just courses—it’s a launchpad. Offering hands-on projects, scholarships, and job placement to shape future developers.",
        category: "Education",
        url: "https://bdcalling.com",
        domain: "bdcalling.com",
        imageUrl: "https://i.postimg.cc/Fzy4w6M0/bda_Logo.jpg"
    },
    {
        name: "Opsori Holdings Ltd",
        role: "Real Estate",
        desc: "Developing premium commercial spaces, retail hubs, and mixed-use projects built for growth and innovation.",
        category: "Real Estate",
        url: "https://opsori.com",
        domain: "opsori.com",
        imageUrl: ""
    },
    {
        name: "Betopia PulseGrid Ltd",
        role: "Energy",
        desc: "Delivering smart energy solutions, power generation, grid systems, and spare parts. Mission: Smart Power. Stronger Nation.",
        category: "Energy",
        url: "https://betopiapulsegrid.com",
        domain: "betopiapulsegrid.com",
        imageUrl: "https://i.postimg.cc/fycN1PG7/pg_Logo.png"
    },
    {
        name: "Bdcalling Enterprise",
        role: "Strategic Unit",
        desc: "Specializing in government tenders, OEM supply, and turnkey solutions serving Bangladesh’s infrastructure sectors.",
        category: "Government",
        url: "https://bdcallingenterprise.com",
        domain: "bdcallingenterprise.com",
        imageUrl: "https://i.postimg.cc/cCRSPzpm/bde_Logo.png"
    },
];

export default function EcosystemClient() {
    const [activeTab, setActiveTab] = useState("All");
    const categories = ["All", ...new Set(ventures.map(v => v.category))];

    const filteredVentures = activeTab === "All"
        ? ventures
        : ventures.filter(v => v.category === activeTab);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Dynamic HeaderSection */}
            <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h4 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-6">Diversified Growth</h4>
                    <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 leading-tight">
                        The Betopia <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-slate-400 to-slate-600">Ecosystem</span>
                    </h1>
                    <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                        A synergistic network of ventures spanning across diverse industries, all unified by a single vision:
                        Building a future-ready Bangladesh.
                    </p>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-20 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: <FaLightbulb />, title: "Innovation", desc: "Pushing boundaries in AI & Tech" },
                        { icon: <FaRocket />, title: "Scaling", desc: "Expanding global footprints" },
                        { icon: <FaUsers />, title: "Talent", desc: "Empowering 30,000+ youth" },
                        { icon: <FaShieldAlt />, title: "Impact", desc: "Sustainable national growth" },
                    ].map((pillar, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow border border-slate-100 text-center group hover:bg-slate-900 transition-colors duration-500">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mx-auto mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">{pillar.title}</h3>
                            <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors uppercase tracking-widest">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ventures Explore Section */}
            <section className="py-12 pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore Our Ventures</h2>
                            <p className="text-slate-500">Filter by industry to see how we are making an impact.</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all duration-300 border-2 ${activeTab === cat
                                        ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                                        : "bg-white border-slate-100 text-slate-400 hover:border-gold/30 hover:text-gold"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredVentures.map((venture, idx) => (
                            <VentureCard key={idx} venture={venture} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaborative Vision */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gold/5 blur-3xl rounded-full"></div>
                <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
                    <h4 className="text-gold text-xs font-bold tracking-widest uppercase">Strategic Synergy</h4>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Unified Leadership. <br /> Diversified Impact.</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every venture in our ecosystem operates with high autonomy yet stays perfectly aligned with the core mission of Betopia Group.
                        We share resources, knowledge, and a commitment to excellence.
                    </p>
                    <div className="pt-8">
                        <a href="/contact" className="px-12 py-5 bg-white text-slate-900 font-bold tracking-widest text-xs uppercase rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl">
                            Discuss Strategic Partnership
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function VentureCard({ venture }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <a
            href={venture.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            className={`group bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-gold/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
            <div className="flex justify-between items-start mb-8">
                <div className="w-24 h-24 rounded-3xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center overflow-hidden group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <Image
                        src={venture.imageUrl || `https://logo.clearbit.com/${venture.domain}?size=200`}
                        alt={venture.name}
                        width={120}
                        height={120}
                        className="object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(venture.name)}&background=0F172A&color=fff&size=200&font-size=0.4`;
                        }}
                    />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-[10px] font-bold text-slate-400 tracking-widest uppercase border border-slate-100">
                    {venture.category}
                </div>
            </div>

            <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">
                    {venture.name}
                </h3>
                <p className="text-[11px] font-black text-slate-300 mb-6 uppercase tracking-[0.2em]">
                    {venture.role}
                </p>

                <p className="text-slate-500 text-md leading-relaxed">
                    {venture.desc}
                </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between text-xs font-black text-slate-300 group-hover:text-gold transition-colors">
                <span className="tracking-[0.2em]">EXPLORE VENTURE</span>
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
        </a>
    );
}
