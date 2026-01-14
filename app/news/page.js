import Media from "../components/Media";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function NewsPage() {
  return (
    <main className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900">
            News &{" "}
            <span className="text-slate-400 font-serif italic">Insights</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Stay updated with the latest announcements, press releases, and
            thought leadership from Sabina Akter and the Betopia Group.
          </p>
        </div>

        {/* Reusing the grid structure from the component but expanded */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We can use the same data or fetch from an API here. For now, statically demonstrating structure. */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-[2rem] p-8 animate-pulse h-96"
            >
              <div className="h-48 bg-slate-100 rounded-xl mb-4"></div>
              <div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">More news loading soon...</p>
        </div>
      </div>
    </main>
  );
}
