"use client";
import Image from "next/image";
import { FaAward, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Image */}
        <div className="relative group">
          <div className="relative h-[600px] w-full lg:w-[500px] rounded-[2rem] overflow-hidden border-[8px] border-slate-800 shadow-2xl">
            {/* Using the image used in hero as placeholder since the uploaded one was a design mockup. 
                  In a real scenario, we might want to crop the person from the mockup or use a different photo. 
                  For now, I will reuse the chairman image or the hero one if available, 
                  but strictly the user provided a design mockup image, so I will try to use the image itself 
                  if it was intended as a photo. Given it's a "screenshot" of a design, 
                  I better stick to the previous 'chairman_betopia' or 'hero' image for the person 
                  to ensure high quality, or use the one I just copied if it IS the photo. 
                  The user just uploaded 'uploaded_image...' which seems to be the layout. 
                  I will use the `chairman_betopia` webp again as it's the high-quality portrait.
              */}
            <Image
              src="https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp"
              alt="Sabina Akter"
              fill
              className="object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          </div>
          {/* Decorative Box */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-slate-800 rounded-full z-[-1] animate-pulse"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold/10 rounded-full z-[-1]"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
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
              <div className="p-3 rounded-full bg-none border border-gold/30 text-gold">
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
              <div className="p-3 rounded-full bg-none border border-gold/30 text-gold">
                <FaChartLine size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-1">
                  Impact
                </span>
                <p className="text-white font-bold leading-tight">
                  3,500+ Local <br /> Jobs Created
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
