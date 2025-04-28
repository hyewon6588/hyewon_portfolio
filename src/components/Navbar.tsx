// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { Mail } from "lucide-react";
import LinkedInIcon from "@/components/LinkedInIcon";
import GithubIcon from "@/components/GithubIcon";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => setShowButton(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return isActive ? "text-[#5b3ed2] underline" : "";
  };

  return (
    <>
      {/* Toggle Button */}
      {showButton && (
        <motion.button
          {...({
            initial: false,
            animate: { width: hovered ? 150 : 50 },
            transition: { type: "spring", stiffness: 300, damping: 20 },
            className:
              "fixed right-6 top-6 z-50 flex items-center gap-2 bg-[#fff7e0] dark:bg-[#1f1a00] text-[#3f2e00] dark:text-[#f0e6c0] border border-[#e0c98d] dark:border-[#867543] rounded-full shadow-md hover:bg-[#f7ecd2] dark:hover:bg-[#2d2400] hover:scale-105 transition-all px-3 py-2 overflow-hidden whitespace-nowrap",
            onMouseEnter: () => setHovered(true),
            onMouseLeave: () => setHovered(false),
            onClick: () => setDrawerOpen(true),
          } as HTMLMotionProps<"button">)}
        >
          <div className="justify-center">
            <span className="text-lg">
              {hovered ? "\ud83d\udcd6" : "\ud83d\udcd8\ufe0f"}
            </span>
            {hovered && (
              <span className="text-sm font-medium"> Open DexNav</span>
            )}
          </div>
        </motion.button>
      )}

      {/* Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.aside
            {...({
              initial: { x: 300, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: 300, opacity: 0 },
              transition: { type: "spring", stiffness: 300, damping: 30 },
              className:
                "fixed right-0 top-0 h-full w-64 bg-[#fff7e0] dark:bg-[#1f1a00] border-l-[3px] border-[#e0c98d] dark:border-[#867543] shadow-xl px-6 py-8 z-50 flex flex-col gap-6 text-[16px] text-[#4b3b00] dark:text-[#f0e6c0] font-semibold items-start",
            } as HTMLMotionProps<"aside">)}
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="self-end text-[14px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              ❌ Close
            </button>
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex flex-col gap-6 text-[16px] text-[#4b3b00] dark:text-[#f0e6c0] font-semibold items-start">
                {/* <a href="/about" className="text-[#5b3ed2] underline"> */}
                <a href="/about" className={getLinkClasses("/about")}>
                  📖 Dex Entry
                </a>
                {/* <a href="/projects"> */}
                <a href="/projects" className={getLinkClasses("/projects")}>
                  🛠️ Experiments
                </a>
                {/* <a href="/contact"> */}
                <a href="/contact" className={getLinkClasses("/contact")}>
                  📩 Dispatch Signal
                </a>
              </div>
              <hr className="w-full border-t border-[#e0c98d] dark:border-[#867543] my-4" />
            </div>
            <div className="flex w-full justify-center items-center gap-6 mt-4 pb-2">
              <a
                href="https://github.com/hyewon6588"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={24} />
              </a>
              <a href="mailto:hyewon6588@gmail.com">
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hyewon-ham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={24} />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
