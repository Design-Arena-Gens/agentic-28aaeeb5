"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Hours Saved", value: "48k+", description: "Automated human work annually" },
  { label: "ROI", value: "6.2x", description: "Average return across AI rollouts" },
  { label: "Confidence", value: "92%", description: "Model accuracy within safety guardrails" },
  { label: "Teams Enabled", value: "37", description: "Cross-functional squads in production" }
];

export function StatsMarquee() {
  return (
    <section className="border-b border-white/5 bg-charcoal-light/60 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald">
            Proof in production
          </span>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Scale responsibly with measurable outcomes
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-charcoal/60 p-6 shadow-xl shadow-black/30"
            >
              <h3 className="font-display text-4xl text-emerald">{stat.value}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
                {stat.label}
              </p>
              <p className="mt-3 text-sm text-slate-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
