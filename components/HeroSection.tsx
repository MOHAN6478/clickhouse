"use client"

import Link from "next/link";
import { motion } from "framer-motion";

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
                <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-5xl md:text-8xl font-semibold max-w-5xl text-center mt-4">
                    Master practical skills with<span className="bg-clip-text  text-white text-nowrap"> hands-on lessons <br /> and real projects.</span>
                </motion.h1>

                <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="max-w-lg text-center text-white text-md my-7">Start your design career with hands-on training and expert mentors.</motion.p>

                {/* CTA Buttons */}
                <motion.div initial={{ y:50, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ duration: 1, delay: 0.8 }} className="flex items-center gap-4 ">
                    <Link href='#contact' className="bg-black text-white hover:bg-white hover:text-black rounded-full px-9 h-12 m-1 ring-2 ring-white hover:ring-black flex items-center transition-colors">
                        Talk to us
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </motion.div>

            </motion.main>
        </motion.div>
    )
}