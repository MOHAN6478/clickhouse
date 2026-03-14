"use client"

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Hero() {

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto pt-25"
    >
      <motion.main
        className="flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black"
      >

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-5xl text-center mt-4 text-white leading-tight"
        >
          Your Open-Source ClickHouse® <br />
          <span className="text-primary">
            Managed by Our Experts.
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-medium text-primary mt-6"
        >
          Faster. Cheaper. Stress-free.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-center text-secondary text-md mt-4"
        >
          We bridge the expertise gap by taking full responsibility for your migration
          from costly legacy systems to high-performance ClickHouse®. From schema
          design and Airflow pipelines to 24/7/365 production support - we handle the
          hurdles, you get the results.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mt-10"
        >
          <Link
            href="#contact"
            className="bg-primary text-lg font-medium text-white hover:bg-primary/20 border hover:border-primary rounded-full px-9 h-12 m-1 flex gap-2.5 items-center transition-colors"
          >
            Talk to us
            <FaArrowRightLong />
          </Link>
        </motion.div>

      </motion.main>
    </motion.div>
  );
}