"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface QAProps {
  question: string
  answer: string
}

const QA: QAProps[] = [
  {
    question: "How is this different from a ClickHouse® SaaS provider?",
    answer: 'SaaS platforms often use proprietary forks and charge a massive premium. We manage 100% Open-Source ClickHouse® on your infrastructure (Cloud, On-Prem, or K8s). You keep data sovereignty and avoid the "Enterprise" tax.'
  },
  {
    question: `What does "Total Ownership" actually mean? We aren't consultants who just send PDFs.`,
    answer: "We are your DBAs. We design the schema, build the Airflow pipelines, and take the 24/7 on-call rotation. If it breaks at 3 AM, it’s our problem, not yours."
  },
  {
    question: `Why shouldn't we just have our DevOps team handle it?`,
    answer: `ClickHouse® is easy to learn but difficult to master. Generalist DevOps teams often struggle with its specific storage engines and memory management, leading to costly outages or "slow" performance that’s actually just poor configuration.`
  },
  {
    question: "Do you support ClickHouse® on Kubernetes?",
    answer: "Yes. We specialize in Kubernetes orchestration using the ClickHouse® Operator or custom Helm charts, ensuring persistent storage and pod scaling are handled correctly for stateful workloads."
  },
  {
    question: "Can you handle our data ingestion (Airflow, Kafka)?",
    answer: "Absolutely. A database is useless without reliable pipelines. We build and maintain the end-to-end flow, from Kafka or S3 ingestion to Apache Airflow orchestration."
  },
  {
    question: 'What is the "Expertise Gap" you mention?',
    answer: `It's the distance between having a running cluster and having a reliable one. We bridge that gap by providing senior-level DBA talent that would otherwise take you 6-12 months to recruit and train.`
  },
  {
    question: "Do we lose control of our infrastructure?",
    answer: "Never. Everything runs in your environment. We have access to manage it, but you own the accounts, the hardware, and the data."
  },
  {
    question: "How do you handle security and compliance?",
    answer: "Since we operate within your environment, we adhere to your existing security protocols (VPC peering, IAM roles, etc.)."
  },
  {
    question: "What happens if we want to end the contract?",
    answer: "There is zero vendor lock-in. Because we use open-source ClickHouse®, you simply revoke our access. You are left with a healthy, optimized cluster, not a proprietary mess you can't manage."
  },
  {
    question: "Do you help with query optimization?",
    answer: `Yes. We don't just keep the lights on; we constantly audit query logs to find bottlenecks, optimize joins, and refine materialized views to keep your dashboards sub-second.`
  },
  {
    question: "Can you manage ClickHouse® on-premises?",
    answer: "Yes. We support deployments in private data centers and on bare metal. We are infrastructure-agnostic."
  },
  {
    question: "How do we get started?",
    answer: `We begin with a deep-dive audit of your current data stack. We identify the "hurdles," map out a migration or optimization roadmap, and take over the operations from there.`
  }
]

export default function Faqs(){

  const [openSection, setOpenSection] = useState<number | null>(null)

  const toggleSection = (index:number) => {
    setOpenSection(openSection === index ? null : index)
  }

  return (
    <div id="faqs" className="px-6 md:px-16 lg:px-24 xl:px-40 mb-20 flex flex-col items-center">

      {/* Heading */}
      <motion.div
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
        className="text-white space-y-6 text-center mb-14"
      >
        <p className="text-4xl md:text-5xl font-semibold max-w-xl">
          Frequently <br /> asked questions
        </p>

        <p className="text-base text-secondary max-w-md mx-auto">
          Everything you need to know about The Complete Path to clickHouse services.
        </p>
      </motion.div>

      <div className="w-full max-w-3xl">

        {QA.map((msg, index) => (

          <motion.div
            key={index}
            layout
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.4, delay:index * 0.08}}
            viewport={{once:true}}
            className={`mb-4 rounded-2xl border overflow-hidden transition-all duration-300
            ${openSection === index
              ? "border border-primary/80 bg-primary"
              : "bg-transparent border border-primary/20"
            }`}
          >

            {/* Question */}
            <div
              onClick={() => toggleSection(index)}
              className="flex items-center justify-between px-8 py-6 cursor-pointer"
            >

              <p className="text-lg md:text-xl font-semibold text-gray-200">
                {msg.question}
              </p>

              {/* Icon */}
              <motion.div
                animate={{ rotate: openSection === index ? 180 : 0 }}
                transition={{duration:0.25}}
                className="w-11 h-11 flex items-center justify-center border border-primary/20 rounded-full"
              >
                <MdOutlineKeyboardArrowDown className="text-2xl"/>
              </motion.div>

            </div>

            {/* Answer */}
            <AnimatePresence initial={false}>

              {openSection === index && (

                <motion.div
                  key="content"
                  layout
                  initial={{opacity:0, height:0}}
                  animate={{opacity:1, height:"auto"}}
                  exit={{opacity:0, height:0}}
                  transition={{duration:0.35}}
                  className="px-8 overflow-hidden"
                >

                  <div className="h-px bg-gray-700 mb-6"></div>

                  <p className="text-gray-400 text-base pb-6 leading-relaxed">
                    {msg.answer}
                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>
    </div>
  )
}