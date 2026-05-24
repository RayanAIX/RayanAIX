"use client";

import React from "react";
import { motion } from "framer-motion";
import { constants } from "@/lib/constants";

const writingCards = [
  {
    platform: "Substack",
    handle: "@muhammedrayanshahid",
    url: constants.social.substack,
    description:
      "Research notes, half-formed ideas, and questions I can't stop asking. Long-form thinking on cognitive measurement, AI assessment, and building systems that understand understanding.",
    button: "Read on Substack ↗",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    platform: "X (Twitter)",
    handle: "@MRayanShahid",
    url: constants.social.twitter,
    description:
      "Short-form thinking on AI research, learning systems, and building in public. The same mind behind HCMS, in tweet form.",
    button: "Follow on X ↗",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    platform: "Live System",
    handle: "understandiq.streamlit.app",
    url: "https://understandiq.streamlit.app",
    description:
      "The live cognitive assessment engine built on HCMS research. Upload any document. Discover your cognitive fingerprint — free, no signup.",
    button: "Try UnderstandIQ ↗",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Writing: React.FC = () => {
  return (
    <section id="writing" className="min-h-screen bg-primary py-24 flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Thinking Out Loud
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Research notes, systems thinking, and ideas in motion — across long-form, short-form, and live code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {writingCards.map((card, index) => (
            <motion.div
              key={card.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-primary/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative bg-bg-card border border-border rounded-2xl p-8 text-center overflow-hidden h-full flex flex-col">
                {/* Aurora background */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.2),transparent_50%)]"
                    style={{ animation: "aurora 8s ease-in-out infinite" }}
                  />
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.2),transparent_50%)]"
                    style={{ animation: "aurora 8s ease-in-out infinite reverse" }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center">
                  <div className="mb-6 text-accent-primary">
                    {card.icon}
                  </div>

                  <h3 className="font-display text-xl font-bold text-text-primary mb-1">
                    {card.platform}
                  </h3>
                  <p className="font-mono text-sm text-accent-primary/60 mb-4">
                    {card.handle}
                  </p>

                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>

                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm px-6 py-2.5 font-medium"
                  >
                    {card.button}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
