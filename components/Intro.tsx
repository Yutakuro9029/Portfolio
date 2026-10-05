import Image from "next/image";
import SectionHeading from "./SectionHeading";
import {
  profile,
  stats,
  facts,
  skills,
  education,
  honors,
  teaching,
} from "@/data/profile";

const wrap = "mx-auto max-w-6xl px-6 sm:px-12";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-14 py-16 sm:py-24">
      <div className={wrap}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 px-3 py-1 text-xs font-mono text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Internships
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg font-normal leading-relaxed text-zinc-700">
              {profile.tagline}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white transition-all hover:bg-zinc-800"
              >
                Explore Works ↓
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 p-2 shadow-sm">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={1032}
                height={1333}
                priority
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:border-zinc-300"
            >
              <dd className="font-mono text-3xl font-semibold tracking-tight text-zinc-900">
                {s.value}
              </dd>
              <dt className="mt-1 text-xs text-zinc-500 leading-snug">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-14 py-20 border-t border-zinc-200/60"
    >
      <div className={wrap}>
        <SectionHeading
          title="About"
          blurb="Background, core technical methodology, and tools in production."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <dl className="divide-y divide-zinc-100 rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm lg:col-span-7">
            {facts.map((f) => (
              <div
                key={f.k}
                className="grid gap-1 py-4 sm:grid-cols-4 sm:gap-4 first:pt-0 last:pb-0"
              >
                <dt className="font-mono text-xs font-medium text-zinc-400">
                  {f.k}
                </dt>
                <dd className="text-xs leading-relaxed text-zinc-700 sm:col-span-3">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm lg:col-span-5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Tech Stack
            </h3>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="text-xs font-medium text-zinc-700">{s.group}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <li
                        key={i}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[11px] text-zinc-600"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-14 py-20 border-t border-zinc-200/60"
    >
      <div className={wrap}>
        <SectionHeading
          title="Education"
          blurb="Academic foundation, achievements, and teaching responsibilities."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm lg:col-span-8">
            <span className="font-mono text-xs text-zinc-400">
              {education.period}
            </span>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900">
              {education.school}
            </h3>
            <p className="mt-1 text-xs text-zinc-600">{education.degree}</p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-mono text-4xl font-bold tracking-tight text-zinc-900">
                {education.gpax}
              </span>
              <span className="font-mono text-xs text-zinc-400">GPAX</span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              {education.summary}
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm lg:col-span-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Honors
            </h3>
            <ul className="mt-4 space-y-4">
              {honors.map((h) => (
                <li key={h.title}>
                  <p className="text-xs font-semibold text-zinc-800">
                    {h.title}
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                    {h.note}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm lg:col-span-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {teaching.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400">
                  {teaching.place}
                </p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-zinc-600 marker:text-zinc-300">
              {teaching.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email },
    { href: profile.github, label: "GitHub" },
    { href: profile.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer
      id="contact"
      className="scroll-mt-14 py-20 border-t border-zinc-200/60 bg-zinc-50/50"
    >
      <div className={wrap}>
        <SectionHeading
          title="Contact"
          blurb="Available for discussions on AI/ML roles, project collaborations, and internships."
        />
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-xs font-mono text-zinc-700 shadow-sm transition-all hover:border-zinc-400 hover:text-zinc-900"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
        <p className="mt-14 font-mono text-xs text-zinc-400">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
