"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const Commitment: React.FC = () => {
    const tags =["Solar", "Wind", "Clean Energy", "Sustainable", "Green Tech", "Carbon Neutral", "Renewable"];
    return (
        <>
            <section className="bg-light overflow-hidden py-14 lg:py-18 xl:22 bg-prim-light">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-[768px] px-4 space-y-14">
                    <div className="commitment-content bg-white p-8 rounded-2xl">
                        <div>
                            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                                Why Choose Jindal
                            </span>
                            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
                                Leading India&apos;s Clean Energy Revolution with Innovative Solar and Wind Solutions for Sustainable Future
                            </h2>
                        </div>

                        {/* Thoda gap diya gaya hai button se pehle */}
                        <Link
                            href="/services"
                            className="mt-6 inline-flex text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
                        >
                            Learn More
                            <Icon
                                icon="tabler:arrow-right"
                                width="24"
                                height="24"
                                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
                            />
                        </Link>
                    </div>
                    <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="w-full bg-white p-8 rounded-2xl">
                            <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
                                Trusted by Energy Leaders Nationwide
                            </h2>
                            <div className="w-fit flex items-centre pt-8 pb-10 overflow-hidden">
                                <Image src="/images/commitment/user1.jpg"
                                    alt="avatar-image"
                                    width={100}
                                    height={200}
                                    className="object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3"
                                />
                                <Image src="/images/commitment/user2.jpg"
                                    alt="avatar-image"
                                    width={100}
                                    height={200}
                                    className="object-cover w-[120px] h-[120px] rounded-full scale-110 border-4 border-white shadow-xl z-2"
                                />
                                <Image src="/images/commitment/user3.jpg"
                                    alt="avatar-image"
                                    width={100}
                                    height={200}
                                    className="object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3 z-0"
                                />
                            </div>
                            <div className="flex gap-5">
                                <span className="text-5xl font-semibold text-prim">500+</span>
                                <p className="text-pera-dark"> MW renewable energy capacity installed across India.</p>
                            </div>
                        </div>
                        <div className="w-full bg-white p-8 rounded-2xl">
                            <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
                                Clean Energy Performance Analytics
                            </h2>
                            <div className="w-full h-[230px]">
                                <Image src="/images/commitment/strategy-chart.webp" width={350} height={350} alt="strategy-chart-image" className="w-full h-full object-contain mx-auto" />
                            </div>
                        </div>
                        <div className="w-full bg-white p-8 rounded-2xl flex justify-between items-start flex-col">
                            <div className="mb-8">

                                <h2 className="font-chakrapetch lg:text-24 font-semibold pb-1">
                                    Comprehensive Renewable Solutions
                                </h2>
                                <p>
                                    Our expert team delivers end-to-end renewable energy solutions with 24/7 support and maintenance services.
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-3 w-full ">
                                {tags.map((tag,index) => (
                                    <li key={index} className="border border-white rounded-md overflow-hidden cursor-pointer">
                                        <span className="bg-black/10 backdrop-blur-sm px-3 py-1 inline-block text-sm font-medium">{tag}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Commitment;