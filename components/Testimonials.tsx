"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Anika Shah",
    title: "Chief Product Officer, LatticeCare",
    quote:
      "Aurora AI helped us build a clinical co-pilot our physicians actually trust. They translated our complex requirements into a delightful experience without compromising safety.",
    avatar: "/avatars/anika.svg"
  },
  {
    name: "Marcus Li",
    title: "VP of Data, Skyline Commerce",
    quote:
      "Their multi-agent automation layer turned our marketing ops into a fully adaptive system. We ship experiments 5x faster and can explain every decision.",
    avatar: "/avatars/marcus.svg"
  },
  {
    name: "Stephanie Grant",
    title: "Head of Risk, Horizon Bank",
    quote:
      "Aurora embedded governance into our AI stack from day one. Auditors, regulators, and executives now have a single source of truth for model health.",
    avatar: "/avatars/stephanie.svg"
  }
];

export function Testimonials() {
  return (
    <section id="resources" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">
            Voices from partners
          </span>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Teams trust Aurora to ship responsible AI initiatives
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-charcoal-light/70 p-8 shadow-xl shadow-black/40"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <figcaption className="font-semibold text-white">
                    {testimonial.name}
                  </figcaption>
                  <p className="text-xs uppercase tracking-wide text-emerald">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <blockquote className="mt-6 text-sm text-slate-300">
                “{testimonial.quote}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
