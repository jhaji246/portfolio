"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "FitnessTracker",
    description:
      "Production-ready fitness tracking app with BLE device integration, real-time telemetry processing, and 95%+ test coverage. Reduced cold start to 2s and memory usage by 60%.",
    image: "/project-1.jpg",
    tags: ["Android", "Kotlin", "BLE", "Jetpack Compose", "Wear OS"],
    liveUrl: "#",
    githubUrl: "https://github.com/jhaji246/FitnessTracker",
  },
  {
    id: 2,
    title: "BookTrackr",
    description:
      "Cross-platform social reading app with 50,000+ active users and 99.5% crash-free rate. AI-driven recommendations boosted engagement by 40%.",
    image: "/project-2.jpg",
    tags: ["Flutter", "Dart", "Firebase", "AI/ML", "Riverpod"],
    liveUrl: "#",
    githubUrl: "https://github.com/jhaji246/BookTrackr",
  },
  {
    id: 3,
    title: "E-Commerce Shopper App",
    description:
      "Production-ready Android e-commerce app with secure authentication, product catalog, shopping cart, and order management using Clean Architecture.",
    image: "/project-3.jpg",
    tags: ["Kotlin", "Jetpack Compose", "Ktor", "Koin", "MVVM"],
    liveUrl: "#",
    githubUrl: "https://github.com/jhaji246/ECommerce-Shopper-App",
  },
  {
    id: 4,
    title: "Blog App",
    description:
      "Offline-first blogging platform with secure authentication and robust caching. Increased user retention by 30% in low-connectivity scenarios.",
    image: "/project-4.jpg",
    tags: ["Flutter", "BLoC", "Supabase", "Clean Architecture"],
    liveUrl: "#",
    githubUrl: "https://github.com/jhaji246/Blog-App",
  },
  {
    id: 5,
    title: "Aviation Booking App",
    description:
      "Enterprise-grade Android app for flight search, booking, and passenger journey management with real-time APIs and offline support.",
    image: "/project-5.jpg",
    tags: ["Android", "Kotlin", "MVVM", "Room", "Coroutines"],
    liveUrl: "#",
    githubUrl: "https://github.com/jhaji246/Aviation-Booking-App",
  },
  {
    id: 6,
    title: "Payment Terminal Integration",
    description:
      "POS app integration with PAX payment terminals for secure transaction processing in retail environments.",
    image: "/project-6.jpg",
    tags: ["Android", "Java", "Payment APIs", "Security"],
    liveUrl: "#",
    githubUrl: "https://github.com/jhaji246/Payment-Terminal-Integration",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={headerVariants}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide"
          >
            My Work
          </motion.h2>
          <motion.h3
            variants={headerVariants}
            className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h3>
          <motion.p
            variants={headerVariants}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each one was built to solve a
            specific problem and deliver real value to users.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="text-center p-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg
                      className="w-16 h-16 mx-auto text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-400 text-sm mt-2">Project Image</p>
                  </motion.div>
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.1 * tagIndex + 0.3 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View All Projects
              <motion.svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
