export default function NewsDetailPage({ params }) {
  // In a real app, fetch data based on params.id
  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">
            Press Release
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Leadership in Tech: An Exclusive Interview with Sabina Akter
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 text-sm font-semibold">
            <span>May 15, 2024</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>5 Min Read</span>
          </div>
        </header>

        <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden mb-16 bg-slate-100">
          <img
            src="https://i.postimg.cc/k4kMkwfK/360-F-615993633-8-Xw8-Hw-W1w-T4-Pj-Sg-Fk-Yd-Zt-B1-Z0-Tf-E1-P0-Q.jpg"
            alt="Sabina Akter Interview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed font-light">
          <p className="lead text-2xl font-serif italic text-slate-800 mb-8">
            "The future of technology relies not just on innovation, but on
            inclusivity. When we empower women to lead in tech, we unlock a
            massive reservoir of untapped potential."
          </p>
          <p className="mb-6">
            In a recent keynote address at the National ICT Summit, Sabina
            Akter, Chairperson of Betopia Group, highlighted the critical need
            for gender diversity in the technology sector. With Betopia Group
            spearheading initiatives like 'She Power', thousands of women across
            rural Bangladesh are gaining access to digital literacy and
            employment opportunities.
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            A Vision for 2030
          </h3>
          <p className="mb-6">
            The interview delved into the group's ambitious Roadmap 2030, which
            aims to empower 30,000 talents over the next decade. "It's about
            creating a sustainable ecosystem," Akter explained. "We are not just
            training people; we are building careers and fostering
            entrepreneurship."
          </p>
          <p>
            Stay tuned for more updates on Betopia Group's ongoing projects in
            AI, Renewable Energy, and Smart City development.
          </p>
        </div>
      </article>
    </main>
  );
}
