"use client"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import React, { useRef } from "react"
import "swiper/css"
import { partnersData } from "@/app/api/data";

const Companies: React.FC = () => {
    const swiperRef = useRef<{ autoplay?: { stop: () => void; start: () => void } }>(null);
    const duplicatedData = [...partnersData, ...partnersData, ...partnersData];
    
    return (
        <section className="bg-gray-50 overflow-hidden py-16 lg:py-20">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center">
                    <span className="inline-block bg-prim text-white px-4 py-2 rounded-full text-sm font-chakrapetch font-medium mb-4">
                        Our Partners
                    </span>
                    <h2 className="text-2xl lg:text-4xl font-chakrapetch font-bold text-prim">
                        Trusted by Leading <span className="bg-dark text-white px-3 py-1 rounded-lg">Energy</span> Companies
                    </h2>
                </div>
            </div>
            
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                <div 
                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                >
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView="auto"
                        loop={true}
                        speed={6000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        allowTouchMove={false}
                        freeMode={true}
                        className="companies-swiper py-2"
                    >
                        {duplicatedData.map((partner, index) => (
                            <SwiperSlide key={index} className="!w-auto">
                                <div 
                                    className="bg-white rounded-2xl p-6 mx-2 min-w-[200px] h-28 flex items-center justify-center cursor-pointer border border-gray-100 hover:shadow-lg transition-all duration-300"
                                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                                >
                                    <div className="text-center">
                                        <div className="text-3xl lg:text-4xl mb-2">
                                            {partner.logo}
                                        </div>
                                        <h3 className="text-sm font-semibold text-gray-800 mb-1">
                                            {partner.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {partner.category}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Companies;