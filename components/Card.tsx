"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  index: number
  icon: ReactNode
  heading: string
  description: string
}

export default function Card({ icon, heading, description, index }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 text-white shadow-xl h-full transition-transform duration-300"
    >

      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/20 mb-8">
        {icon}
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold leading-tight mb-4">
        {heading}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-lg leading-relaxed">
        {description}
      </p>

    </motion.div>
  );
}