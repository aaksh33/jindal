"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { testimonials } from "@/app/api/data";

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* ✅ Parent Flex Container */}
          <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10 items-stretch w-full">

            {/* ==== LEFT SIDE IMAGE ==== */}
            <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero/solar.jpg"
                alt="sustainable-energy-testimonials"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Title */}
              <h4 className="absolute top-6 left-6 text-white text-xl lg:text-2xl font-semibold z-10">
                Clean Energy Success Stories
              </h4>

              {/* Rating Box */}
              <div className="absolute bottom-6 right-6 bg-green-600/90 backdrop-blur-sm text-white h-[150px] w-[200px] flex flex-col justify-between items-start p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Icon icon="tabler:leaf" width="24" height="24" className="text-green-200" />
                  <span className="text-3xl font-bold leading-none">500+</span>
                </div>
                <div className="text-center w-full">
                  <p className="text-sm text-green-100">MW Clean Energy</p>
                  <p className="text-xs text-green-200">Generated Annually</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="material-symbols:star-rounded"
                      width="20"
                      height="20"
                      className="text-yellow-300"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ==== RIGHT SIDE SWIPER ==== */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl overflow-hidden flex items-center justify-center border border-green-100">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full h-full"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="w-full h-full flex flex-col justify-center items-start px-10 py-8 space-y-5">
                      <Icon
                        icon="tabler:quote"
                        width={60}
                        height={60}
                        className="text-green-600 mb-3"
                      />
                      <p className="text-gray-700 text-lg leading-7 md:text-xl md:leading-8 pb-6 border-b border-green-200">
                        {item.text}
                      </p>
                      <div className="user flex items-center gap-4 pt-6">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={64} 
                          height={64} 
                          className="rounded-full w-16 h-16 object-cover border-2 border-green-200" 
                        />
                        <div className="user-info">
                          <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                          <span className="text-green-600 text-sm">{item.position}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
