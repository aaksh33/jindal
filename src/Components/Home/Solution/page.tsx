"use client";

import React from "react";
import solutionData from "@/app/api/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Solution: React.FC = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-white to-green-50 overflow-hidden py-16 lg:py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-[768px] px-4 space-y-14">
                    <div className="solution-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Icon icon="tabler:leaf" width="24" height="24" className="text-green-600" />
                                <span className="text-sm bg-green-100 text-green-700 py-2 px-4 rounded-full font-semibold">
                                    Renewable Energy Solutions
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                Powering India&apos;s <span className="text-green-600">Sustainable Future</span>
                            </h2>
                            <p className="text-gray-600 mt-4 max-w-2xl">
                                Leading the renewable energy revolution with innovative solar, wind, and clean energy solutions for homes, businesses, and industries.
                            </p>
                        </div>
                        <Link
                            href="/services"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Icon icon="tabler:solar-panel" width="20" height="20" />
                            Explore Solutions
                            <Icon icon="tabler:arrow-right" width="16" height="16" />
                        </Link>
                    </div>

                    {/* ✅ Swiper Slider */}
                    <div className="relative mt-10">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            className="solution-wrapper"
                        >
                            {solutionData.map((solution, index) => (
                                <SwiperSlide key={index}>
                                    <div className="solution-item w-full bg-white hover:bg-black/70 shadow-lg hover:shadow-2xl p-6 space-y-6 rounded-2xl border border-green-100 group transition-all duration-500 h-[400px] flex flex-col justify-between">
                                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                                            {solution.title}
                                        </h4>
                                        <div className="w-16 h-16 bg-green-100 group-hover:bg-white rounded-full mx-auto flex justify-center items-center transition-all duration-300">
                                            <Icon icon={solution.icon}
                                                width="32"
                                                height="32"
                                                className="text-green-600 group-hover:text-green-600 transition-colors duration-300"
                                            />
                                        </div>
                                        <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{solution.description}</p>
                                        <Link
                                            href="/services"
                                            className="bg-green-600 group-hover:bg-white text-white group-hover:text-green-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 w-fit transition-all duration-300"
                                        >
                                            Learn More
                                            <Icon icon="tabler:arrow-right" width="16" height="16" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Solution;

