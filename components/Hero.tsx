"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-24 pt-32">
      <div className="absolute inset-x-0 top-0 h-[35rem] w-full mask-gradient bg-gradient-to-b from-emerald/40 via-charcoal/20 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex max-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300"
        >
          Trusted AI Studio for fast-moving teams
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr),340px] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Orchestrate intelligent experiences that customers trust and teams
              love.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Aurora AI blends research-grade models with human-centered design
              to launch AI copilots, predictive analytics, and autonomous
              workflows across your entire product ecosystem.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-charcoal shadow-lg shadow-emerald/30 transition hover:bg-emerald-dark hover:text-white"
              >
                Explore the platform
                <FiArrowUpRight />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-slate-200 transition hover:border-emerald hover:text-emerald"
              >
                See implementation timeline
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-charcoal-light/60 p-6 shadow-2xl shadow-black/40"
          >
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-emerald">
                  Launch AI in 6 weeks
                </span>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  Modular services backed by strategic AI leadership
                </h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald" />
                  Product discovery sprints to surface high-leverage AI
                  candidates.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald" />
                  Safety, evaluation, and operations tooling baked into every
                  delivery.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald" />
                  Dedicated venture team guiding roadmap, governance, and KPIs.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
