"use client"

import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
    name: string,
    email: string,
    companyName: string,
    message: string
}

export default function ContactForm() {

    const [formData, setFormData] = useState<FormProps>({
        name: '',
        email: '',
        companyName: '',
        message: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        alert("Form Submitted successfully")
    }

    const isFormVaild = formData.name && formData.email && formData.companyName && formData.message

    return (
        <div id="contact" className="mx-auto mb-20">
            <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm">
                <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
                <h1 className="text-4xl font-semibold text-white pb-4">Get in touch with us</h1>
                <p className="text-sm text-gray-500 text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
                
                <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                    <div className="w-full">
                        <label className="text-gray-300" htmlFor="name">Name</label>
                        <input id="name" name="name" value={formData.name} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                    </div>
                    <div className="w-full">
                        <label className="text-gray-300" htmlFor="email">Email</label>
                        <input id="email" name="email" value={formData.email} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                    </div>
                </div>

                <div className="w-[350px] md:w-[700px] mt-6">
                    <label className="text-gray-300" htmlFor="company">Company Name</label>
                    <input id="company" name="companyName" value={formData.companyName} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>

            
                <div className="mt-6 w-[350px] md:w-[700px]">
                    <label className="text-gray-300" htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
                </div>
            
                <button 
                    type="submit" 
                    disabled={!isFormVaild}
                    className="mt-5 bg-indigo-600 hover:bg-indigo-500 text-white h-12 w-56 px-4 rounded active:scale-95 transition">
                        Send Message
                    </button>
            </form>
        </div>      
    );
};