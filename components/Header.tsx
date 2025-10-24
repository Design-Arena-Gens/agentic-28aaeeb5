"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#platform", label: "Platform" },
  { href: "#process", label: "Process" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-charcoal/80 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
            <FaRobot className="text-xl" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Aurora<span className="text-emerald">AI</span>
          </span>
        </motion.div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2, color: "#34D399" }}
              className="transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="#contact"
            className="rounded-full border border-emerald/40 bg-emerald/20 px-5 py-2 text-sm font-semibold text-emerald shadow-lg shadow-emerald/20 transition hover:border-emerald hover:bg-emerald/30"
          >
            Request a Strategy Call
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
