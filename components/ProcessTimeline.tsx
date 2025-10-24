"use client";

import { motion } from "framer-motion";

const phases = [
  {
    stage: "1. Opportunity Blueprint",
    summary:
      "Align on goals, evaluate data readiness, and identify high-leverage use cases in a two-week discovery sprint.",
    artifacts: ["Executive alignment workshop", "AI value map", "Data instrumentation plan"]
  },
  {
    stage: "2. Pilot Design & Validation",
    summary:
      "Prototype with real data, build human-in-the-loop safeguards, and stress-test models against success criteria.",
    artifacts: ["Prototype UX and flows", "Model evaluation matrix", "Compliance & risk charter"]
  },
  {
    stage: "3. Production Rollout",
    summary:
      "Deploy to production with monitoring, feedback loops, and training for stakeholders to drive adoption.",
    artifacts: ["Launch playbook", "Observability dashboards", "Enablement & workflow training"]
  },
  {
    stage: "4. Continuous Optimization",
    summary:
      "Iterate on KPIs, expand to adjacent teams, and automate governance with Aurora&apos;s MLOps fabric.",
    artifacts: ["Quarterly KPI reviews", "Feature expansion roadmap", "Automated governance policies"]
  }
];

export function ProcessTimeline() {
  return (
    <section id="process" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            Delivery playbook
          </span>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
            Launch your AI strategy with confidence in 90 days
          </h2>
          <p className="mt-4 text-base text-slate-300 md:max-w-3xl">
            Our hybrid team of product strategists, ML engineers, and designers
            guides your organization from idea to scaled adoption with a proven
            four-phase framework.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-emerald via-emerald/30 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.stage}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-charcoal-light/70 p-8 shadow-xl shadow-black/30 md:w-[48%] ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/20 text-lg font-semibold text-emerald">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-2xl text-white">
                    {phase.stage}
                  </h3>
                </div>
                <p className="text-sm text-slate-300">{phase.summary}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
                    Key Outcomes
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {phase.artifacts.map((artifact) => (
                      <li key={artifact} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald" />
                        <span>{artifact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
