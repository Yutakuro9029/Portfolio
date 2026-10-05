"use client";

import { useEffect, useState } from "react";
import { profile, sections } from "@/data/profile";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const isAtBottom =
        scrollPosition >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActive("contact");
        return;
      }

      const triggerPoint = window.innerHeight * 0.35;
      let currentSection = sections[0].id;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentSection = s.id;
          }
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const social = [
    { href: `mailto:${profile.email}`, label: "Email" },
    { href: profile.github, label: "GitHub" },
    { href: profile.linkedin, label: "LinkedIn" },
  ];

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-zinc-200/80 bg-zinc-50/70 p-8 backdrop-blur-md lg:flex">
        <div>
          <a href="#home" className="group block focus:outline-none">
            <h1 className="text-base font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
              {profile.name}
            </h1>
            <p className="mt-0.5 text-xs text-zinc-500 font-mono">
              {profile.role}
            </p>
          </a>

          <nav aria-label="Sections" className="mt-12">
            <ul className="space-y-1.5">
              {sections.map((s) => {
                const isCurrent = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                        isCurrent
                          ? "bg-zinc-900 text-white shadow-sm"
                          : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900"
                      }`}
                    >
                      <span>{s.label}</span>
                      {isCurrent && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="space-y-5">
          <a
            href={profile.resume}
            download
            className="flex w-full items-center justify-center rounded-lg bg-zinc-900 py-2.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-[0.98]"
          >
            Download Resume ↗
          </a>

          <div className="flex items-center gap-3 pt-2 text-xs font-mono text-zinc-500">
            {social.map((l, idx) => (
              <span key={l.label} className="flex items-center gap-3">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 transition-colors"
                >
                  {l.label}
                </a>
                {idx < social.length - 1 && (
                  <span className="text-zinc-300">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Sticky Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-5 py-3 backdrop-blur-md lg:hidden">
        <span className="text-xs font-semibold text-zinc-900">
          {profile.name}
        </span>
        <nav className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                active === s.id ? "bg-zinc-900 text-white" : "text-zinc-600"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
