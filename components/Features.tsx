import { TbDatabaseCog } from "react-icons/tb";
import Card from "./Card";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiCpu } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";


const info = [
  {
    icon: <TbDatabaseCog size={28} />,
    heading: 'The "Mastery" Gap',
    description: "ClickHouse® is easy to start but notoriously difficult to master. A basic setup is simple; a production-grade, petabyte-scale implementation is not. We provide the senior DBA expertise required to prevent the costly architectural mistakes that usually surface only after it’s too late.",
  },
  {
    icon: <AiOutlineCloudServer size={28} />,
    heading: "Any Cloud. Any Infrastructure. Kubernetes Included.",
    description:  "Whether you are running on Public Cloud (AWS, GCP, Azure), Private Cloud, Bare Metal, or Kubernetes, we have the expertise to manage it. We optimize ClickHouse® for your specific environment, ensuring you get maximum performance out of your existing hardware or cloud spend.",
  },
  {
    icon: <FiCpu size={28} />,
    heading: "Reclaim Your Engineering Time",
    description: "Managing ClickHouse® shouldn't be your team's full-time job. Routine maintenance, cluster scaling, and query tuning can drain your engineering resources and stall your roadmap. We take full responsibility for the infrastructure - including Kubernetes orchestration - so your developers can focus on building products."
  },
  {
    icon: <MdOutlineSupportAgent size={28} />,
    heading: "Total Operational Ownership",
    description: "We don’t just consult; we execute. From capacity planning and schema design to Airflow pipelines and 24/7/365 support, we own the results. We handle the hurdles; you get sub-second queries at petabyte scale. Data doesn't sleep, and neither do we."
  }
];

export default function Features() {
  return (
    <div id="features" className="mx-auto mb-20">

      <div className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-30">

        {/* Heading */}
        <div className="text-center space-y-5 max-w-3xl">
          <h1 className="text-white text-5xl">
            Why Choose us?
          </h1>

          <p className="text-secondary text-base">
            We Bridge the Expertise Gap
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 pt-8 w-full">

          {info.map((item, index) => (
            <Card
              key={index}
              index={index}
              icon={item.icon}
              heading={item.heading}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </div>
  );
}