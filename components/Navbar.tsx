"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  // Hide navbar on scroll down (mobile)
  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [lastScrollY])

  return (
    <>
    
      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 xl:px-40 backdrop-blur-md"
      >

        {/* Logo */}
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth"})
          }} 
          className=" flex items-center gap-2"
        >
          <Image src="https://quantrail-data.com/wp-content/uploads/2025/06/Quantrail-Logo-Site.png" alt="ClickHouse Logo" width={40} height={40}/>
          <p className="text-xl font-semibold ">Quantrail Data</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 2xl:gap-20 text-lg text-secondary transition">

          <a href="#services" className="hover:text-white transition-colors duration-300">
            Services
          </a>

          <a href="#features" className="hover:text-white transition-colors duration-300">
            Features
          </a>

          <a href="#faqs" className="hover:text-white transition-colors duration-300">
            FAQs
          </a>

          <a href="#about" className="hover:text-white transition-colors duration-300">
            About us
          </a>

          <a href="https://quantrail-data.com/blog" className="hover:text-white transition-colors duration-300">
            Blog
          </a>

        </div>

        {/* Desktop Button */}
        <Link
          href="#contact"
          className="hidden md:block px-6 py-2 bg-primary font-medium rounded-full text-white hover:bg-primary/20 border border-transparent hover:border-primary transition active:scale-95"
        >
          Get Started
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
        >
          {isMenuOpen ? <IoClose size={34}/> : <IoMenu size={34}/>}
        </button>

      </motion.nav>


      {/* Mobile Menu */}
      <AnimatePresence>

        {isMenuOpen && (

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-xl font-medium text-secondary backdrop-blur-xl md:hidden"
          >

            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">
              Services
            </a>

            <a href="#features" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">
              Features
            </a>

            <a href="#faqs" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">
              FAQs
            </a>

            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">
              About us
            </a>

            <a href="https://quantrail-data.com/blog" className="hover:text-white transition-colors duration-300">
              Blog
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  )
}