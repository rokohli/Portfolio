"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    const prefers = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-zinc-900/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#leadership" className="hover:text-white">Leadership</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#blog" className="hover:text-white">Blog</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/assets/Rohan_Kohli_Resume.pdf" className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1.5 text-sm hover:bg-zinc-800">Download Résumé</a>
          <button onClick={toggle} aria-label="Toggle dark/light" className="rounded-xl border border-zinc-700 px-2 py-1 text-sm hover:bg-zinc-800">🌗</button>
        </div>
      </div>
    </header>
  );
}
