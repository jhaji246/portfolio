"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image/Visual Side */}
          <motion.div variants={imageVariants} className="relative">
            <motion.div
              className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative">
                {/* Profile Photo */}
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Abhilash Jhaji"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                About Me
              </h2>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Passionate about creating impactful digital experiences
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Accomplished Senior Software Engineer with 5+ years of expertise in Android and Flutter development, 
              excelling in system performance tuning, API orchestration, Payment Terminal Integration on PAX devices, 
              and critical production incident mitigation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Specialized in building enterprise-grade mobile applications with Clean Architecture, 
              BLE device integration, real-time telemetry processing, and AI/ML integration. 
              Passionate about mentoring teams and delivering scalable solutions that impact millions of users.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-6"
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  <AnimatedCounter target={5} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  <AnimatedCounter target={30} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Happy Clients
                </div>
              </motion.div>
            </motion.div>

            {/* Download Resume Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.a
                href="/Resume.pdf"
                download="Abhilash_Jhaji_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
