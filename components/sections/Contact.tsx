"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { constants } from "@/lib/constants";

const subjectOptions = [
  "EdTech Project / Platform Work",
  "Research Collaboration",
  "Academic Opportunity",
  "General Question",
];

const platformTypes = [
  "Adaptive Learning / AI Tutoring",
  "Quiz / Assessment Tool",
  "LMS / Course Platform",
  "Corporate Training",
  "Other EdTech",
  "I'm building something new",
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    platformType: "",
    missingField: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "default";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "default";
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "default";

      await emailjs.send(serviceId, templateId, {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
        platform_type: formState.platformType,
        missing_field: formState.missingField,
        to_email: constants.email,
      }, userId);

      setSubmitStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "", platformType: "", missingField: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const isEdTech = formState.subject === "EdTech Project / Platform Work";

  return (
    <section id="contact" className="min-h-screen bg-primary py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Let's build something that matters.
            </h2>
            <p className="font-body text-lg text-text-secondary mb-8 leading-relaxed">
              Researchers, universities, EdTech founders, learning platform builders —
              reach out. I read every message and respond to all of them.
            </p>

            {/* Preferred topics */}
            <div className="mb-8">
              <p className="font-mono text-xs tracking-widest uppercase text-text-dim mb-4">
                Preferred topics
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Research collaboration",
                  "Academic opportunities",
                  "EdTech platform work",
                  "Cognitive assessment systems",
                  "Learning analytics",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-accent-primary/10 text-accent-primary/80 border border-accent-primary/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-text-dim mb-4">
                Direct links
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "GitHub", href: constants.social.github },
                  { name: "X / Twitter", href: constants.social.twitter },
                  { name: "LinkedIn", href: constants.social.linkedin },
                  { name: "Substack", href: constants.social.substack },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-card border border-border hover:border-accent-primary/50 transition-all duration-300"
                  >
                    <span className="font-body text-sm text-text-primary">
                      {link.name}
                    </span>
                    <span className="ml-auto text-text-dim text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-bg-card border border-border rounded-2xl p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs tracking-widest uppercase text-text-dim mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-dim focus:outline-none focus:border-accent-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs tracking-widest uppercase text-text-dim mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-dim focus:outline-none focus:border-accent-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs tracking-widest uppercase text-text-dim mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary/50 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      What's this about?
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* EdTech extra fields */}
                <AnimatePresence>
                  {isEdTech && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-6"
                    >
                      {/* Platform type */}
                      <div>
                        <label
                          htmlFor="platformType"
                          className="block font-mono text-xs tracking-widest uppercase text-text-dim mb-2"
                        >
                          What describes your platform?
                        </label>
                        <select
                          id="platformType"
                          name="platformType"
                          value={formState.platformType}
                          onChange={handleChange}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary/50 transition-colors appearance-none"
                        >
                          <option value="" disabled>
                            Select platform type
                          </option>
                          {platformTypes.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* What's missing */}
                      <div>
                        <label
                          htmlFor="missingField"
                          className="block font-mono text-xs tracking-widest uppercase text-text-dim mb-2"
                        >
                          What does your assessment system measure right now, and what's it missing?
                        </label>
                        <textarea
                          id="missingField"
                          name="missingField"
                          value={formState.missingField}
                          onChange={handleChange}
                          rows={3}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-dim focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
                          placeholder="Describe your current assessment approach..."
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs tracking-widest uppercase text-text-dim mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-dim focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </motion.button>

                {/* Status messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center font-mono text-sm text-emerald-400"
                    >
                      Message received. I'll respond within 24 hours.
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center font-mono text-sm text-red-400"
                    >
                      Failed to send. Try emailing me directly at{" "}
                      <a
                        href={`mailto:${constants.email}`}
                        className="underline"
                      >
                        {constants.email}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              {/* Response note */}
              <p className="font-mono text-xs text-text-dim mt-6 text-center">
                Response within 24 hours. EdTech project inquiries: I'll send a specific question about your platform within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
