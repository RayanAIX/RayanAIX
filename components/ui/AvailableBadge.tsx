"use client";

import { useEffect, useState } from "react";

export function AvailableBadge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() =>
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="fixed bottom-6 right-6 z-50 cursor-pointer
                 bg-[#0a0a10]/95 backdrop-blur-sm
                 border border-[#00ff88]/25
                 rounded-full px-4 py-2.5
                 flex items-center gap-2.5
                 hover:border-[#00ff88]/50 transition-all duration-300
                 shadow-[0_0_24px_rgba(0,255,136,0.08)]"
      style={{ animation: "fadeInUp 0.5s ease-out" }}
    >
      <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse flex-shrink-0" />
      <span className="text-xs font-medium text-white whitespace-nowrap">
        Available for EdTech Projects
      </span>
    </div>
  );
}
