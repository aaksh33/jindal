"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { team } from "@/app/api/data";
import Link from "next/link";

interface TeamProps {
    limit: number;
}
const Team: React.FC<TeamProps> = ({ limit }) => {
    const displayTeam = limit ? team.slice(0, limit) : team;
    return (
        <div className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-gray-50">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 ">
                <div className="team-content gap-2 text-center mb-12">
                    <span className="sub-title text-[14px] bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                        Meet Our Team
                    </span>

                    <h2 className="w-full mx-auto lg:w-3/4 mt-4 font-chakrapetch lg:text-[35px] font-semibold">
                        Expert Team Driving India&apos;s Clean Energy Revolution
                    </h2>
                </div>
                <div className="team-wrapper grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
                    {displayTeam.map((member) => (
                        <div key={member.id} className="team-item group">
                            <div className="team-image rounded-xl bg-white overflow-hidden relative aspect-[4/5]  shadow-md hover:shadow-lg transition-shadow duration-300">
                                <Image src={member.image} alt={member.name} fill className="object-cover" unoptimized />
                                {/* overlay social icons  */}
                                <div className="flex group-hover:opacity-100 gap-3 justify-center items-center z-20 text-white absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 transition-opacity duration-300">
                                    <Link href="https://www.facebook.com" target="_blank">
                                        <Icon icon="gg:facebook" width="30" height="30" className="bg-white text-black rounded-sm hover:bg-prim p-1 hover:text-white border border-grey-600 transition-colors duration-300 cursor-pointer" />
                                    </Link>
                                    <Link href="https://www.twitter.com" target="_blank">
                                        <Icon icon="mdi:twitter" width="30" height="30" className="bg-white text-black rounded-sm hover:bg-prim p-1 hover:text-white border border-grey-600 transition-colors duration-300 cursor-pointer" />
                                    </Link>
                                    <Link href="https://www.instagram.com" target="_blank">
                                        <Icon icon="ri:instagram-line" width="30" height="30" className="bg-white text-black rounded-sm hover:bg-prim p-1 hover:text-white border border-grey-600 transition-colors duration-300 cursor-pointer" />
                                    </Link>
                                    <Link href="https://www.linkedin.com" target="_blank">
                                        <Icon icon="ri:linkedin-fill" width="30" height="30" className="bg-white text-black rounded-sm hover:bg-prim p-1 hover:text-white border border-grey-600 transition-colors duration-300 cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                            <div className="team-content flex justify-between items-start gap-2 pt-2">
                                <div>
                                    <h4 className="font-unbounded text-xl ">{member.name}</h4>
                                    <span>{member.post}</span>
                                </div>
                                <Icon icon="humbleicons:at-symbol" width={30} height={30} className="bg-white p-1 rounded-full"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Team;