'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import newsData from '../../data/News.json';

export default function NewsDetail() {
  const params = useParams();
  const newsItem = newsData.newsItems.find(item => item.id === params.id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">News Not Found</h1>
          <p className="text-slate-500 mb-8">The news article you're looking for doesn't exist.</p>
          <Link href="/news" className="inline-flex items-center gap-2 text-gold font-bold hover:text-gold/80 transition-colors">
            <FaArrowLeft /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <Link href="/news" className="inline-flex items-center gap-2 text-slate-900 hover:text-gold transition-colors font-bold">
          <FaArrowLeft /> Back to News
        </Link>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-gold font-bold text-sm mb-4">
            <FaCalendarAlt />
            <span>{newsItem.date}</span>
          </div>
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold mb-6">
            {newsItem.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {newsItem.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {newsItem.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12 text-slate-600 leading-relaxed">
          <p>{newsItem.summary}</p>
        </div>

        {/* External Link */}
        {newsItem.externalLink && (
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Read the full article</h3>
            <a
              href={newsItem.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-bold hover:text-gold/80 transition-colors"
            >
              View Original Source
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        )}
      </div>

      {/* Related News */}
      <div className="bg-slate-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData.newsItems
              .filter(item => item.id !== newsItem.id)
              .slice(0, 2)
              .map((item) => (
                <Link key={item.id} href={`/news/${item.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-gold hover:shadow-lg transition-all duration-300">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 group-hover:text-gold transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-2">{item.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
