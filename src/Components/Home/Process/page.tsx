"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Process: React.FC = () => {
    return (
        <>
            <section className="bg-light overflow-hidden py-14 lg:py-18 xl:22 bg-prim-light">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-[768px] px-4 space-y-14">

                    {/* Top Content */}
                    <div className="solution-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
                        {/* Left content */}
                        <div>
                            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                                Our Process
                            </span>
                            <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold">
                                Seamless Renewable Energy Implementation Process
                            </h2>
                        </div>

                        {/* Right side content (paragraph + button) */}
                        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-6">
                            <p className="text-pera-dark text-16 max-w-md">
                                From site assessment to grid connection, we ensure smooth deployment of clean energy solutions.
                            </p>

                            <Link
                                href="/contact"
                                className="text-white bg-dark h-[50px] text-sm lg:text-16 xl:w-[230px] w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
                            >
                                Get Free Quote
                                <Icon
                                    icon="tabler:arrow-right"
                                    width="24"
                                    height="24"
                                    className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Process Boxes - now inside the same container */}
                    <div className="process-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
                        <div className="process-item bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
      p-8 text-center transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] 
      max-w-sm mx-auto">

                            {/* Number */}
                            <span className="font-unbounded text-8xl font-extrabold bg-gradient-to-b 
          from-gray-900 via-gray-700 to-gray-300 bg-clip-text text-transparent block mb-4">
                                01
                            </span>

                            {/* Title */}
                            <h4 className="font-chakrapetch font-semibold text-lg text-gray-900 mb-2">
                                Site Assessment & Design
                            </h4>

                            {/* Description */}
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                Comprehensive site evaluation, solar irradiance analysis, and custom system design for optimal energy generation.
                            </p>
                        </div>
                        <div className="process-item bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
      p-8 text-center transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] 
      max-w-sm mx-auto">

                            {/* Number */}
                            <span className="font-unbounded text-8xl font-extrabold bg-gradient-to-b 
          from-gray-900 via-gray-700 to-gray-300 bg-clip-text text-transparent block mb-4">
                                02
                            </span>

                            {/* Title */}
                            <h4 className="font-chakrapetch font-semibold text-lg text-gray-900 mb-2">
                                Installation & Commissioning
                            </h4>

                            {/* Description */}
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                Professional installation of solar panels, inverters, and electrical systems with safety compliance and quality assurance.
                            </p>
                            {/* <Icon icon="si:arrow-right-duotone" width="24" height="24" className="hidden xl:inline-flex items-center justify-center"/> */}
                        </div>
                         <div className="process-item bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
      p-8 text-center transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] 
      max-w-sm mx-auto">

                            {/* Number */}
                            <span className="font-unbounded text-8xl font-extrabold bg-gradient-to-b 
          from-gray-900 via-gray-700 to-gray-300 bg-clip-text text-transparent block mb-4">
                                03
                            </span>

                            {/* Title */}
                            <h4 className="font-chakrapetch font-semibold text-lg text-gray-900 mb-2">
                                Monitoring & Maintenance
                            </h4>

                            {/* Description */}
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                24/7 system monitoring, performance optimization, and preventive maintenance to ensure maximum energy output and longevity.
                            </p>
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
};

export default Process;