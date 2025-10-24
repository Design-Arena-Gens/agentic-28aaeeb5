"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const insights = [
  {
    tag: "Playbook",
    title: "Designing AI copilots your team will actually adopt",
    description:
      "A human-centered checklist to capture requirements, define measurable success, and launch an AI co-pilot in under eight weeks.",
    href: "#"
  },
  {
    tag: "Research",
    title: "Evaluation frameworks for agentic workflows",
    description:
      "Benchmark multi-agent systems against cost, latency, and safety metrics with Aurora&apos;s open evaluation harness.",
    href: "#"
  },
  {
    tag: "Webinar",
    title: "Executive briefing: Responsible AI in production",
    description:
      "Watch how Fortune 500 leaders govern AI investments, structure teams, and drive meaningful ROI in 2024.",
    href: "#"
  }
];

export function InsightsShowcase() {
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            Insights
          </span>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Stay ahead with Aurora&apos;s latest playbooks and research drops
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-charcoal-light/70 p-8 shadow-xl shadow-black/30"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
                {insight.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl text-white">
                {insight.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">
                {insight.description}
              </p>
              <a
                href={insight.href}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-emerald transition hover:text-emerald-dark"
              >
                Access resource
                <FiExternalLink />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
