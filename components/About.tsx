"use client"

import { Variants, motion } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="back py-20 px-6 md:px-14 lg:px-24 text-white mb-15"
    >
      <div className="bg-black/30 p-6 md:p-12 lg:p-20 rounded-2xl">

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
        >

          <motion.div
            variants={itemVariants}
            className="shrink-0 w-full md:w-2/5 flex justify-center"
          >
            <img
              src="/images/Logo.png"
              alt="QuantrailData Icon"
              loading="lazy"
              decoding="async"
              className="rounded-xl shadow-2xl w-[70%] sm:w-[60%] md:w-full max-w-[250px]"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full md:w-3/5 flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              About Us
            </h2>

            <p className="text-lg text-gray-300 text-center md:text-left leading-relaxed">
              We watched as the <span className="font-semibold text-white">AI Revolution{" "}</span>
              turned into a data-harvesting race. We saw enterprise secrets,
              medical records, and legal IP being fed into public black boxes
              for the sake of a chat interface.
            </p>

            <p className="text-lg text-gray-300 text-center md:text-left leading-relaxed">
              We built a different path.
            </p>

            <p className="text-lg text-gray-300 text-center md:text-left leading-relaxed">
              The cloud isn't the problem — data leakage is. Our team builds for
              organizations that need the power of AI but refuse the liability
              of third-party access.
            </p>

            <p className="text-lg text-gray-300 text-center md:text-left leading-relaxed">
              We provide the intelligence layer that runs on your hardware of
              choice. We don't want your data. We enable you to securely own it.
            </p>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}