"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutMeDexPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fdfaf3] to-[#f5f2e7] dark:from-[#0f0f0f] dark:to-[#0f0f0f] transition-colors duration-700">
      <Navbar />
      {/* Content */}
      <motion.div
        {...({
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
          transition: { duration: 0.8 },
          className:
            "min-h-screen flex items-center justify-center p-6 transition-opacity duration-700",
          style: { perspective: 1000 },
        } as HTMLMotionProps<"div">)}
      >
        <section className="bg-white dark:bg-[#1a1a1a] rounded-[24px] shadow-2xl border-[2px] border-[#e7d9b0] dark:border-[#333333] w-full max-w-7xl p-10 relative overflow-hidden">
          <div className="absolute top-4 left-4">
            <span className="bg-[#ded4ff] dark:bg-[#5b3ed2] dark:text-white text-xs px-2 py-1 rounded-full font-bold tracking-wider shadow-sm">
              ID#001 · Developer Type
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Profile */}
            <div className="flex flex-col items-center justify-center md:w-1/3">
              <div className="border-[4px] border-[#bbaaff] dark:border-[#766cf6] rounded-full p-1 shadow-md bg-[#f7f5ff] dark:bg-[#2a244d]">
                <Image
                  src="/Assets/profile.png"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <h2 className="mt-4 text-xl font-bold text-[#5b3ed2] dark:text-[#a89fff] tracking-wide">
                Entry #001
              </h2>
              <p className="text-lg font-semibold text-black dark:text-white">
                Hyewon
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium px-3 py-[2px] rounded-md bg-[#f3f3f3] dark:bg-[#2e2e2e] mt-1">
                Full-Stack Developer
              </p>

              <div className="mt-4 text-[13px] text-gray-700 dark:text-gray-300 flex flex-col items-start gap-1 w-full max-w-[200px]">
                <div className="bg-[#ffe0ef] dark:bg-[#5b2b41] px-2 py-1 rounded text-xs w-full">
                  🧠 <span className="font-medium">Type:</span> Developer
                </div>
                <div className="bg-[#e0f7fa] dark:bg-[#244e54] px-2 py-1 rounded text-xs w-full">
                  🌍 <span className="font-medium">Region:</span> Korea → Canada
                </div>
                <div className="bg-[#ede7f6] dark:bg-[#38305f] px-2 py-1 rounded text-xs w-full">
                  ⏱ <span className="font-medium">Last Updated:</span> Apr{" "}
                  <span className="tracking-wide">2025</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:w-2/3 flex flex-col gap-6 text-[15px] leading-relaxed font-sans text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-base font-semibold text-[#5b3ed2] dark:text-[#a89fff] mb-1">
                  📄 Description
                </h3>
                <p>
                  Hyewon is a Full-Stack Developer recent graduate from
                  Centennial College obtained a Software Engineering Technology
                  Advanced Diploma, with a bachelor&apos;s degree in Computer
                  Science Engineering. She built Microservices, REST APIs, and
                  AI integrations with a passion for clean, accessible design.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#5b3ed2] dark:text-[#a89fff] mb-1">
                  📚 Education
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Centennial College (2023 – 2025) – Software Engineering
                    Technology (GPA 4.2/4.5)
                  </li>
                  <li>
                    Inha Technical College (Graduated 2021) – BS. Computer
                    Science Engineering
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#5b3ed2] dark:text-[#a89fff] mb-1">
                  🧳 Work Experience
                </h4>
                <ul className="list-disc list-inside">
                  <li>Full-Stack Developer, Centennial College (2024–2025)</li>
                  <li>Software Developer (Co-op), Faubert Lab (2019)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#5b3ed2] dark:text-[#a89fff] mb-1">
                  🧰 Skills
                </h4>
                <div className="flex flex-col gap-1">
                  <div>
                    <span className="font-medium">Frontend:</span> React,
                    Next.js, TypeScript
                  </div>
                  <div>
                    <span className="font-medium">Backend:</span> Python, Java,
                    C#, FastAPI, Spring Boot, REST APIs
                  </div>
                  <div>
                    <span className="font-medium">Database & Tools:</span>{" "}
                    MongoDB, Azure, Agile/Scrum
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-3">
                <a
                  href="/Assets/HyewonHam_Resume.pdf"
                  target="_blank"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-[#333] shadow-sm transition"
                >
                  📎 View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/hyewon-ham/"
                  target="_blank"
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-[#333] shadow-sm transition"
                >
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
