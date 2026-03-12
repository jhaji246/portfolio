"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Android (Kotlin/Java)", level: 95 },
      { name: "Flutter/Dart", level: 90 },
      { name: "Jetpack Compose", level: 90 },
      { name: "MVVM Architecture", level: 95 },
      { name: "Clean Architecture", level: 90 },
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "WebSocket/WebRTC", level: 80 },
      { name: "Firebase", level: 90 },
      { name: "Ktor", level: 85 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD (Jenkins/GitHub Actions)", level: 85 },
      { name: "BLE Integration", level: 90 },
      { name: "AI/ML Integration", level: 80 },
      { name: "Testing (JUnit/MockK)", level: 85 },
    ],
  },
];

const technologies = [
  "Kotlin",
  "Java",
  "Flutter",
  "Dart",
  "Android SDK",
  "Jetpack Compose",
  "MVVM",
  "BLoC",
  "Dagger Hilt",
  "Koin",
  "Coroutines",
  "RxJava",
  "Room",
  "Retrofit",
  "Firebase",
  "GraphQL",
  "WebSocket",
  "BLE",
  "Git",
  "Jenkins",
  "JUnit",
  "MockK",
  "Wear OS",
  "AOSP",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    }),
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            Expertise
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools. Here's a
            snapshot of my technical expertise.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h4>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Cloud */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.4,
                  ease: "backOut",
                }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
