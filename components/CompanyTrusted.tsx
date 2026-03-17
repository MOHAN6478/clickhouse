"use client"

import { motion } from "framer-motion"

export default function CompanyTrust() {

  const companyLogos = [
    "samet.png",
    "adscore.png",
    "BareMetal.png",
    "bitrefinery.png",
    "blancobyte.png",
    "innefu.png",
    "m2.png",
    "popads.png"
  ]

  return (
    <div className="my-20 px-4 md:px-14 lg:px-24 xl:px-40">

      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex items-center gap-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-xl md:text-3xl font-semibold whitespace-nowrap"
        >
          Trusted By
        </motion.h2>

        {/* Logos */}
        <div className="overflow-hidden w-full relative select-none">

          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-black/50 to-transparent" />

          <div
            className="marquee-inner flex min-w-[200%]"
            style={{ animationDuration: "18s" }}
          >
            <div className="flex items-center">
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <motion.img
                  key={index}
                  src={`/comLogo/${logo}`}
                  alt={logo}
                  draggable={false}
                  className="h-8 md:h-10 mx-8 opacity-70 hover:opacity-100 transition"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                />
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" />

        </div>

      </div>

    </div>
  )
}