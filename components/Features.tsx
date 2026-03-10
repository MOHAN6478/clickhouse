import Card from "./Card";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";

const info = [
  {
    icon: <IoBookOutline size={28} />,
    heading: 'The "Mastery" Gap',
    description: "ClickHouse® is easy to start but notoriously difficult to master. A basic setup is simple; a production-grade, petabyte-scale implementation is not. We provide the senior DBA expertise required to prevent the costly architectural mistakes that usually surface only after it’s too late.",
  },
  {
    icon: <AiOutlineGlobal size={28} />,
    heading: "Any Cloud. Any Infrastructure. Kubernetes Included.",
    description:  "Whether you are running on Public Cloud (AWS, GCP, Azure), Private Cloud, Bare Metal, or Kubernetes, we have the expertise to manage it. We optimize ClickHouse® for your specific environment, ensuring you get maximum performance out of your existing hardware or cloud spend.",
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Reclaim Your Engineering Time",
    description: "Managing ClickHouse® shouldn't be your team's full-time job. Routine maintenance, cluster scaling, and query tuning can drain your engineering resources and stall your roadmap. We take full responsibility for the infrastructure - including Kubernetes orchestration - so your developers can focus on building products."
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "Total Operational Ownership",
    description: `We don't just consult; we execute and own the results. From initial capacity planning and schema design to managing complex Apache Airflow pipelines and 24/7/365 on-call support, we handle the entire lifecycle. We take the "headache" out of open-source ClickHouse®, providing the speed you need without the overhead. Data doesn't sleep, and neither do we. Our team provides around-the-clock monitoring and post-production support contracts, ensuring your sub-second queries stay sub-second - even at petabyte scale.`
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 w-full">

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