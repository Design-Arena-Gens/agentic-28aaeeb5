"use client";

import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald/40 via-charcoal/60 to-sky/40 p-12 shadow-2xl shadow-black/40">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:max-w-xl"
          >
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Ready to activate your AI strategy?
            </h2>
            <p className="text-sm text-slate-200">
              Drop your email and our strategy team will share an annotated AI
              roadmap tailored to your goals within 48 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex w-full flex-col gap-3 md:w-auto md:flex-row"
          >
            <label className="sr-only" htmlFor="email-input">
              Work email
            </label>
            <input
              id="email-input"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-300 focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/40 md:w-72"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-slate-200"
            >
              Request roadmap
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
