"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";

export default function PortfolioDetails() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
        { href: "/portfolio/portfolio-details", text: "Project Details" },
    ];

    const projectQA = [
        {
            question: "What was the main challenge in this project?",
            answer: "The main challenge was installing 250MW of solar capacity across 1,000 acres of desert terrain while ensuring grid stability and managing extreme weather conditions in Rajasthan."
        },
        {
            question: "How long did this project take to complete?",
            answer: "This massive solar installation took 18 months from initial site preparation to full commissioning, including infrastructure development, panel installation, and grid integration."
        },
        {
            question: "What technologies were used in this project?",
            answer: "We used high-efficiency monocrystalline solar panels, advanced inverters, smart monitoring systems, and robust mounting structures designed for desert conditions."
        },
        {
            question: "What were the key results achieved?",
            answer: "The project generates 500 GWh annually, powers 200,000+ homes, reduces CO2 emissions by 400,000 tons per year, and creates 500+ local jobs."
        }
    ];

    const moreProjects = [
        {
            title: "Gujarat Wind Farm - 150MW",
            description: "Coastal wind energy installation",
            icon: "tabler:wind"
        },
        {
            title: "Corporate Rooftop Solar", 
            description: "Commercial solar solutions",
            icon: "tabler:sun"
        },
        {
            title: "Rural Electrification",
            description: "Community solar microgrids",
            icon: "tabler:home"
        },
        {
            title: "Energy Storage Solutions",
            description: "Battery storage systems",
            icon: "tabler:battery"
        }
    ];

    return (
        <>
            <HeroSub title="Portfolio Details" description="" breadcrumbLinks={breadcrumbLinks} />
            
            {/* Header Section - Full Width Banner */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                        Project Details
                    </span>
                    <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                        Rajasthan Solar Park - 250MW
                    </h1>
                    <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        India&apos;s largest solar installation project featuring advanced photovoltaic technology, generating clean electricity for over 200,000 homes.
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

            {/* Portfolio Details Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Side - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Main Project Image */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <Image 
                                    src="/images/protfoliodetails/project-gallery-1.webp" 
                                    alt="Main Project Image" 
                                    width={800} 
                                    height={500} 
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            
                            {/* Project Overview and Implementation Process */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    Project Overview and Implementation Process
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The Rajasthan Solar Park represents India&apos;s commitment to renewable energy leadership. Spanning 1,000 acres in the Thar Desert, this 250MW installation showcases advanced photovoltaic technology and innovative engineering solutions designed to withstand extreme desert conditions.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The implementation process involved comprehensive site analysis, environmental impact assessment, and strategic planning phases. Our engineering team deployed state-of-the-art solar panels, inverters, and monitoring systems while ensuring minimal environmental disruption and maximum energy output efficiency.
                                </p>
                            </div>
                            
                            {/* Two Project Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <Image 
                                        src="/images/protfoliodetails/project-gallery-2.webp" 
                                        alt="Project Gallery 2" 
                                        width={400} 
                                        height={250} 
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <Image 
                                        src="/images/protfoliodetails/project-gallery-3.webp" 
                                        alt="Project Gallery 3" 
                                        width={400} 
                                        height={250} 
                                        className="w-full h-[200px] object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            
                            {/* Our Project Results and Environmental Impact */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    Our Project Results and Environmental Impact
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The successful completion of the Rajasthan Solar Park has delivered exceptional results for India&apos;s renewable energy sector. The facility generates 500 GWh of clean electricity annually, powering over 200,000 homes and significantly contributing to the nation&apos;s carbon reduction goals.
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Through innovative engineering and strategic implementation, we achieved remarkable environmental benefits including 400,000 tons of CO2 emission reduction annually, created 500+ local jobs, and established a model for future large-scale solar installations across India.
                                </p>
                                
                                {/* Project Q&A Section */}
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">
                                    Project Questions & Answers
                                </h3>
                                <div className="space-y-3">
                                    {projectQA.map((qa, index) => (
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
                            {/* More Projects Section */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    More Projects
                                </h3>
                                <div className="space-y-4">
                                    {moreProjects.map((project, index) => (
                                        <Link
                                            key={index}
                                            href="/portfolio"
                                            className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-prim hover:bg-prim/5 transition-all duration-300 group"
                                        >
                                            <div className="w-10 h-10 bg-prim/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-prim transition-colors duration-300">
                                                <Icon 
                                                    icon={project.icon} 
                                                    width="20" 
                                                    height="20" 
                                                    className="text-prim group-hover:text-white transition-colors duration-300" 
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800 group-hover:text-prim transition-colors duration-300 text-sm">
                                                    {project.title}
                                                </h4>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    {project.description}
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
                            
                            {/* Project Tags Section */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 font-chakrapetch">
                                    Project Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Solar Energy
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        250MW
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Grid-Tied
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Rajasthan
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Clean Energy
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Sustainable
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Monitoring
                                    </span>
                                    <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm hover:bg-prim hover:text-white transition-colors cursor-pointer">
                                        Desert
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}