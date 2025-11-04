"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Team from "@/Components/Home/Team/page";


const TeamPage: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/team", text: "Team" },
  ];

  return (
    <>
      <HeroSub title="Our Team" description="Meet the experts powering India's renewable energy future" breadcrumbLinks={breadcrumbLinks} />
      
      {/* Header Section - Full Width Banner */}
      <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
            Leadership Excellence
          </span>
          <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
            Meet Our Renewable Energy Experts
          </h1>
          <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of engineers, project managers, and renewable energy specialists brings decades of combined experience in delivering world-class clean energy solutions across India.
          </p>
          <Link
            href="/contact"
            className="inline-flex text-white bg-prim hover:bg-prim/90 h-[60px] text-lg rounded-full font-chakrapetch font-semibold gap-3 px-8 py-3 justify-center items-center tracking-wider group mt-8 transition-all duration-300"
          >
            Join Our Team
            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-white text-prim rounded-full h-10 w-10 p-2 group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      
      <Team limit={0} />
    </>
  );
};

export default TeamPage;