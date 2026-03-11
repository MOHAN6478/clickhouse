"use client"

import { Variants, motion } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-14 lg:px-24 text-white mb-15"
    >
      <div className="bg-black/30 p-6 md:p-12 lg:p-20 rounded-2xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          About Us
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >

          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <img
              src="/images/Logo.png"
              alt="QuantrailData Icon"
              loading="lazy"
              className="rounded-xl shadow-2xl w-[70%] md:w-full max-w-[230px]"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            className="border border-transparent p-6 space-y-3 rounded-md bg-primary transition-all duration-300 hover:border-primary hover:bg-primary/30 hover:scale-105 hover:-translate-y-1"
          >
            <h3 className="font-bold text-xl">
              Engineers, Not Consultants
            </h3>
            <p>
              We didn’t start as a marketing agency; we started as engineers tired of seeing companies fail the "easy to learn, difficult to master" test. You don’t need a PDF of advice—you need a team that takes full ownership.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            className="border border-transparent p-6 space-y-3 rounded-md bg-primary transition-all duration-300 hover:border-primary hover:bg-primary/30 hover:scale-105 hover:-translate-y-1"
          >
            <h3 className="font-bold text-xl">
              Zero Operational Friction
            </h3>
            <p>Our mission is to make ClickHouse® the most boring part of your stack. We handle alerts, capacity planning, and query tuning so your team can focus on building products.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            className="border border-transparent p-6 space-y-3 rounded-md bg-primary transition-all duration-300 hover:border-primary hover:bg-primary/30 hover:scale-105 hover:-translate-y-1"
          >
            <h3 className="font-bold text-xl">
              The Power of Open Source
            </h3>
            <p>
              We are committed to pure open-source ClickHouse®. You get the power of a world-class OLAP engine without being locked into proprietary SaaS pricing.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}