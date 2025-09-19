import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Home / About */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Rohan Kohli</h1>
            <p className="mt-3 text-lg text-zinc-300">Computer Engineering student @ UIUC</p>
            <p className="mt-4 text-zinc-400 max-w-prose">
              I build reliable software and hardware systems—ranging from Java backends and C++ data structures to SystemVerilog digital logic and EV electrical subsystems.
              Open to internships and hands-on engineering roles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-2xl bg-white/10 hover:bg-white/15 px-5 py-2.5 text-sm">Let’s Work Together</a>
              <a href="https://linkedin.com/in/rohan-kohli-7b627a327" target="_blank" rel="noopener" className="inline-flex items-center rounded-2xl border border-zinc-700 px-5 py-2.5 text-sm hover:bg-zinc-800">LinkedIn</a>
            </div>
            <ul className="mt-6 text-sm text-zinc-400">
              <li>Champaign, IL</li>
              <li><a className="underline hover:text-white" href="tel:+16504849316">(650) 484-9316</a></li>
              <li><a className="underline hover:text-white" href="mailto:kohli10@illinois.edu">kohli10@illinois.edu</a></li>
            </ul>
          </div>
          <div className="flex md:justify-end">
            <div className="size-72 sm:size-80 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 shadow-xl flex items-center justify-center overflow-hidden">
              <span className="text-zinc-500">Headshot Placeholder (320×320)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Experience</h2>
        <div className="mt-6 grid gap-6">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">Software Engineering Intern — Striim Inc.</h3>
              <p className="text-sm text-zinc-400">Palo Alto, CA · Jul 2023 – Aug 2023</p>
            </header>
            <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
              <li>Developed and tested Java-based solutions for code migration, improving system efficiency by ~20%.</li>
              <li>Collaborated with senior engineers to refine and debug system processes, contributing to stability.</li>
              <li>Hands-on with PostgreSQL & MySQL: established databases and optimized performance.</li>
            </ul>
            <div className="mt-3 text-xs text-zinc-400">Tech: Java · PostgreSQL · MySQL · Debugging · Performance</div>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">Founder & Hardware Specialist — Custom PC Building Business</h3>
              <p className="text-sm text-zinc-400">Burlingame, CA · Jun 2020 – Jan 2024</p>
            </header>
            <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
              <li>Built high-performance PCs for gaming/creative/pro use, generating $1,000+ revenue.</li>
              <li>Delivered overclocking services, boosting speeds by 20–30% with safe thermals.</li>
              <li>Guided component selection by balancing performance, compatibility, and cost.</li>
            </ul>
            <div className="mt-3 text-xs text-zinc-400">Tech: PC hardware · Thermal management · Client consulting</div>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">Camp Counselor — ThinkBridge Summer Camp</h3>
              <p className="text-sm text-zinc-400">Pacifica, CA · Jun 2022 – Jul 2022</p>
            </header>
            <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
              <li>Mentored underprivileged students through STEM projects involving coding and critical thinking.</li>
              <li>Collaborated with staff to build an inclusive, engaging environment.</li>
            </ul>
            <div className="mt-3 text-xs text-zinc-400">Focus: Mentorship · STEM · Collaboration</div>
          </article>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <div className="mt-6 grid gap-6">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">University of Illinois, Urbana-Champaign — B.S. Computer Engineering</h3>
              <p className="text-sm text-zinc-400">Aug 2024 – Dec 2027</p>
            </header>
            <p className="mt-2 text-sm text-zinc-300">Relevant Coursework: Computer Systems & Programming, Introduction to Computing, Introduction to Electronics.</p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-white">RecipeGram</h3>
            <p className="mt-2 text-sm text-zinc-300">Full-stack web app for sharing recipes with responsive frontend and backend; implemented database schemas and queries to support user interactions and data integrity; collaborated with frontend team to define APIs and optimize UX.</p>
            <div className="mt-3 text-xs text-zinc-400">Skills: Full-stack · DB design · API collaboration</div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1.5 hover:bg-zinc-800" href="#" aria-disabled="true">Demo (placeholder)</a>
              <a className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1.5 hover:bg-zinc-800" href="#" aria-disabled="true">Source (placeholder)</a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-white">Anagram Dictionary System</h3>
            <p className="mt-2 text-sm text-zinc-300">C++ templated binary search tree that groups words by sorted-character signature; includes insertion, deletion, lookup, traversal; file I/O pipelines to read dictionary files and write ordered anagram groups.</p>
            <div className="mt-3 text-xs text-zinc-400">Skills: C++ · Data structures · File I/O</div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1.5 hover:bg-zinc-800" href="#" aria-disabled="true">Demo (placeholder)</a>
              <a className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1.5 hover:bg-zinc-800" href="#" aria-disabled="true">Source (placeholder)</a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col">
            <h3 className="text-lg font-semibold text-white">Vending Machine Controller</h3>
            <p className="mt-2 text-sm text-zinc-300">SystemVerilog combinational logic to generate and dispense outputs based on coin input states; reduced area using NAND, NOR, and NOT gates for breadboard deployment.</p>
            <div className="mt-3 text-xs text-zinc-400">Skills: SystemVerilog · Digital logic</div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Languages & Databases</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Java","Python","C/C++","Verilog","JavaScript","HTML/CSS","Assembly","Swift","PostgreSQL","MySQL"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/10">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Frameworks, Libraries & Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {["React.js","Node.js","SwiftUI","NumPy","Pandas","Git","Figma","Replit","AWS"].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/10">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Leadership & Involvement</h2>
        <div className="mt-6 grid gap-6">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">EV Concept — Electrical Team</h3>
              <p className="text-sm text-zinc-400">Champaign, IL · Aug 2024 – Present</p>
            </header>
            <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
              <li>Designed electrical subsystems (battery management, power distribution).</li>
              <li>Assisted embedded team interfacing rearview camera systems with displays.</li>
              <li>Set up sensor infrastructure supporting autonomy and real-time awareness.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-zinc-300">Email me or connect via LinkedIn. I’m open to software and hardware engineering roles and internships.</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a className="underline hover:text-white" href="mailto:kohli10@illinois.edu">kohli10@illinois.edu</a>
              <a className="underline hover:text-white" href="https://linkedin.com/in/rohan-kohli-7b627a327" target="_blank" rel="noopener">linkedin.com/in/rohan-kohli-7b627a327</a>
              <a className="underline hover:text-white" href="#" aria-disabled="true">github.com/your-handle (placeholder)</a>
              <a className="underline hover:text-white" href="#" aria-disabled="true">your-portfolio.example (placeholder)</a>
              <span>Champaign, IL · <a className="underline hover:text-white" href="tel:+16504849316">(650) 484-9316</a></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:kohli10@illinois.edu" className="inline-flex items-center rounded-2xl bg-white/10 hover:bg-white/15 px-5 py-2.5 text-sm">Let’s Work Together</a>
              <a href="/assets/Rohan_Kohli_Resume.pdf" className="inline-flex items-center rounded-2xl border border-zinc-700 px-5 py-2.5 text-sm hover:bg-zinc-800">Download Résumé (PDF)</a>
            </div>
          </div>
          <div id="blog" className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Optional Blog</h3>
            <p className="mt-2 text-sm text-zinc-300">Coming soon — writings on projects, systems, and engineering notes.</p>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-500 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rohan Kohli</p>
          <p>Built with Next.js & Tailwind. Dark/light toggle, sticky nav, and SEO metas included.</p>
        </div>
      </footer>
    </>
  );
}