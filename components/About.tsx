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
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-30"
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
              className="rounded-xl shadow-2xl w-[70%] sm:w-[60%] md:w-full max-w-[450px]"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full md:w-4/5 flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              About Us
            </h2>

            <div className="border border-primary/30 p-6 space-y-3 rounded-md bg-primary/10">
              <h1 className="font-bold text-xl">We are DBAs, Not Just Consultants.</h1>
              <p>We didn’t start as a marketing agency; we started as engineers who saw companies struggling with the "easy to learn, difficult to master" reality of ClickHouse®. We realized that most organizations don't need another PDF of advice—they need a dedicated team to take full ownership of their data infrastructure.</p>
            </div>

            <div className="border border-primary/30 p-6 space-y-3 rounded-md bg-primary/10">
              <h1 className="font-bold text-xl">Bridging the Expertise Gap</h1>
              <p>The hardest part of moving to ClickHouse® isn't the data; it's finding the people who know how to run it at scale. We bridge that gap. We provide the senior-level DBA expertise required to manage petabyte-scale clusters, complex Kubernetes orchestrations, and mission-critical Airflow pipelines.</p>
            </div>

            <div className="border border-primary/30 p-6 space-y-3 rounded-md bg-primary/10">
              <h1 className="font-bold text-xl">Our Mission: Zero Operational Friction</h1>
              <p>Our goal is to make Open-Source ClickHouse® the most boring part of your stack. We handle the 3 AM alerts, the capacity planning, and the query tuning so your engineering team can stop fighting the database and start building the product.</p>
            </div>

            <div className="border border-primary/30 p-6 space-y-3 rounded-md bg-primary/10">
              <h1 className="font-bold text-xl">Why We Believe in Open Source</h1>
              <p>We are committed to the pure, open-source version of ClickHouse®. We believe you should have the power of a world-class OLAP engine without being held hostage by proprietary forks or predatory SaaS pricing. We give you the expertise of a managed service with the freedom of your own infrastructure.</p>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}