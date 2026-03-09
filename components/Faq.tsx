"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface QAProps {
  question: string
  answer: string
}

const QA: QAProps[] = [
  {
    question: "Do I need prior experience with webflow?",
    answer: "No, This course is designed for beginners and advanced users alike."
  },
  {
    question: "Which Webflow plan do i need?",
    answer: "Webflow offers a free plan that many students use during the course."
  },
  {
    question: "How long do i have access to the course",
    answer: "Lifetime access - watch anytime, revisit anytime, with free updates."
  },
  {
    question: "Is mentoring included?",
    answer: "Yes.Depending on your chosen plan, you get 2-12 months of mentoring."
  },
  {
    question: "Do i get a certificate?",
    answer: "Yes. Completion of the course earns you a Leadclass certification."
  },
  {
    question: "Can i pay in installments?",
    answer: "Absolutely. Basic and Pro plans offer 3 easy monthly payments."
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

        <p className="text-base text-gray-400 max-w-md mx-auto">
          Everything you need to know about The Complete Path to Webflow Mastery.
        </p>
      </motion.div>

      <div className="w-full max-w-3xl">

        {QA.map((msg, index) => (

          <motion.div
            key={index}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.4, delay:index * 0.1}}
            viewport={{once:true}}
            className={`mb-4 rounded-2xl border overflow-hidden transition-all duration-300 
            ${openSection === index
              ? "border-purple-500/60 bg-purple-950/90"
              : "bg-gradient-to-br from-[#0f0f1a] to-[#14142a]"
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
                transition={{duration:0.3}}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-500"
              >
                <Image
                  src="/dropdown_icon.svg"
                  alt="dropdown icon"
                  width={18}
                  height={18}
                />
              </motion.div>

            </div>

            {/* Answer */}
            <AnimatePresence>

              {openSection === index && (

                <motion.div
                  initial={{height:0, opacity:0}}
                  animate={{height:"auto", opacity:1}}
                  exit={{height:0, opacity:0}}
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