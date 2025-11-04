"use client"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import React, { useRef } from "react"
import "swiper/css"
import { projects } from "@/app/api/data";
import Link from "next/link"
import { Icon } from "@iconify/react"
import Image from "next/image"

const Projects: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <section className="bg-gradient-to-br from-slate-50 to-green-50 overflow-hidden py-16 lg:py-20">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Icon icon="tabler:solar-panel" width="24" height="24" className="text-green-600" />
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Featured Projects
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Transforming India&apos;s <span className="text-green-600">Energy Landscape</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our flagship renewable energy projects that are making a real difference across India
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <div
                    onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                >
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1.5}
                        loop={true}
                        centeredSlides={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        allowTouchMove={false}
                        freeMode={true}
                        breakpoints={{
                            1400: { slidesPerView: 1.5 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        {projects.concat(projects).map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="project-item flex flex-col lg:flex-row justify-center items-center w-full bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl p-6 rounded-2xl gap-6 h-auto lg:h-[500px] border border-green-100 transition-all duration-300">
                                    <div className="project-image w-full lg:w-[50%] h-64 lg:h-full relative overflow-hidden rounded-xl">
                                        <Image src={project.image} fill alt={project.title} className="object-cover hover:scale-105 transition-transform duration-300" />
                                        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="project-content w-full lg:w-[50%] space-y-4">
                                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">{project.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-green-600">
                                            <div className="flex items-center gap-1">
                                                <Icon icon="tabler:leaf" width="16" height="16" />
                                                <span>Eco-Friendly</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Icon icon="tabler:award" width="16" height="16" />
                                                <span>Certified</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={project.link}
                                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 w-fit transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <Icon icon="tabler:eye" width="18" height="18" />
                                            View Project
                                            <Icon icon="tabler:arrow-right" width="16" height="16" />
                                        </Link>
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
export default Projects;