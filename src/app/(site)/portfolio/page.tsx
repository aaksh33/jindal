"use client";
import React from "react";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { projects } from "@/app/api/data";

export default function Page() {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    
    return (
        <>
            <HeroSub title="Portfolio" description="" breadcrumbLinks={breadcrumbLinks} />
            
            {/* Header Section - Full Width Banner */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                        Our Work
                    </span>
                    <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                        Our Renewable Energy Projects
                    </h1>
                    <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Explore our portfolio of successful renewable energy installations and see how we're powering India's sustainable future.
                    </p>
                    <Link
                        href="#portfolio-grid"
                        className="inline-flex text-white bg-prim hover:bg-prim/90 h-[60px] text-lg rounded-full font-chakrapetch font-semibold gap-3 px-8 py-3 justify-center items-center tracking-wider group mt-8 transition-all duration-300"
                    >
                        View Projects
                        <Icon
                            icon="tabler:arrow-right"
                            width="24"
                            height="24"
                            className="bg-white text-prim rounded-full h-10 w-10 p-2 group-hover:translate-x-1 transition-all duration-300"
                        />
                    </Link>
                </div>
            </div>
            
            {/* Portfolio Grid Section */}
            <div id="portfolio-grid" className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`rounded-lg shadow-lg overflow-hidden group relative h-[400px] ${index === 0 ? 'lg:col-span-2' : ''}`}>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-prim text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-white/90 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <Link 
                                        href={project.link}
                                        className="inline-flex items-center text-white hover:text-prim transition-colors duration-300"
                                    >
                                        View Details
                                        <Icon 
                                            icon="tabler:arrow-right" 
                                            width="16" 
                                            height="16" 
                                            className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
