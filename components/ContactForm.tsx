"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FormProps {
    name: string,
    email: string,
    companyName: string,
    Infrastructure: string,
    Primarypoint: string,
    Datavolume: string
    message: string
}

export default function ContactForm() {

    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    
    const [formData, setFormData] = useState<FormProps>({
        name: '',
        email: '',
        companyName: '',
        Infrastructure: '',
        Primarypoint: '',
        Datavolume: '',
        message: ''
    })

    const handleDropdownSelect = (field: keyof FormProps, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setActiveDropdown(null);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        alert("Form Submitted successfully")
    }

    const isFormVaild = formData.name && formData.email && formData.companyName && formData.message && formData.Infrastructure && formData.Primarypoint && formData.Datavolume

    return (
        <div id="contact" className="mx-auto mb-20">
            <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm px-4 md:px-16 lg:px-24 xl:px-30">
                <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
                <h1 className="text-4xl font-semibold text-white pb-4">Get in touch with us</h1>
                <p className="text-sm text-gray-500 text-center pb-10">Stop burning engineering hours on infrastructure. <br /> Tell us where you are in your journey, and our experts will reach out to discuss a management roadmap.</p>
                
                <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-[700px]">
                    {/* Name  */}
                    <div className="w-full">
                        <label className="text-white font-bold" htmlFor="name">Name</label>
                        <input id="name" name="name" value={formData.name} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-primary/50 rounded outline-none" type="text" required />
                    </div>
                    {/* Email  */}
                    <div className="w-full">
                        <label className="text-white font-bold" htmlFor="email">Email</label>
                        <input id="email" name="email" value={formData.email} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-primary/50 rounded outline-none" type="email" required />
                    </div>
                </div>

                <div className="w-full max-w-[700px] mt-6">
                    <label className="text-white font-bold" htmlFor="company">Company Name</label>
                    <input id="company" name="companyName" value={formData.companyName} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-primary/50 rounded outline-none" type="text" required />
                </div>


                <div className="relative w-full max-w-[700px] mt-6 z-20">
                    <p className="font-bold pb-2">Current Infrastructure</p>
                    <div
                        className="flex justify-between items-center cursor-pointer border border-primary/50 rounded p-4 bg-transparent"
                        onClick={() => setActiveDropdown(activeDropdown === 1 ? null : 1)}
                    >
                        {formData.Infrastructure || "Select Type"}
                        <IoIosArrowDown className={`transition ${activeDropdown === 1 ? "rotate-180" : ""}`} />
                    </div>
                    {activeDropdown === 1 && (
                        <div className="absolute w-full mt-2 bg-[#120d28] border border-primary rounded-lg shadow-xl overflow-hidden">
                            {[
                            "Public Cloud",
                            "On-Prem/Bare Metal",
                            "Kubernetes",
                            "Private Cloud"
                            ].map((type) => (
                            <p
                                key={type}
                                className="p-4 border border-white/30 last:border-none hover:bg-primary hover:bg-opacity-20  hover:text-white cursor-pointer transition-colors"
                                onClick={() => handleDropdownSelect("Infrastructure", type)}
                            >
                                {type}
                            </p>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative w-full max-w-[700px] mt-6 z-10">
                    <p className="font-bold pb-2">Primary Pain Point</p>
                    <div
                        className="flex justify-between items-center cursor-pointer border border-primary/50 rounded p-4 bg-transparent"
                        onClick={() => setActiveDropdown(activeDropdown === 2 ? null : 2)}
                    >
                        {formData.Primarypoint || "Select Type"}
                        <IoIosArrowDown className={`transition ${activeDropdown === 2 ? "rotate-180" : ""}`} />
                    </div>
                    {activeDropdown === 2 && (
                        <div className="absolute w-full mt-2 bg-[#120d28] border border-primary rounded-lg shadow-xl overflow-hidden">
                            {[
                            "High Costs",
                            "Slow Performance",
                            "Expertise Gap",
                            "24/7 Support Needs"
                            ].map((type) => (
                            <p
                                key={type}
                                className="p-4 border border-white/10 last:border-none hover:bg-primary hover:bg-opacity-20  hover:text-white cursor-pointer transition-colors"
                                onClick={() => handleDropdownSelect("Primarypoint", type)}
                            >
                                {type}
                            </p>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative w-full max-w-[700px] mt-6">
                    <p className="font-bold pb-2">Estimated Data Volume</p>
                    <div
                        className="flex justify-between items-center cursor-pointer border border-primary/50 rounded p-4 bg-transparent"
                        onClick={() => setActiveDropdown(activeDropdown === 3 ? null : 3)}
                    >
                        {formData.Datavolume || "Select Type"}
                        <IoIosArrowDown className={`transition ${activeDropdown === 3 ? "rotate-180" : ""}`} />
                    </div>
                    {activeDropdown === 3 && (
                        <div className="absolute w-full mt-2 bg-[#120d28] border border-primary rounded-lg shadow-xl overflow-hidden">
                            {[
                            "<10TB",
                            "10TB–100TB",
                            "100TB–1PB",
                            "1PB+"
                            ].map((type) => (
                            <p
                                key={type}
                                className="p-4 border border-white/30 last:border-none hover:bg-primary hover:bg-opacity-20 hover:text-white cursor-pointer transition-colors"
                                onClick={() => handleDropdownSelect("Datavolume", type)}
                            >
                                {type}
                            </p>
                            ))}
                        </div>
                    )}
                </div>

            
                <div className="mt-6 w-full max-w-[700px]">
                    <label className="text-white font-bold" htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your current legacy system or ClickHouse® hurdle" value={formData.message} onChange={handleChange} rows={5} className="w-full mt-2 p-2 h-40 border border-primary/50 rounded resize-none outline-none placeholder-secondary" required></textarea>
                </div>
            
                <button 
                    type="submit" 
                    disabled={!isFormVaild}
                    className="mt-5 bg-primary hover:bg-indigo-500 text-white h-12 px-4 rounded active:scale-95 transition w-full max-w-[700px] text-lg font-medium">
                        Get My Free Infrastructure Audit
                    </button>
            </form>
        </div>      
    );
};