'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import newsData from '../data/News.json';
import { useState } from 'react';

export default function NewsArchive() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(newsData.newsItems.map(item => item.category))];

  // Filter news based on selected category
  const filteredNews = selectedCategory === 'All'
    ? newsData.newsItems
    : newsData.newsItems.filter(item => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            News & Insights
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Stay updated with the latest announcements, press releases, and thought leadership from Sabina Akter and the Betopia Group.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group block h-full"
              >
                <article className="h-full flex flex-col bg-white rounded-[2rem] border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Image Container with Zoom Effect */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 z-10"></div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
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

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
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
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No news found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
