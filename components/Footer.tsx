"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const social = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/aurora-ai" },
  { icon: FaXTwitter, href: "https://twitter.com/auroraAI" },
  { icon: FaYoutube, href: "https://youtube.com/@auroraAI" }
];

const footerLinks = [
  {
    title: "Solutions",
    items: ["AI Copilots", "Predictive Insights", "Automation Ops", "AI Governance"]
  },
  {
    title: "Resources",
    items: ["Case Studies", "Research Lab", "Playbooks", "Security Brief"]
  },
  {
    title: "Company",
    items: ["About", "Leadership", "Careers", "Press"]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-light/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-display text-2xl text-white"
            >
              Aurora<span className="text-emerald">AI</span>
            </motion.h2>
            <p className="text-sm text-slate-400">
              We build intelligent systems that accelerate human ingenuity.
              Founded by product leaders from research labs and high-growth
              startups, Aurora delivers responsible AI from strategy to scale.
            </p>
            <div className="flex items-center gap-4">
              {social.map((platform) => (
                <a
                  key={platform.href}
                  href={platform.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-emerald hover:text-emerald"
                >
                  <platform.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                  {column.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  {column.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="transition hover:text-emerald"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aurora AI Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-emerald">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-emerald">
              Responsible AI
            </a>
            <a href="#" className="transition hover:text-emerald">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
