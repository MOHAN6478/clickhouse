"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DescriptionItem {
  title: string
  text: string
}

interface Props {
  index: number
  icon?: ReactNode
  heading: string
  description: string | DescriptionItem[]
}

export default function Card({ icon, heading, description, index }: Props) {

  const isArray = Array.isArray(description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-primary rounded-2xl p-8 group text-white shadow-xl h-full border border-transparent transition-all duration-300 hover:border-primary hover:bg-primary/30 hover:scale-105"
    >

      {/* Icon */}
      {icon && (
        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white mb-6 transition-all duration-300 group-hover:bg-primary group-hover:border-transparent">
          {icon}
        </div>
      )}

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">
        {heading}
      </h2>

      {/* Description */}
      {isArray ? (
        <div className="space-y-4">
          {description.map((item, i) => (
            <div key={i}>
              <h4 className="font-semibold">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-base leading-relaxed">
          {description}
        </p>
      )}

    </motion.div>
  );
}