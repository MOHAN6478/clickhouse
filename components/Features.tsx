import { VscDebugStart } from "react-icons/vsc";
import Card from "./Card";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";

const info = [
  {
    icon: <IoBookOutline size={28} />,
    heading: "Too much theory, not enough practice.",
    description:
      "Hands-on lessons and real-world projects so you learn by building, not just watching.",
  },
  {
    icon: <AiOutlineGlobal size={28} />,
    heading: "I can’t find one resource that covers everything.",
    description:
      "All-in-one course—design fundamentals, responsive layouts, animations, CMS, hosting, and publishing.",
  },
  {
    icon: <CiStreamOn size={28} />,
    heading: "I don’t know where to start with Webflow.",
    description:
      "A complete step-by-step roadmap that takes you from beginner to expert in a clear path.",
  },
];

export default function Features() {
  return (
    <div id="features" className="mx-auto mb-20">

      <div className="flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-30">

        {/* Heading */}
        <div className="text-center space-y-5 max-w-3xl">
          <h1 className="text-white text-5xl">
            Why choose this webflow course?
          </h1>

          <p className="text-slate-300/90">
            Most tutorials leave gaps or overwhelm you with theory. This course
            gives you a clear path, practical projects, and job-ready skills —
            all in one place.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex max-md:flex-col items-center gap-6 py-8">
          <button className="px-12 py-4 rounded-xl bg-black text-white">
            Get instant access
          </button>

          <button className="flex items-center bg-white text-black px-12 py-4 rounded-xl gap-2">
            <VscDebugStart size={20} />
            Learn more
          </button>
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