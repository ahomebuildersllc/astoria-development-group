\
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Compass, Home, Layers, MapPin, ShieldCheck, TreePine } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ButtonLink({
  children,
  href = "#contact",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center transition ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#1F2A24]">
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-black/10 text-white backdrop-blur-[3px]">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-6 lg:px-12">
          <div>
            <div className="font-serif text-3xl font-light tracking-[0.34em] text-white md:text-4xl">
              <span>ASTOR</span><span className="italic text-[#D7C29A]">i</span><span>A</span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-[0.48em] text-white/75">Development Group</div>
          </div>

          <nav className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.22em] text-white/88 lg:flex">
            <a href="#vision" className="transition hover:text-[#D7C29A]">Vision</a>
            <a href="#services" className="transition hover:text-[#D7C29A]">Developments</a>
            <a href="#projects" className="transition hover:text-[#D7C29A]">Portfolio</a>
            <a href="#contact" className="transition hover:text-[#D7C29A]">Contact</a>
          </nav>

          <ButtonLink className="hidden border border-white/55 bg-white/5 px-8 py-5 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-md hover:bg-white hover:text-[#1F2A24] md:inline-flex">
            Investor Portal
          </ButtonLink>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-12 pt-32 text-white lg:px-12 lg:pb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-chateau.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/18 to-black/72" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.60),rgba(0,0,0,0.18),rgba(0,0,0,0.05))]" />

          <div className="relative mx-auto flex w-full max-w-[92rem] flex-col gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9 }} className="max-w-4xl">
              <p className="mb-7 text-sm font-medium uppercase tracking-[0.42em] text-[#D7C29A]">
                Sarasota • Lakewood Ranch • Gulf Coast Florida
              </p>
              <h1 className="font-serif text-6xl font-light leading-[0.94] tracking-[-0.045em] text-white md:text-8xl lg:text-9xl">
                Developing Timeless Value.
              </h1>
              <p className="mt-7 max-w-2xl text-base font-medium uppercase tracking-[0.24em] text-white/82 md:text-lg">
                Building legacies. Enriching communities.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink className="border border-white/60 bg-white/10 px-8 py-6 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-md hover:bg-white hover:text-[#1F2A24]">
                  Explore Our Developments <ArrowRight className="ml-3 h-4 w-4" />
                </ButtonLink>
              </div>
            </motion.div>

            <div className="grid gap-8 border-t border-white/40 pt-7 text-xs uppercase tracking-[0.24em] text-white/80 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="mb-4 h-px w-40 bg-white/50" />
                <p className="text-white/55">Excellence in Development</p>
                <p className="mt-4 text-white">Residential • Commercial • Hospitality</p>
              </div>
              <div className="hidden items-center gap-4 md:flex">
                <span>Scroll to discover</span>
                <ArrowRight className="h-4 w-4 rotate-90" />
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="border-y border-[#D8CDBB] bg-[#FBF8F1] px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#9A7B4F]">Our Vision</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Where story becomes home.</h2>
            </div>
            <div className="text-xl leading-9 text-[#4E5B51]">
              We believe development is more than construction. It is the careful alignment of land, design, capital, construction, and community impact. Every project begins with a clear story and ends with a place that feels intentional, timeless, and enduring.
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#9A7B4F]">Expertise</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Integrated development with architectural clarity.</h2>
              </div>
              <p className="max-w-md leading-7 text-[#566156]">
                From early feasibility through construction delivery, Astoria brings disciplined leadership to complex real estate opportunities.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Compass, title: "Site Strategy", text: "Land evaluation, use planning, entitlement direction, and project positioning." },
                { icon: Building2, title: "Commercial Development", text: "Boutique commercial, office, medical, retail, and adaptive reuse opportunities." },
                { icon: Home, title: "Custom Residential", text: "Design-led homes and communities shaped around lifestyle, quality, and place." },
                { icon: Layers, title: "Construction Leadership", text: "Budget control, trade coordination, value engineering, and field execution." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-[#D8CDBB] bg-[#FBF8F1]/80 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <item.icon className="mb-8 h-8 w-8 text-[#9A7B4F]" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#5E675D]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#1F2A24] px-6 py-24 text-[#F4F0E8] lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#C8B58E]">Selected Direction</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">A refined portfolio in motion.</h2>
              <p className="mt-6 max-w-lg leading-8 text-[#D7D2C5]">
                Astoria is focused on projects that combine strong location fundamentals, elevated design, and practical long-term value.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                ["01", "Medical & Professional Office", "Modern commercial spaces designed for tenants, investors, and long-term operators."],
                ["02", "Residential Development", "Custom homes and small-scale communities with clean architecture and natural material palettes."],
                ["03", "Adaptive Reuse & Tenant Build-Outs", "Transforming existing buildings into high-performing spaces with a premium finish standard."],
              ].map(([num, title, text]) => (
                <div key={title} className="rounded-[1.75rem] border border-[#556050] bg-[#2A372F] p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <span className="text-sm tracking-[0.3em] text-[#C8B58E]">{num}</span>
                    <div className="max-w-2xl">
                      <h3 className="text-2xl font-semibold">{title}</h3>
                      <p className="mt-3 leading-7 text-[#D7D2C5]">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Trust", text: "Clear communication, responsible decision-making, and accountable project leadership." },
              { icon: TreePine, title: "Natural Elegance", text: "Warm materials, calm colors, and design that respects the surrounding environment." },
              { icon: MapPin, title: "Local Insight", text: "Focused knowledge of Florida Gulf Coast markets, permitting, and construction realities." },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-[#E8DFCF] p-8">
                <item.icon className="h-8 w-8 text-[#9A7B4F]" />
                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#566156]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 lg:px-10">
          <div className="mx-auto overflow-hidden rounded-[2.5rem] bg-[#9A7B4F] p-10 text-[#FBF8F1] md:p-16 lg:p-20">
            <div className="grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#F0E4CF]">Start the Conversation</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Let’s shape a project worth remembering.</h2>
              </div>
              <div className="flex flex-col justify-end">
                <div>
                  <p className="text-lg leading-8 text-[#F5EBD9]">
                    Whether you are exploring land, planning a commercial build-out, or developing a high-end residential opportunity, Astoria Development Group brings vision, structure, and execution.
                  </p>

                  <div className="mt-8 border-l border-white/30 pl-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#F0E4CF]/75">Office</p>
                    <p className="mt-2 text-xl font-light text-white">
                      2225 S Tamiami Trail<br />
                      Venice, FL 34293
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:ahomebuildersllc@gmail.com"
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-[#1F2A24] px-8 py-6 text-base text-[#F4F0E8] transition hover:bg-[#2E3D34]"
                >
                  Contact Astoria <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#D8CDBB] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#6F766D] md:flex-row">
          <p>© 2026 Astoria Development Group. All rights reserved.</p>
          <p>Development • Construction • Design Leadership</p>
        </div>
      </footer>
    </div>
  );
}
