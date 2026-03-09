"use client"

import { IoBookOutline } from "react-icons/io5";
import Card from "./Card";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import { motion } from "framer-motion";

const serInfo = [
  {
    icon: <IoBookOutline size={28} />,
    heading: "Managed Services",
    description:"Comprehensive care for your open-source databases: installation, optimization, security, and 24/7 support. Focus on your business while we keep your databases running smoothly."
  },
  {
    icon: <AiOutlineGlobal size={28} />,
    heading: "Performance & Security Audit",
    description: "Identify bottlenecks like slow queries and inefficient indexing, and secure your databases with proactive audits to safeguard valuable data.",
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Consulting Services",
    description: "Strategic guidance to optimize performance, security, and scalability, with actionable recommendations tailored to your database needs.",
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Remote DBA",
    description:"24/7 expert monitoring, support, and maintenance without hiring full-time staff, ensuring database availability and optimization." ,
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Cloud Cost Optimisation",
    description: "Reduce cloud costs while enhancing performance with tailored strategies to optimize your cloud infrastructure.",
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Database Proxies",
    description: "Improve scalability and reliability with managed proxies like Maxscale and ProxySQL for load balancing and enhanced database performance.",
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Database Support Services",
    description: "Proactive database support, including hotfixes, troubleshooting, performance tuning, and critical patching with defined SLA response times.",
  },
];


export default function Services(){
    return(
        <section id="services" className="mx-auto mb-20">
            <div className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-30 space-y-20">

                {/* Heading */}
                <div className="text-center space-y-5 max-w-3xl">
                    <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-white text-5xl">
                       Services We Provide
                    </motion.h1>

                    <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-slate-300/90">
                        Take control and optimize your open-source database environment with Mydbops. We are a team of expert database administrators passionate about helping businesses.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="bg-black/30 p-3 rounded-md pb-10">

                
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 w-full px-5">
                    
                        {serInfo.map((item, index) => (
                            <Card
                                key={index}
                                index={index}
                                icon={item.icon}
                                heading={item.heading}
                                description={item.description}
                            />
                        ))}
                    
                    </motion.div>
                </div>

            </div>
        </section>
    )
}