"use client"

import { motion } from "framer-motion";

export default function Testimonials(){

    type testimonial = {
        text: string
        name: string
        role: string
    }

    const testimonials: testimonial[] = [
        { text: "PrebuiltUI helped us move faster without sacrificing design quality. The components feel production-ready.", name: "Cristofer Levin", role: "Frontend engineer"},
        { text: "The attention to detail in PrebuiltUI is impressive. Saved me hours of repetitive work and time. Highly recommended.", name: "Rohan Mehta", role: "Startup founder"},
        { text: "We were able ship faster using PrebuiltUI. The consistency across components made UI feel polished.", name: "Jason Kim", role: "Product designer"},
        { text: "PrebuiltUI feels like it was built by people who actually ship products. Components are clean and easy to use.", name: "Alex Turner", role: "Full stack developer"},
        { text: "PrebuiltUI helped us maintain design consistency across multiple projects. It's now a core part of design.", name: "Sofia Martinez", role: "UX designer"},
        { text: "Our team productivity improved noticeably after adopting PrebuiltUI. It reduced design handoff friction.", name: "Daniel Wong", role: "UI designer"}
    ];

    const rows = [
        { start: 0, end: 6, className: "animate-scroll" }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i:number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    }

    const renderCard = (testimonial:testimonial, index:number) => (
        <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true }}
            custom={index}
            className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 shrink-0 w-[350px]"
        >
            <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                    <svg key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-transparent fill-yellow-500">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                ))}
            </div>

            <p className="text-neutral-700 text-sm mb-6">{testimonial.text}</p>

            <div className="flex items-center gap-3">
                <div>
                    <p className="font-medium text-neutral-800 text-sm">{testimonial.name}</p>
                    <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
            </div>

        </motion.div>
    );

    return (
        <div id="testimonials">

            <style>
                {`
                @keyframes scrollReverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll {
                    animation: scrollReverse 15s linear infinite;
                }
                `}
            </style>

            <section className="bg-transparent py-16 px-4">

                <div className="max-w-6xl mx-auto">

                    {/* Heading animation */}
                    <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6}}
                        viewport={{once:true}}
                        className="text-center mb-8"
                    >
                        <div className="inline-block bg-neutral-100 border-2 border-neutral-400 rounded-full px-4 py-1 mb-3">
                            <span className="text-xs text-neutral-600">Loved by clients</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">
                            Hear it from our clients
                        </h2>

                        <p className="text-gray-800 text-sm max-w-96 mx-auto">
                            Real feedback from founders, developers and teams building production-ready products.
                        </p>
                    </motion.div>

                    <div className="space-y-6">

                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative overflow-hidden">

                                <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-black/70 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-black/70 to-transparent z-10 pointer-events-none"></div>

                                <div className={`flex gap-6 ${row.className}`}>
                                    {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)]
                                        .map((testimonial, index) =>
                                            renderCard(testimonial, index)
                                        )}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>
        </div>
    )
}