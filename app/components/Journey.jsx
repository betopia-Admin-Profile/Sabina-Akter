"use client";
import React from 'react';
import { FaFlag, FaAward, FaBuilding, FaBriefcase, FaRocket } from "react-icons/fa";

const timelineEvents = [
  {
    year: "2014",
    title: "The Inception",
    description: "Started the journey with a vision to create opportunities and contribute to the digital landscape of Bangladesh.",
    icon: FaFlag,
  },
  {
    year: "2017",
    title: "Co-Founding Bdcalling IT",
    description: "Co-founded Bdcalling IT Ltd, laying the foundation for what would become one of the nation's largest IT firms.",
    icon: FaBriefcase,
  },
  {
    year: "2020",
    title: "National Recognition",
    description: "Received the prestigious BASIS National ICT Award for outstanding contribution to the IT industry.",
    icon: FaAward,
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to 22+ countries, establishing a robust global footprint for Betopia Group.",
    icon: FaRocket,
  },
  {
    year: "2025",
    title: "Chairperson, Betopia Group",
    description: "Assumed the role of Chairperson, leading a diversified conglomerate of 3,500+ employees towards 2030 vision.",
    icon: FaBuilding,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="text-center mb-24 space-y-4">
          <h4 className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Milestones
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Entrepreneurial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              Journey
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-500 leading-relaxed">
            A decade of innovation, leadership, and unwavering commitment to transforming the digital ecosystem of Bangladesh.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-100 via-gold/30 to-slate-100 hidden md:block rounded-full"></div>

          <div className="space-y-20 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-12 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className={`
                      bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm 
                      hover:shadow-2xl hover:border-gold/20 hover:-translate-y-1
                      transition-all duration-300 relative
                      ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                   `}>
                    {/* Connector Dot */}
                    <div className={`hidden md:block absolute top-[50%] w-4 h-4 rounded-full border-4 border-white bg-gold/50 
                        ${index % 2 === 0 ? '-left-[58px]' : '-right-[58px]'}
                        top-1/2 -translate-y-1/2
                     `}></div>

                    <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest shadow-md">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative flex items-center justify-center w-20 h-20 shrink-0 bg-white rounded-full border border-slate-100 z-10 text-slate-300 group-hover:text-gold group-hover:scale-110 group-hover:border-gold/30 transition-all duration-500 shadow-xl">
                  <div className="absolute inset-2 bg-slate-50 rounded-full"></div>
                  <event.icon className="w-8 h-8 relative z-10" />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
