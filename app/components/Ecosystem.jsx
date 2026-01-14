"use client";
import Image from "next/image";
import { useState } from "react";
import { FaGlobe, FaArrowRight } from "react-icons/fa";

const ventures = [
  {
    name: "Bdcalling IT Ltd",
    role: "Chairperson & Co-Founder",
    desc: "Shaping Bangladesh’s digital future with ERP systems, AWS services, B2B/B2G platforms, and training programs fueling innovation.",
    category: "IT & Software",
    url: "https://bdcalling.com",
    domain: "bdcalling.com"
  },
  {
    name: "Softvence LLC",
    role: "Subsidiary",
    desc: "Turning ideas into sleek digital experiences from branding to web & mobile development helping businesses make their mark online.",
    category: "Creative Agency",
    url: "https://softvence.agency",
    domain: "softvence.agency"
  },
  {
    name: "Sparktech Agency",
    role: "Subsidiary",
    desc: "Blending creativity and tech smarts to build everything from games to AI tools. Helping clients grow.",
    category: "Game & AI",
    url: "https://sparktech.agency",
    domain: "sparktech.agency"
  },
  {
    name: "SM Technology",
    role: "Subsidiary",
    desc: "Delivering digital solutions that truly work from UI/UX to AI-powered apps supporting businesses worldwide.",
    category: "Technology",
    url: "https://smtech24.com",
    domain: "smtech24.com"
  },
  {
    name: "Backbencher Studio",
    role: "Subsidiary",
    desc: "Crafting visual stories through branding, motion design, and digital strategies that connect with people and drive results.",
    category: "Design Studio",
    url: "https://backbencher.studio",
    domain: "backbencher.studio"
  },
  {
    name: "JVAI",
    role: "Subsidiary",
    desc: "Bringing smart tech to life with AI-driven apps, chatbots, and custom platforms, solving real-world problems.",
    category: "AI Solutions",
    url: "https://joinventureai.com",
    domain: "joinventureai.com"
  },
  {
    name: "ScaleUp Ads Agency",
    role: "Subsidiary",
    desc: "Helping brands get seen with clean web design, sharp SEO, and ad campaigns across Meta, Google, and beyond.",
    category: "Marketing",
    url: "https://scaleupadsagency.com",
    domain: "scaleupadsagency.com"
  },
  {
    name: "ZenexCloud",
    role: "Subsidiary",
    desc: "Powering businesses with secure hosting, cloud infrastructure, email, and domain services. Reliable digital backbone.",
    category: "Cloud Services",
    url: "https://zenexcloud.com",
    domain: "zenexcloud.com"
  },
  {
    name: "Bdcalling Academy",
    role: "Education Initiative",
    desc: "More than just courses—it’s a launchpad. Offering hands-on projects, scholarships, and job placement to shape future developers.",
    category: "Education",
    url: "https://bdcalling.com",
    domain: "bdcalling.com"
  },
  {
    name: "Opsori Holdings Ltd",
    role: "Real Estate",
    desc: "Developing premium commercial spaces, retail hubs, and mixed-use projects built for growth and innovation.",
    category: "Real Estate",
    url: "https://opsori.com",
    domain: "opsori.com"
  },
  {
    name: "Betopia PulseGrid Ltd",
    role: "Energy",
    desc: "Delivering smart energy solutions, power generation, grid systems, and spare parts. Mission: Smart Power. Stronger Nation.",
    category: "Energy",
    url: "https://betopiapulsegrid.com",
    domain: "betopiapulsegrid.com"
  },
  {
    name: "Bdcalling Enterprise",
    role: "Strategic Unit",
    desc: "Specializing in government tenders, OEM supply, and turnkey solutions serving Bangladesh’s infrastructure sectors.",
    category: "Government",
    url: "https://bdcallingenterprise.com",
    domain: "bdcallingenterprise.com"
  },
  {
    name: "Claystone",
    role: "Architecture",
    desc: "Providing high-quality architecture and design solutions from interiors and exteriors to detailed drawings.",
    category: "Architecture",
    url: "https://betopialimited.com",
    domain: "betopialimited.com"
  },
  {
    name: "Betopia Cloud",
    role: "Cloud Infrastructure",
    desc: "Enterprise-grade cloud and infrastructure services AWS, Azure, Google Cloud, and advanced IT solutions.",
    category: "Enterprise IT",
    url: "https://betopialimited.com",
    domain: "betopialimited.com"
  },
  {
    name: "Pixelora Studio",
    role: "Creative",
    desc: "AI-powered creative solutions from branding and UX/UI design to logos and global digital presence development.",
    category: "Design",
    url: "https://pixelora.studio",
    domain: "pixelora.studio"
  },
  {
    name: "FireAI",
    role: "AI Innovation",
    desc: "Pioneering next-generation AI intelligent agents, autonomous workflow automation, and custom AI integrations.",
    category: "AI R&D",
    url: "https://fireai.agency",
    domain: "fireai.agency"
  },
];

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(ventures.map(v => v.category))];

  const filteredVentures = activeTab === "All"
    ? ventures
    : ventures.filter(v => v.category === activeTab);

  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Our Ecosystem
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Building a Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              Limitless Possibilities
            </span>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Under Sabina Akter's leadership, Betopia Group has grown into a diversified conglomerate spanning IT, AI, Fintech, Real Estate, and more.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.slice(0, 8).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === cat
                ? "bg-slate-900 text-white shadow-lg"
                : "bg-white text-slate-500 hover:bg-slate-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVentures.map((venture, idx) => (
            <a
              key={idx}
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-gold/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                {/* Logo Placeholder / Image */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={`https://logo.clearbit.com/${venture.domain}?size=100`}
                    alt={venture.name}
                    width={64}
                    height={64}
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(venture.name)}&background=0F172A&color=fff&size=128&font-size=0.4`;
                    }}
                  />
                </div>

                <div className="px-3 py-1 bg-slate-50 rounded-full border border-slate-100 text-[10px] font-bold tracking-wider text-slate-500 uppercase h-fit">
                  {venture.category}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-gold transition-colors">
                  {venture.name}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-widest">
                  {venture.role}
                </p>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                  {venture.desc}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-gold transition-colors">
                <span>VISIT WEBSITE</span>
                <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
