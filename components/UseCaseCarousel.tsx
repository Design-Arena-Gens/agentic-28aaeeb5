"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    industry: "Healthcare",
    headline: "Clinical insight assistant",
    impact:
      "Reduced chart review time by 67% and increased diagnostic confidence for care teams with HIPAA-aligned guardrails.",
    signals: ["FHIR data ingestion", "Explainable summaries", "Risk triage alerts"]
  },
  {
    industry: "Financial Services",
    headline: "Autonomous compliance analyst",
    impact:
      "Automated AML monitoring and reconciliation workflows, saving 12k hours annually while exceeding regulatory benchmarks.",
    signals: ["Case clustering", "Anomaly detection", "Auditable decisions"]
  },
  {
    industry: "E-commerce",
    headline: "Adaptive growth optimizer",
    impact:
      "Personalized lifecycle campaigns and merchandising, increasing CVR by 23% with unified voice of customer insights.",
    signals: ["Behavioral segmentation", "Creative generation", "Experiment autopilot"]
  }
];

export function UseCaseCarousel() {
  return (
    <section id="platform" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            Industry momentum
          </span>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
            Proven AI programs across regulated and high-growth sectors
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.article
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-charcoal-light/60 p-8 shadow-xl shadow-black/30"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
                {useCase.industry}
              </span>
              <h3 className="mt-4 font-display text-2xl text-white">
                {useCase.headline}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{useCase.impact}</p>
              <div className="mt-auto pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Signal stack
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {useCase.signals.map((signal) => (
                    <li key={signal} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
