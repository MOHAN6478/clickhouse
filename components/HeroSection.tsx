"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {

    return (
        <motion.div 
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition = {{ duration: 0.8 }}
            className="mx-auto pt-25"
        >
            <motion.main initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}  className=" flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">

                {/* Headline + CTA */}
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-5xl text-center mt-4 text-white leading-tight"
                >
                    Your Open-Source ClickHouse® <br />
                    <span className="text-primary">Managed by Our Experts.</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl font-medium text-primary mt-6"
                >
                    Faster. Cheaper. Stress-free.
                </motion.p>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-2xl text-center text-secondary text-md mt-4"
                >
                    We bridge the expertise gap by taking full responsibility for your migration
                    from costly legacy systems to high-performance ClickHouse®. From schema
                    design and Airflow pipelines to 24/7/365 production support — we handle the
                    hurdles, you get the results.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div initial={{ y:50, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: 0.8 }} className="flex items-center gap-4 mt-10">
                    <Link href='#contact' className="bg-primary text-lg font-medium text-white hover:bg-primary/20 border hover:border-primary rounded-full px-9 h-12 m-1 flex gap-2.5 items-center transition-colors">
                        Talk to us
                        <FaArrowRightLong />
                    </Link>
                </motion.div>

            </motion.main>
        </motion.div>
    )
}