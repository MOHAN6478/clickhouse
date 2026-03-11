"use client"

import Card from "./Card";
import { motion } from "framer-motion";

const serInfo = [
  {
    heading: "Infrastructure & Deployment",
    description: [
      {
        title: "Anywhere Implementation",
        text: `We deploy and manage ClickHouse® on Public Cloud (AWS, GCP, Azure), Private Cloud, Bare Metal, or Kubernetes. We handle the orchestration so you don’t have to.`
      },
      {
        title: "Capacity Planning",
        text: `Precision hardware sizing and cluster architecture. We ensure your infrastructure is built to scale without overprovisioning or wasting budget.`
      }
    ]
  },
  {
    heading: "Architecture & Data Engineering",
    description: [
      {
        title: "Schema Design & Modeling",
        text: `ClickHouse® is only as fast as its schema. We design custom table structures and select the right engines to ensure sub-second query performance at any scale.`
      },
      {
        title: "Data Pipelines (Apache Airflow)",
        text: 'We build and manage robust ETL/ELT pipelines. Using Airflow, we ensure your data ingestion is reliable, automated, and perfectly synced with your ClickHouse® cluster.'
      }
    ]
  },
  {
    heading: "Optimization & Migration",
    description: [
      {
        title: "Performance Tuning",
        text: "We dive into your query logs to eliminate bottlenecks. From optimizing joins to fine-tuning settings, we squeeze every drop of performance out of your environment."
      },
      {
        title: "Legacy Migrations",
        text: "Moving from a costly, slow OLAP system? We manage the entire transition - data mapping, validation, and cutover - with zero data loss and minimal downtime."
      }
    ]
  },
  {
    heading: "Managed Operations",
    description: [
      {
        title: "24/7/365 Production Support",
        text: "We are your dedicated on-call team. We provide around-the-clock monitoring and incident response. If a node goes down or a query lags at 3 AM, we solve it."
      },
      {
        title: "Support & Maintenance Contracts",
        text: "Long-term peace of mind through dedicated SLAs. We handle the upgrades, patches, and scaling as your data footprint grows, acting as your in-house DBA team."
      }
    ]
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

                
                    <motion.div className="grid grid-cols-1 md:grid-cols-2  gap-8 pt-8 w-full px-5">
                    
                        {serInfo.map((item, index) => (
                            <Card
                                key={index}
                                index={index}
                                icon={null}
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