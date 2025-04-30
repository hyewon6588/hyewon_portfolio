"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import classNames from "classnames";
import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "PulsePoint Community Platform",
    context: "Academic Project",
    description:
      "A web platform for community members to post updates, request help, and volunteer support, with integrated AI chat and role-based access.",
    role: [
      "Developed AI-powered chatbot using LangChain.js and Google Gemini API",
      "Built Help Request UI with volunteer and resolution features",
      "Integrated GraphQL microservices with Apollo Federation",
      "Implemented role-based access control across frontend views",
    ],
    stack: ["Vite", "GraphQL", "Apollo", "MongoDB"],
    image: "/Assets/projects/PulsePoint.png",
    demo: null,
  },
  {
    title: "Patient Monitoring App",
    context: "Academic Project",
    description:
      "A web app that helps nurses track patient vitals and symptoms, while allowing patients to submit daily updates and emergency alerts.",
    role: [
      "Deployed the platform with one-command launch",
      "Implemented nurse vitals view",
      "Built dynamic daily input forms for patients",
    ],
    stack: ["Flask", "React", "MongoDB", "GraphQL", "Microservices"],
    image: "/Assets/projects/PatientMonitoring.png",
    demo: "https://patient-monitoring-app.netlify.app/",
  },
  {
    title: "ApplyMate",
    context: "Personal Project",
    description:
      "A personal tool that helps track job applications with match scores, keyword feedback, and file uploads.",
    role: [
      "Built full-stack job tracker with Next.js and FastAPI",
      "Implemented resume-to-job match scoring and keyword feedback",
      "Enabled file upload (resume, job posting, cover letter, transcript)",
    ],
    stack: ["Next.js", "FastAPI", "MongoDB", "TypeScript", "Tailwind CSS"],
    image: "/Assets/projects/applymate.png",
    demo: "https://applymate-eight.vercel.app/",
  },
  {
    title: "Interactive Slideshow",
    context: "Academic Project",
    description:
      "This website shows the picture of places for vacation. It allows user to see the pictures in the slide, see bigger picture in new window when clicked, add favorite pictures (maximum 5), and remove favorites.",
    role: [
      "Implemented Add Favorites",
      "Created show zoomed photo",
      "Developed remove from favorites",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/Assets/projects/slideshow.png",
    demo: "http://studentweb.cencol.ca/hhan29/comp125/Assignment2/Assignment2.html",
  },
  {
    title: "Monster Hunter",
    context: "Academic Project",
    description:
      "This website allows the user to play monster hunting game. The user gets points once they click on the monster. Whenever the user catches the monster, the speed of the monster movement gets faster. Users may reset monster's speed and their scores.",
    role: [
      "Implemented Speed Updates",
      "Created Monster Relocation",
      "Debugged Click location issue",
    ],
    stack: ["HTML", "JavaScript", "CSS"],
    image: "/Assets/projects/monster.png",
    demo: "http://studentweb.cencol.ca/hhan29/comp125/Assignment3_v08/Assignment3_v08/index.html",
  },
  {
    title: "Ham Pizza",
    context: "Academic Project",
    description:
      "This application allows the user to order pizza by entering information and choices.",
    role: [
      "Designed User Interface",
      "Implemented Functional Requirements",
      "Managed with Exception Handling.",
    ],
    stack: ["C#", "C# .NET"],
    image: "/Assets/projects/pizza.png",
    demo: "/Assets/projects/Ham_Pizza.mp4",
  },
];

export default function ProjectsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(projects.length).fill(false)
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -440 : 440,
        behavior: "smooth",
      });
    }
  };

  const toggleFlip = (index: number) => {
    setFlipped((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  return (
    <div className="min-h-screen bg-[#f9f6ee] text-[#1c1c1c] px-4 sm:px-10 py-16 dark:bg-[#0f0f0f] dark:text-white">
      <Navbar />
      <h1 className="text-4xl font-bold font-playfair text-center mb-12 text-[#3f2e00] dark:text-[#f0e9cc]">
        My Projects
      </h1>

      <section className="px-20">
        <h2 className="text-2xl font-bold mb-6 text-[#5e4600] dark:text-[#d7cba0]">
          Personal Projects
        </h2>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#fff7e0] dark:bg-[#2b2b2b] border border-[#d8c392] dark:border-[#4a4a4a] text-[#3e2e00] dark:text-[#f0e9cc] rounded-full shadow-md hover:scale-105 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <div ref={scrollRef} className="flex overflow-x-hidden gap-6 pb-4">
            {projects.map((project, index) => {
              const isFlipped = flipped[index];
              return (
                <div
                  key={index}
                  className="min-w-[470px] max-w-[470px] flex-shrink-0 cursor-pointer"
                  onClick={() => toggleFlip(index)}
                >
                  <div
                    className={classNames(
                      "relative w-full h-[520px]",
                      "[perspective:1000px]"
                    )}
                  >
                    <div
                      className={classNames(
                        "relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
                        isFlipped ? "[transform:rotateY(180deg)]" : ""
                      )}
                    >
                      {/* Front */}
                      <div className="absolute w-full h-full p-4 bg-white dark:bg-[#1a1a1a] border-[1.5px] border-[#e7d9b0] dark:border-[#333333] rounded-2xl shadow-md [backface-visibility:hidden]">
                        <h4 className="text-md font-bold leading-tight text-[#4b3b00] dark:text-[#f5dd88]">
                          {project.title}
                        </h4>
                        <p className="text-sm mb-2 font-medium text-gray-600 dark:text-gray-300">
                          {project.context}
                        </p>
                        {project.image && (
                          <div className="w-full h-[250px] relative mb-3 bg-white flex items-center justify-center overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={500}
                              height={250}
                              className="object-contain"
                            />
                          </div>
                        )}
                        <p className="text-sm mb-2 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.stack.map((tech, j) => (
                            <span
                              key={j}
                              className="text-xs px-2 py-1 bg-[#fdf5d0] dark:bg-[#2f2f2f] text-[#3e2e00] dark:text-[#f0e9cc] rounded-full border border-[#e7d9b0] dark:border-[#4a4a4a]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            className="mt-4 inline-block px-4 py-2 text-sm border rounded text-black dark:text-white hover:bg-black  dark:hover:bg-white hover:text-white dark:hover:text-black transition"
                          >
                            Demo
                          </a>
                        )}
                      </div>

                      {/* Back */}
                      <div className="absolute w-full h-full p-4 bg-white dark:bg-[#1a1a1a] border-[1.5px] border-[#e7d9b0] dark:border-[#333333] rounded-2xl shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
                        <h4 className="font-semibold text-sm mb-2 text-black dark:text-white">
                          Roles
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                          {project.role.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#fff7e0] dark:bg-[#2b2b2b] border border-[#d8c392] dark:border-[#4a4a4a] text-[#3e2e00] dark:text-[#f0e9cc] rounded-full shadow-md hover:scale-105 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
