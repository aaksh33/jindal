"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";

export default function ServiceDetails() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/services", text: "Services" },
        { href: "/service-details", text: "Service Details" },
    ];

    const serviceQA = [
        {
            question: "What types of solar panels do you install?",
            answer: "We install high-efficiency monocrystalline and polycrystalline solar panels from leading manufacturers, ensuring maximum energy output and 25-year performance warranties."
        },
        {
            question: "How long does solar installation typically take?",
            answer: "Residential installations typically take 1-3 days, while commercial projects may take 1-4 weeks depending on system size. We provide detailed project timelines during site assessment."
        },
        {
            question: "Do you provide ongoing maintenance and monitoring?",
            answer: "Yes, we offer comprehensive maintenance packages including system monitoring, cleaning, performance optimization, and 24/7 technical support to ensure maximum efficiency."
        },
        {
            question: "Can solar panels work with my existing electrical system?",
            answer: "Absolutely! Our certified electricians ensure seamless integration with your existing electrical infrastructure while meeting all safety codes and grid connection requirements."
        },
        {
            question: "What financing options are available?",
            answer: "We offer various financing options including solar loans, leasing programs, power purchase agreements (PPAs), and help you access government subsidies and tax incentives."
        }
    ];

    const moreServices = [
        {
            title: "Wind Energy Systems",
            description: "High-efficiency wind turbines for clean energy",
            icon: "tabler:wind"
        },
        {
            title: "Energy Storage Solutions", 
            description: "Battery systems for 24/7 power availability",
            icon: "tabler:battery"
        },
        {
            title: "Grid Integration",
            description: "Smart grid solutions and power distribution",
            icon: "tabler:network"
        },
        {
            title: "Green Energy Consulting",
            description: "Expert consultation on renewable projects",
            icon: "tabler:leaf"
        }
    ];

    return (
        <>
            <HeroSub title="Service Details" description="" breadcrumbLinks={breadcrumbLinks} />
            
            {/* Header Section - Full Width Banner */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                        Our Service
                    </span>
                    <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                        Solar Power Solutions
                    </h1>
                    <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Comprehensive solar energy solutions designed to provide clean, sustainable power for your home or business needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex text-white bg-prim hover:bg-prim/90 h-[60px] text-lg rounded-full font-chakrapetch font-semibold gap-3 px-8 py-3 justify-center items-center tracking-wider group mt-8 transition-all duration-300"
                    >
                        Get Quote
                        <Icon
                            icon="tabler:arrow-right"
                            width="24"
                            height="24"
                            className="bg-white text-prim rounded-full h-10 w-10 p-2 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </Link>
                </div>
            </div>

            {/* Service Details Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Side - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Main Service Image */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <Image 
                                    src="/images/services/service-01.webp" 
                                    alt="Main Service Image" 
                                    width={800} 
                                    height={500} 
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            
                            {/* Solar Installation Process */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    Solar Installation Process
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our solar installation process is designed to be seamless and efficient. We begin with a comprehensive site assessment to determine the optimal solar solution for your property, considering factors like roof condition, orientation, shading, and energy consumption patterns.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    From design and permitting to installation and grid connection, our certified technicians handle every aspect of your solar project. We use only premium components and follow industry best practices to ensure maximum system performance and longevity.
                                </p>
                            </div>
                            
                            {/* Two Small Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <Image 
                                        src="/images/services/service-02.webp" 
                                        alt="Service Image 2" 
                                        width={400} 
                                        height={250} 
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <Image 
                                        src="/images/services/service-03.webp" 
                                        alt="Service Image 3" 
                                        width={400} 
                                        height={250} 
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            
                            {/* Our Solar Energy Services */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    Our Solar Energy Services
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We provide end-to-end solar energy solutions designed to help you achieve energy independence and reduce your carbon footprint. Our experienced team handles everything from initial consultation to system commissioning and ongoing support.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    From residential rooftop installations to large-scale commercial solar farms, we&apos;re committed to delivering high-quality solar solutions that maximize your energy savings and environmental impact.
                                </p>

                                {/* Q&A Section */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">
                                    Frequently Asked Questions
                                </h3>
                                <div className="space-y-3">
                                    {serviceQA.map((qa, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
                                            >
                                                <h4 className="font-semibold text-gray-800 pr-4 text-sm">{qa.question}</h4>
                                                <Icon
                                                    icon={openIndex === index ? "tabler:chevron-up" : "tabler:chevron-down"}
                                                    className="text-prim text-lg transition-transform flex-shrink-0"
                                                />
                                            </button>
                                            {openIndex === index && (
                                                <div className="px-4 pb-3">
                                                    <p className="text-gray-600 leading-relaxed text-sm">{qa.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Sticky Sidebar */}
                        <div className="lg:sticky lg:top-8 lg:h-fit space-y-8">
                            {/* More Services Section */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    More Services
                                </h3>
                                <div className="space-y-4">
                                    {moreServices.map((service, index) => (
                                        <Link
                                            key={index}
                                            href="/services"
                                            className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-prim hover:bg-prim/5 transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 bg-prim/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-prim transition-colors duration-300">
                                                <Icon 
                                                    icon={service.icon} 
                                                    width="20" 
                                                    height="20" 
                                                    className="text-prim group-hover:text-white transition-colors duration-300" 
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800 group-hover:text-prim transition-colors duration-300 text-sm">
                                                    {service.title}
                                                </h4>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    {service.description}
                                                </p>
                                            </div>
                                            <Icon 
                                                icon="tabler:arrow-right" 
                                                width="16" 
                                                height="16" 
                                                className="text-gray-400 group-hover:text-prim group-hover:translate-x-1 transition-all duration-300" 
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Tags Section */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    Service Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Solar Panels", "Installation", "Maintenance", "Grid-Tied", "Off-Grid", "Monitoring", "Warranty", "Financing"].map((tag, i) => (
                                        <span key={i} className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
