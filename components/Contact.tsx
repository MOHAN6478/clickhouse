"use client";

import { ChangeEvent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, Variants } from "framer-motion";

interface FormProps {
  name: string;
  email: string;
  companyName: string;
  Infrastructure: string;
  Primarypoint: string;
  Datavolume: string;
  message: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export default function ContactForm() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [ loading, setLoading ] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    companyName: "",
    Infrastructure: "",
    Primarypoint: "",
    Datavolume: "",
    message: ""
  });

  const handleDropdownSelect = (field: keyof FormProps, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setActiveDropdown(null);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      companyName: formData.companyName.trim(),
      Infrastructure: formData.Infrastructure,
      Primarypoint: formData.Primarypoint,
      Datavolume: formData.Datavolume,
      message: formData.message.trim()
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(trimmedData)
      });

      const data = await response.json();
 
      if(!response.ok){
        throw new Error(data.error || "Something went wrong");
      }

      alert("Message sent successfully!");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        companyName: "",
        Infrastructure: "",
        Primarypoint: "",
        Datavolume: "",
        message: ""
      })

    } catch (error: any) {
      console.error(error)
      alert( error.message || "Failed to send Message")
    } finally {
      setLoading(false)
    } 
  };

  const isFormValid =
    Boolean(
      formData.name.trim() &&
      formData.email.trim() &&
      formData.companyName.trim() &&
      formData.Infrastructure &&
      formData.Primarypoint &&
      formData.Datavolume
    ) && formData.message.trim().length >= 50;

  return (
    <div id="contact" className="mx-auto mb-20">
      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-sm px-4 md:px-16 lg:px-24 xl:px-30"
      >
        {/* Heading */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-primary font-medium pb-2"
        >
          Contact Us
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-semibold text-white pb-4 text-center"
        >
          Offload Your ClickHouse® Headaches
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-500 text-center pb-10"
        >
          Stop burning engineering hours on infrastructure. <br />
          Tell us where you are in your journey, and our experts will reach out
          to discuss a management roadmap.
        </motion.p>

        {/* Name + Email */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-8 w-full max-w-[700px]"
        >
          <div className="w-full">
            <label className="text-white font-bold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-primary/50 rounded outline-none"
              type="text"
              required
            />
          </div>

          <div className="w-full">
            <label className="text-white font-bold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 p-2 mt-2 w-full border border-primary/50 rounded outline-none"
              type="email"
              required
            />
          </div>
        </motion.div>

        {/* Company */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-[700px] mt-6"
        >
          <label className="text-white font-bold">Company Name</label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="h-12 p-2 mt-2 w-full border border-primary/50 rounded outline-none"
            type="text"
            required
          />
        </motion.div>

        {/* Infrastructure */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[700px] mt-6 z-20"
        >
          <p className="font-bold pb-2">Current Infrastructure</p>

          <div
            className="flex justify-between items-center cursor-pointer border border-primary/50 rounded p-4"
            onClick={() => setActiveDropdown(activeDropdown === 1 ? null : 1)}
          >
            {formData.Infrastructure || "Select Type"}
            <IoIosArrowDown className={`transition ${ activeDropdown === 1 ? "rotate-180" : "" }`} />
          </div>

          {activeDropdown === 1 && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              className="absolute w-full mt-2 bg-[#120d28] border border-primary rounded-lg shadow-xl overflow-hidden"
            >
              {["Public Cloud", "On-Prem/Bare Metal", "Kubernetes", "Private Cloud"].map(
                (type) => (
                  <p
                    key={type}
                    className="p-4 hover:bg-primary/20 cursor-pointer"
                    onClick={() =>
                      handleDropdownSelect("Infrastructure", type)
                    }
                  >
                    {type}
                  </p>
                )
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Pain Point */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[700px] mt-6 z-10"
        >
          <p className="font-bold pb-2">Primary Pain Point</p>

          <div
            className="flex justify-between items-center cursor-pointer border border-primary/50 rounded p-4"
            onClick={() => setActiveDropdown(activeDropdown === 2 ? null : 2)}
          >
            {formData.Primarypoint || "Select Type"}
            <IoIosArrowDown className={`transition ${ activeDropdown === 2 ? "rotate-180" : "" }`} />
          </div>

          {activeDropdown === 2 && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              className="absolute w-full mt-2 bg-[#120d28] border border-primary rounded-lg shadow-xl overflow-hidden"
            >
              {[
                "High Costs",
                "Slow Performance",
                "Expertise Gap",
                "24/7 Support Needs",
              ].map((type) => (
                <p
                  key={type}
                  className="p-4 hover:bg-primary/20 cursor-pointer"
                  onClick={() => handleDropdownSelect("Primarypoint", type)}
                >
                  {type}
                </p>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Data Volume */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[700px] mt-6"
        >
          <p className="font-bold pb-2">Estimated Data Volume</p>

          <div
            className="flex justify-between items-center cursor-pointer border border-primary/50 rounded p-4"
            onClick={() => setActiveDropdown(activeDropdown === 3 ? null : 3)}
          >
            {formData.Datavolume || "Select Type"}
            <IoIosArrowDown className={`transition ${ activeDropdown === 3 ? "rotate-180" : "" }`} />
          </div>

          {activeDropdown === 3 && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              className="absolute w-full mt-2 bg-[#120d28] border border-primary rounded-lg shadow-xl overflow-hidden"
            >
              {["<10TB", "10TB–100TB", "100TB–1PB", "1PB+"].map((type) => (
                <p
                  key={type}
                  className="p-4 hover:bg-primary/20 cursor-pointer"
                  onClick={() => handleDropdownSelect("Datavolume", type)}
                >
                  {type}
                </p>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Message */}
        <motion.div
          variants={itemVariants}
          className="mt-6 w-full max-w-[700px]"
        >
          <label className="text-white font-bold">Message <span className="text-white text-sm">( Minimum - 50 characters )</span></label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={50}
            minLength={0}
            placeholder="Tell us about your current legacy system or ClickHouse® hurdle"
            className="w-full mt-2 p-2 h-40 border border-primary/50 rounded resize-none outline-none placeholder-secondary"
            required
          />
          <p className="text-xs text-gray-400 mt-1">
            {formData.message.trim().length} / 50 characters
          </p>
        </motion.div>

        {/* Submit */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!isFormValid || loading}
          className="mt-5 bg-primary hover:bg-indigo-500 disabled:bg-primary/10 disabled:text-white/30 text-white h-12 px-4 rounded transition w-full max-w-[700px] text-lg font-medium"
        >
          {loading ? "sending..." : "Get My Free Infrastructure Audit"} 
        </motion.button>

        {/* Promises  */}
        <motion.p 
          variants={itemVariants} 
          className="font-bold pt-5 text-[16px]">Our Promise :{" "}
          <span className="font-normal">No spam. Ever. We only send technical responses from our expert team. Your inbox is for engineering, not marketing fluff.</span>
        </motion.p>

      </motion.form>
    </div>
  );
}