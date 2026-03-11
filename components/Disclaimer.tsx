"use client"

import { motion, Variants } from "framer-motion";

const DescInfo = [
  {
    title: "Trademarks & Affiliation",
    description:
      "ClickHouse® is a registered trademark of ClickHouse®, Inc. Our services are independent and are not affiliated with, sponsored by, or endorsed by ClickHouse®, Inc. We provide expert management and support services for the Open-Source version of ClickHouse®.",
  },
  {
    title: "Operational Scope",
    description:
      "While we take full responsibility for the management, monitoring, and optimization of your infrastructure as outlined in our service agreements, we do not own the underlying third-party software (ClickHouse®, Kubernetes, Apache Airflow, etc.). Use of these tools is subject to their respective open-source licenses.",
  },
  {
    title: "Data Ownership & Access",
    description:
      "We act as a service provider operating within your environment. You maintain 100% ownership of your data and infrastructure at all times. Our access is strictly limited to what is required for maintenance, support, and performance tuning as authorized by your internal security protocols.",
  },
  {
    title: "Performance & Results",
    description:
      'Faster, cheaper, and stress-free outcomes are based on our track record of optimizing open-source environments. Actual performance gains and cost savings are dependent on your specific hardware, data structures, and query patterns.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Disclaimer() {
  return (
    <div className="mb-20 mx-auto">
      <div className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 space-y-12">
        
        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-5xl font-bold text-center"
        >
          Disclaimer
        </motion.h1>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 w-full max-w-6xl"
        >
          {DescInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="border border-primary/30 rounded-xl p-6 bg-transparent transition-all"
            >
              <h2 className="text-white text-xl font-semibold text-center mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}