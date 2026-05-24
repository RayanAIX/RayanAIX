"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "Initializing HCMS...",
  "Phase 1: Data .............. ✓",
  "Phase 2: Pattern ........... ✓",
  "Phase 3: Understanding ..... ✓",
  "Phase 4: Intelligence ...... ✓",
  "System ready.",
];

export function ActivationOverlay() {
  const [visible, setVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const initialized = sessionStorage.getItem("hcms_initialized");
    if (initialized) {
      setShowOverlay(false);
      return;
    }

    sessionStorage.setItem("hcms_initialized", "true");
    setVisible(true);

    const timers: NodeJS.Timeout[] = [];

    // Schedule each line appearing one after another
    LINES.forEach((_, i) => {
      if (i > 0) {
        timers.push(
          setTimeout(() => setCurrentLine(i), 500 + i * 400)
        );
      }
    });

    // After last line, fade out
    const fadeDelay = 500 + LINES.length * 400;
    timers.push(
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setShowOverlay(false), 800);
      }, fadeDelay)
    );

    // Failsafe: force hide after 5 seconds no matter what
    timers.push(
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => setShowOverlay(false), 300);
      }, 5000)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!showOverlay) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303] font-mono text-sm text-[#00d4ff]"
        >
          <div className="flex flex-col items-start gap-2">
            {LINES.slice(0, currentLine + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line}
              </motion.div>
            ))}
            {currentLine < LINES.length - 1 && (
              <span className="inline-block w-2 h-4 bg-[#00d4ff] ml-2 animate-pulse" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
