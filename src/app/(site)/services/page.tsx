"use client";
import React from "react";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import solutionData from "@/app/api/data";

export default function Page() {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/services", text: "Services" },
    ];

    const services = [
        {
            icon: "tabler:sun",
            title: "Solar Power Solutions",
            description: "Advanced solar panel installations and grid-tied systems for residential, commercial, and industrial applications.",
            features: ["Rooftop Installation", "Grid Integration", "25 Year Warranty", "Net Metering"],
        },
        {
            icon: "tabler:wind",
            title: "Wind Energy Systems",
            description: "High-efficiency wind turbines and wind farm development for sustainable electricity generation.",
            features: ["Onshore Wind", "Offshore Wind", "Turbine Maintenance", "Grid Connection"],
        },
        {
            icon: "tabler:battery",
            title: "Energy Storage Solutions",
            description: "Cutting-edge battery storage systems to store renewable energy for 24/7 power availability.",
            features: ["Lithium-ion Batteries", "Grid Stability", "Peak Shaving", "Backup Power"],
        },
        {
            icon: "tabler:network",
            title: "Grid Integration Services",
            description: "Smart grid solutions and power distribution systems for seamless renewable energy integration.",
            features: ["Smart Meters", "Load Balancing", "Power Quality", "Remote Monitoring"],
        },
        {
            icon: "tabler:leaf",
            title: "Green Energy Consulting",
            description: "Expert consultation on renewable energy projects, sustainability planning, and carbon footprint reduction.",
            features: ["Feasibility Studies", "Project Planning", "ROI Analysis", "Compliance Support"],
        },
        {
            icon: "tabler:tools",
            title: "Maintenance & Support",
            description: "Comprehensive maintenance services to ensure optimal performance of your renewable energy systems.",
            features: ["Preventive Maintenance", "24/7 Monitoring", "Performance Optimization", "Emergency Support"],
        },
    ];

    return (
        <>
            <HeroSub title="Services" description="" breadcrumbLinks={breadcrumbLinks} />

            {/* Header Section - Full Width Banner */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                        Our Services
                    </span>
                    <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                        Renewable Energy Solutions
                    </h1>
                    <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        From solar installations to wind farms, we provide comprehensive renewable energy solutions to power a sustainable future.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex text-white bg-prim hover:bg-prim/90 h-[60px] text-lg rounded-full font-chakrapetch font-semibold gap-3 px-8 py-3 justify-center items-center tracking-wider group mt-8 transition-all duration-300"
                    >
                        Get Started
                        <Icon
                            icon="tabler:arrow-right"
                            width="24"
                            height="24"
                            className="bg-white text-prim rounded-full h-10 w-10 p-2 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </Link>
                </div>
            </div>

            {/* Services Grid */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                            What We Offer
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-4 font-chakrapetch">
                            Our Renewable Energy Services
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We provide end-to-end renewable energy solutions to help you achieve energy independence and sustainability goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white hover:bg-teal-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-prim/10 group-hover:bg-white rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                                    <Icon
                                        icon={service.icon}
                                        width="32"
                                        height="32"
                                        className="text-prim group-hover:text-black transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-4 font-chakrapetch transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white mb-6 leading-relaxed transition-colors duration-300">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-sm text-gray-600 group-hover:text-white transition-colors duration-300"
                                        >
                                            <Icon
                                                icon="tabler:check"
                                                width="16"
                                                height="16"
                                                className="text-prim group-hover:text-white mr-2 transition-colors duration-300"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-prim group-hover:text-white font-semibold transition-colors duration-300"
                                >
                                    Learn More
                                    <Icon
                                        icon="tabler:arrow-right"
                                        width="16"
                                        height="16"
                                        className="ml-2 bg-prim/10 group-hover:bg-white text-prim group-hover:text-black rounded-full h-8 w-8 p-1.5 group-hover:translate-x-1 transition-all duration-300"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
