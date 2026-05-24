"use client";

import React from "react";
import { motion } from "framer-motion";

const serviceCards = [
  {
    accentColor: "#00d4ff",
    badge: "Core Specialty",
    title: "Confidence-Aware Assessment",
    description:
      "I add the confidence calibration layer your quiz system doesn't have. Before learners see results, they rate how certain they are. The gap between confidence and accuracy is your most valuable pedagogical signal — and no standard platform captures it.",
    items: [
      "Confidence rating per question (before results)",
      "Calibration gap analysis across topics",
      "Overconfidence and underconfidence detection",
      "Learner cognitive archetype profiling",
      "Misconception pattern identification",
    ],
    builtFor: "Assessment platforms, AI tutors, adaptive learning systems",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    accentColor: "#7c3aed",
    badge: "High Demand",
    title: "Document-to-Learning Systems",
    description:
      "Upload any content — PDFs, notes, lectures, research papers. The system generates adaptive assessments that probe surface recall, conceptual understanding, and applied reasoning. Not just MCQs. Four question types. Confidence capture. Cognitive feedback.",
    items: [
      "Multi-type question generation (MCQ, Short Answer, Application, Explain-It)",
      "Depth-level targeting (recall vs. conceptual vs. applied)",
      "Per-topic performance breakdown",
      "AI-generated study recommendations",
      "Downloadable learner reports",
    ],
    builtFor: "Course creators, bootcamps, corporate training, EdTech platforms",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    accentColor: "#10b981",
    badge: "",
    title: "Learner Analytics & Insight Dashboards",
    description:
      "Turn raw quiz data into decisions. I build dashboards that show not just who failed, but why — which topics are misunderstood, where confidence diverges from reality, and which learners need intervention now.",
    items: [
      "Topic-level accuracy and confidence heatmaps",
      "Weak-area detection per learner and cohort",
      "Misconception clustering across a student group",
      "Progress tracking over time",
      "Exportable data and reports",
    ],
    builtFor: "Tutoring platforms, schools, online academies, LMS builders",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="8" width="4" height="13" rx="1" />
        <rect x="17" y="4" width="4" height="17" rx="1" />
        <path d="M5 7l5-4 5 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    accentColor: "#f59e0b",
    badge: "Research-Backed",
    title: "Misconception Detection",
    description:
      "A student scoring 80% with a specific misconception in the remaining 20% is more at risk than a student scoring 60% who knows exactly where their gaps are. I build systems that find the misconception, name it, and generate targeted remediation — not generic 'try again' feedback.",
    items: [
      "Rule-based and AI-powered misconception identification",
      "Named misconception patterns per topic",
      "Confidence-weighted wrong-answer analysis",
      "Targeted remediation suggestions per learner",
      "Integration with existing assessment pipelines",
    ],
    builtFor: "Adaptive learning platforms, AI tutors, test prep companies",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    accentColor: "#a78bfa",
    badge: "",
    title: "Research Collaboration",
    description:
      "If you're a researcher, academic, or R&D team working on learning systems, cognitive measurement, or AI assessment — I'm not a contractor. I'm a potential collaborator. I bring HCMS, experimental design experience, and a genuine obsession with the problem.",
    items: [
      "Joint experimental design on assessment frameworks",
      "Literature synthesis and implementation from papers",
      "Cognitive measurement instrument design",
      "Statistical analysis and validation",
      "Co-authorship where work is genuinely joint",
    ],
    builtFor: "University labs, cognitive science researchers, EdTech R&D teams",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="6" />
        <circle cx="15" cy="15" r="6" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "You share your problem",
    desc: "What's your platform? What does your assessment do now? What's missing?",
    time: "2-3 days",
  },
  {
    num: "02",
    title: "I diagnose",
    desc: "I look at your current system and identify specifically where understanding is being left unmeasured.",
    time: "1-2 days",
  },
  {
    num: "03",
    title: "I build",
    desc: "Clean code, daily updates, no surprises. You can see the build in real time.",
    time: "3-14 days",
  },
  {
    num: "04",
    title: "You get results",
    desc: "Deployed, documented, and designed to be extended. Not a one-time deliverable — a foundation.",
    time: "Included",
  },
];

const proofStats = [
  { value: "1", label: "Published Framework" },
  { value: "1", label: "Live System Built" },
  { value: "97%", label: "Peak Accuracy" },
  { value: "15", label: "Research Phases" },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen bg-primary py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Opening */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-dim mb-6">
            COGNITIVE LEARNING SYSTEMS &middot; EDTECH AI &middot; ASSESSMENT INFRASTRUCTURE
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400">
              Currently accepting EdTech projects
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-text-primary mb-6 leading-[1.1]">
            Your assessment system
            <br />
            measures recall.
            <br />
            <span className="text-accent-primary">Mine measures understanding.</span>
          </h2>

          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            I've spent a year researching the gap between getting an answer right and truly
            understanding it. Now I build that insight into real EdTech products.
          </p>
        </motion.div>

        {/* Core Truth Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-border">
            {/* Left - The wrong question */}
            <div className="flex-1 p-8 md:p-10 bg-[rgba(255,107,107,0.04)] border-b md:border-b-0 md:border-r border-[rgba(255,107,107,0.12)]">
              <p className="font-mono text-xs text-[#ff6b6b]/60 uppercase tracking-wider mb-4">
                Every quiz, every AI tutor, every LMS right now:
              </p>
              <p className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
                "Did they get it right?"
              </p>
              <p className="font-body text-sm text-text-dim">
                Correctness. Binary. Easy to fake.
              </p>
            </div>

            {/* Right - The right question */}
            <div className="flex-1 p-8 md:p-10 bg-[rgba(0,212,255,0.04)] border-[rgba(0,212,255,0.12)]">
              <p className="font-mono text-xs text-accent-primary/60 uppercase tracking-wider mb-4">
                What your platform could be asking:
              </p>
              <p className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
                "Do they know that they got it right?"
              </p>
              <p className="font-body text-sm text-text-dim">
                Calibration. Depth. Impossible to fake.
              </p>
            </div>
          </div>

          <p className="font-mono text-sm text-text-dim text-center mt-6 max-w-2xl mx-auto">
            That gap — between correctness and understanding — is what I build systems to measure.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-12"
          >
            What I build for EdTech platforms
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-[#0f0f13] border border-border rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                style={{
                  borderTop: `1px solid ${card.accentColor}33`,
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(to right, ${card.accentColor}, transparent)`,
                  }}
                />

                {/* Icon + Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${card.accentColor}15`,
                      color: card.accentColor,
                    }}
                  >
                    {card.icon}
                  </div>
                  {card.badge && (
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${card.accentColor}15`,
                        color: card.accentColor,
                        border: `1px solid ${card.accentColor}30`,
                      }}
                    >
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="font-display text-lg font-bold text-text-primary mb-3">
                  {card.title}
                </h4>

                {/* Description */}
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* What you get */}
                <div className="mb-5 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-dim mb-3">
                    What you get
                  </p>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span style={{ color: card.accentColor }} className="mt-0.5 flex-shrink-0">
                          &#10022;
                        </span>
                        <span className="min-w-0 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Built for */}
                <p className="font-mono text-[10px] text-text-dim mb-4">
                  <span className="uppercase tracking-widest">Built for:</span>{" "}
                  <span className="text-text-secondary">{card.builtFor}</span>
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="font-mono text-sm transition-colors duration-200 hover:underline"
                  style={{ color: card.accentColor }}
                >
                  &rarr; Talk about your platform
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Hire a Researcher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Why does it matter that I'm a researcher?
            </h3>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Most developers implement. I diagnosed the problem first — then built the system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "The Framework Exists",
                text: "HCMS isn't a pitch — it's a published, DOI-backed framework. The theoretical foundation for every system I build has already been validated in structured research. You're not getting a feature. You're getting a grounded idea.",
              },
              {
                num: "02",
                title: "The System Exists",
                text: "UnderstandIQ is live at understandiq.streamlit.app — not a mockup, not a demo, not a pitch deck. A real system that real learners can use today. That's what I build for your platform.",
              },
              {
                num: "03",
                title: "The Insight Drives the Code",
                text: "The reason overconfidence predicts learning failure better than raw accuracy isn't obvious. I know it because I researched it. That's the difference between a developer who builds what you ask for and a researcher who builds what you need.",
              },
            ].map((point, index) => (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <span className="font-display text-6xl font-bold text-accent-primary/10 absolute -top-4 -left-2">
                  {point.num}
                </span>
                <div className="relative pt-8 pl-4">
                  <h4 className="font-display text-lg font-bold text-text-primary mb-3">
                    {point.title}
                  </h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-12">
            How a project works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.num}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative text-center px-4"
                >
                  <span className="font-display text-4xl font-bold text-accent-primary/20 mb-3 block">
                    {step.num}
                  </span>
                  <h4 className="font-display text-base font-bold text-text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-2">
                    {step.desc}
                  </p>
                  <span className="font-mono text-[10px] text-accent-primary/60 uppercase tracking-wider">
                    {step.time}
                  </span>
                </motion.div>

                {/* Dashed connector line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex items-start pt-12">
                    <div className="h-px flex-1 border-t border-dashed border-accent-primary/20" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative rounded-2xl p-px"
            style={{
              background: "linear-gradient(to right, #00d4ff, #7c3aed, #00d4ff)",
            }}
          >
            <div className="bg-[#0a0a10] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    Ready to measure understanding — not just correctness?
                  </h3>
                  <p className="font-body text-text-secondary">
                    Tell me about your platform. I'll tell you exactly how I'd improve it.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="btn btn-primary text-base px-6 py-3"
                  >
                    Talk About Your Platform &rarr;
                  </a>
                  <a
                    href="#research"
                    className="btn btn-ghost text-base px-6 py-3"
                  >
                    See My Research &uarr;
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-border">
                <span className="flex items-center gap-2 font-mono text-xs text-text-dim">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available now
                </span>
                <span className="text-text-dim">&middot;</span>
                <span className="font-mono text-xs text-text-dim">EdTech focus</span>
                <span className="text-text-dim">&middot;</span>
                <span className="font-mono text-xs text-text-dim">Remote</span>
                <span className="text-text-dim">&middot;</span>
                <span className="font-mono text-xs text-text-dim">Research-backed approach</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proof Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-text-dim uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="font-mono text-sm text-text-dim text-center">
            The research and the product exist. Not as claims — as links you can click.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
