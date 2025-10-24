"use client";

import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCpu,
  FiMessageCircle,
  FiShield
} from "react-icons/fi";

const solutions = [
  {
    title: "Cognitive Copilots",
    description:
      "AI copilots embedded in your workflows to summarize knowledge, draft responses, and triage decisions with human oversight.",
    icon: FiMessageCircle,
    pill: "Customer & revenue teams",
    highlights: ["Retrieval-augmented chat", "Agentic task routing", "Human feedback loops"]
  },
  {
    title: "Predictive Intelligence",
    description:
      "Forecast demand, detect anomalies, and align teams with scenario planning backed by high-fidelity models.",
    icon: FiBarChart2,
    pill: "Ops & finance leaders",
    highlights: ["Time-series modeling", "Explainable AI dashboards", "KPI monitoring"]
  },
  {
    title: "Adaptive Automation",
    description:
      "Autonomous workflows for support, marketing, and product operations that react to live signals in real-time.",
    icon: FiCpu,
    pill: "Growth & product squads",
    highlights: ["Multi-agent orchestration", "API-first automation", "Auto-scaling infrastructure"]
  },
  {
    title: "Responsible AI Fabric",
    description:
      "Evaluation, governance, and compliance guardrails integrated into every deployment to reduce risk.",
    icon: FiShield,
    pill: "Security & compliance",
    highlights: ["Bias and drift monitoring", "Policy enforcement engine", "Tamper-proof audit trails"]
  }
];

export function SolutionsGrid() {
  return (
    <section id="solutions" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            Platform
          </span>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Modular capabilities tailored to your AI maturity
          </h2>
          <p className="text-base text-slate-300 md:max-w-3xl">
            Combine Aurora modules to match your use cases. We orchestrate the
            right models, data, and human feedback to move from idea to impact
            without compromising safety.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, idx) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-charcoal-light/70 p-8 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/15 text-emerald">
                  <solution.icon className="text-xl" />
                </span>
                <div>
                  <h3 className="font-display text-2xl text-white">
                    {solution.title}
                  </h3>
                  <span className="mt-1 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
                    {solution.pill}
                  </span>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-300">
                {solution.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {solution.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-emerald" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
