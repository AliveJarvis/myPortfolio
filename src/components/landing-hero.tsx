"use client"; // Make sure this is at the top of the file if you're in /app

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // <- use this in app router
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter(); // <-- add this

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Arjun Kumar
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Full Stack Web Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I am a software developer specializing in building
                high-performance, user-focused web applications. Skilled in{" "}
                <span className="font-semibold text-accent">
                  MERN Stack {"|React , MongoDB , Node.js with Express.js|"}{" "}
                </span>
                , <span className="font-semibold text-accent">NextJS</span>,{" "}
                <span className="font-semibold text-accent">SEO</span>{" "}
                <span className="font-semibold text-accent"></span>, and an
                expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">HTML</span> and{" "}
                <span className="font-semibold text-accent">CSS </span>
                {"(can adapt any css libraries in minutes)"}
              </div>
            </FadeUp>
          </AnimatePresence>

          {/* ✅ Replace <Link> with button that uses router.push */}
          <button
            onClick={() => router.push("/about")}
            className="group pointer-events-auto relative m-4 mb-2 me-2 mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
              Check my experience
            </span>
          </button>
          <Link href={"https://arjun-portfolio-japan.vercel.app/"}>
            <button className="group pointer-events-auto relative m-4 mb-2 me-2 mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
                日本語版ポートフォリオはこちら
              </span>
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
