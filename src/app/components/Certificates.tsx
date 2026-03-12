"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certificates = [
  {
    id: 1,
    title: "Android App Development",
    organization: "Broadway Infosys Nepal",
    date: "2018",
    description: "Comprehensive training in Android application development using Java and modern Android SDK.",
    icon: "📱",
  },
];

export default function Certificates() {
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

  return (
    <section id="certificates" className="py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            Certifications
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Certifications
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Credentials that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {cert.organization}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {cert.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
