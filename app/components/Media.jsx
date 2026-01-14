"use client";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const newsItems = [
  {
    id: "leadership-women-tech",
    title: "Leadership in Tech: An Exclusive Interview with Sabina Akter",
    summary: "Sabina Akter discusses the pivotal role of women in shaping Bangladesh's digital economy and her journey to becoming a tech leader.",
    date: "May 15, 2024",
    category: "Interview",
    image: "https://i.postimg.cc/k4kMkwfK/360-F-615993633-8-Xw8-Hw-W1w-T4-Pj-Sg-Fk-Yd-Zt-B1-Z0-Tf-E1-P0-Q.jpg", // Placeholder or generic tech meeting image
  },
  {
    id: "national-ict-award-2023",
    title: "Betopia Group Wins National ICT Award 2023",
    summary: "Recognized for outstanding contribution to the IT industry, Betopia Group takes home the prestigious award for youth employment impact.",
    date: "December 10, 2023",
    category: "Award",
    image: "https://i.postimg.cc/FR4x008j/award-ceremony.jpg", // Placeholder
  },
  {
    id: "women-empowerment-initiative",
    title: "Breaking Barriers: 5,000+ Women Trained",
    summary: "How the 'She Power' initiative by Betopia Group is creating equal opportunities for women in rural Bangladesh.",
    date: "March 8, 2024",
    category: "Social Impact",
    image: "https://i.postimg.cc/q7dJ6dFz/women-tech.jpg", // Placeholder
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="px-4 py-2 rounded-full border border-slate-100 bg-slate-50 text-gold text-xs font-bold tracking-[0.2em] uppercase">
              Latest Updates
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              News & <span className="text-slate-400 font-serif italic">Insights</span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              Stay updated with the latest announcements, press releases, and thought leadership from Sabina Akter and the Betopia Group.
            </p>
          </div>
          <Link href="/news" className="group flex items-center gap-3 text-xs font-bold tracking-widest text-slate-900 hover:text-gold transition-colors border-b border-slate-200 pb-1 hover:border-gold">
            VIEW ARCHIVE
            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block h-full"
            >
              <article className="h-full flex flex-col bg-white rounded-[2rem] border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold tracking-wider text-white uppercase shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-widest mb-4">
                    <FaCalendarAlt />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {item.summary}
                  </p>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-gold transition-colors">
                    <span className="tracking-widest">READ STORY</span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                      <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
