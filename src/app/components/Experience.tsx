"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "AppInventiv Technologies",
    location: "Hyderabad, India",
    period: "September 2025 – Present",
    description: [
      "Developed enterprise-grade Android features for aviation booking and operations app",
      "Implemented scalable MVVM architecture using Jetpack components",
      "Integrated RESTful APIs for real-time flight schedules and booking management",
      "Optimized app performance for high-traffic scenarios",
    ],
    technologies: ["Android", "Kotlin", "Flutter", "Java", "Clean Architecture"],
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Monocept Consulting Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "December 2024 – September 2025",
    description: [
      "Integrated and optimized performance APIs across multiple modules",
      "Diagnosed and remediated production anomalies through crash analytics",
      "Conducted root cause analysis of critical incidents",
      "Delivered analytical dashboards and maintained JIRA boards",
    ],
    technologies: ["Android", "Kotlin", "Analytics", "JIRA"],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Ivy CompTech",
    location: "Hyderabad, India",
    period: "July 2022 – November 2024",
    description: [
      "Architected Android functionalities using Kotlin and Jetpack Compose",
      "Authored RFC documents to define feature scope",
      "Performed rigorous code reviews and ensured clean integration",
      "Implemented testing using Mockito and Android JUnit",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Mockito", "Jenkins", "Firebase"],
  },
  {
    id: 4,
    role: "Android Developer",
    company: "StampIt Business Solutions LLP",
    location: "Hyderabad, India",
    period: "August 2021 – January 2022",
    description: [
      "Engineered high-performance, low-latency applications",
      "Developed scalable user-facing features and reusable libraries",
      "Led full-cycle development and cross-functional collaboration",
      "Executed rigorous debugging and optimization practices",
    ],
    technologies: ["Android", "Java", "Kotlin", "Performance Optimization"],
  },
  {
    id: 5,
    role: "Software Test Engineer",
    company: "TecFinics Pvt Ltd",
    location: "Hyderabad, India",
    period: "April 2020 – August 2021",
    description: [
      "Delivered responsive and user-centric interfaces",
      "Enhanced app performance through modernization efforts",
      "Led production stability efforts by resolving bugs",
    ],
    technologies: ["Testing", "UI/UX", "Android"],
  },
];

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            Work Experience
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Journey
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My career progression and key accomplishments over the years.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 md:mb-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"
                whileHover={{ scale: 1.5 }}
              />

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                } bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  {exp.company} • {exp.location}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start"
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
