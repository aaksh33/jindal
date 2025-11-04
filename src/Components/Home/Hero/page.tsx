"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/hero/solar.jpg",
            title: "Powering Tomorrow with Solar Energy",
            subtitle: "Leading India's transition to clean, sustainable solar power solutions"
        },
        {
            image: "/images/hero/air.jpg", 
            title: "Harnessing Wind for Clean Future",
            subtitle: "Advanced wind energy systems generating renewable electricity nationwide"
        },
        {
            image: "/images/hero/sustanaible.jpg",
            title: "Building Sustainable Energy Infrastructure", 
            subtitle: "Comprehensive renewable energy projects for homes, businesses and industries"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero relative mx-auto h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-green-50 to-blue-50"
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
            ))}

            {/* Eco Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-blue-900/40 to-transparent mix-blend-multiply"></div>

            {/* Decorative shapes */}
            <img src="/images/hero/pattern-2.svg" alt="pattern" className="absolute top-0 left-0 w-[240px] opacity-30" />
            <img src="/images/hero/pattern-3.svg" alt="pattern" className="absolute bottom-0 right-0 w-[240px] opacity-30" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col justify-center h-full text-white">
                <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-green-50 mb-6"
                >
                    {slides[currentSlide].title}
                </motion.h2>
                <motion.p 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed"
                >
                    {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        href="/contact"
                        className="flex items-center gap-3 bg-teal-800 hover:bg-teal-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg  transition-all duration-300 group w-fit"
                    >
                        Get Started Now
                        <Icon icon="tabler:arrow-right" width="24" height="24" className="bg-white text-green-700 rounded-full p-1 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-green-500/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 z-30 cursor-pointer"
            >
                <Icon icon="tabler:chevron-left" width="28" height="28" className="text-white" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-green-500/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 z-30 cursor-pointer"
            >
                <Icon icon="tabler:chevron-right" width="28" height="28" className="text-white" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-green-400 scale-125' : 'bg-white/60 hover:bg-green-200'
                        }`}
                    ></button>
                ))}
            </div>

            {/* Stats Box */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute lg:bottom-8 lg:right-8 bottom-4 right-4 bg-white/15 backdrop-blur-lg p-6 rounded-2xl max-w-sm z-20 border border-white/20 shadow-lg"
            >
                <Icon icon="tabler:leaf" width="60" height="60" className='text-green-400'/>
                <p className="text-white mt-3 mb-6 text-base">
                    Committed to powering India&apos;s sustainable growth through advanced clean energy technologies.
                </p>
                <div className="text-6xl font-bold text-green-300 font-unbounded">
                    <span>500</span><span className="text-green-400">MW</span>+
                </div>
                <p className="text-white/80 text-sm mt-2">Clean Energy Generated</p>
            </motion.div>

            {/* Soft glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-green-400 opacity-20 blur-[100px] -left-[80px] -bottom-[80px]"></div>
        </motion.div>
    )
}

export default Hero;
