"use client";
import Image from "next/image";
import { FaAward, FaChartLine, FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Image */}
        <div className={`relative group transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative h-[600px] w-full lg:w-[500px] rounded-[2rem] overflow-hidden border-[8px] border-slate-800 shadow-2xl">
            <Image
              src="https://i.postimg.cc/jjdWsHc9/about-Img.jpg"
              alt="Sabina Akter"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={`space-y-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="">
            <h4 className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Chairperson, Betopia Group
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Leadership Rooted in  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                People
              </span>
            </h2>
          </div>

          <p className="text-slate-400 leading-relaxed text-lg">
            Sabina Akter is recognized as one of Bangladesh’s most influential women leaders in technology.
            As Chairperson of <span className="text-white font-semibold">Betopia Group</span> and Co-Founder of <span className="text-white font-semibold">Bdcalling IT Ltd.</span>,
            she has dedicated her career to creating thousands of jobs and empowering the next generation of youth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
            {/* Milestone 1 */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-none border border-gold/30 text-gold hover:bg-gold hover:text-slate-900 transition-colors duration-300">
                <FaAward size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-1">
                  Milestone
                </span>
                <p className="text-white font-bold leading-tight">
                  BASIS National <br /> ICT Award
                </p>
              </div>
            </div>

            {/* Impact 2 */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-none border border-gold/30 text-gold hover:bg-gold hover:text-slate-900 transition-colors duration-300">
                <FaChartLine size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-1">
                  Impact
                </span>
                <p className="text-white font-bold leading-tight">
                  5000+ <br /> Jobs Created
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a href="#journey" className="inline-flex items-center gap-2 text-gold font-bold tracking-widest text-xs uppercase hover:gap-4 transition-all duration-300 group">
              Discover More About Sabina
              <FaArrowRight className="group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
