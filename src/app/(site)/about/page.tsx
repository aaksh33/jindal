"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Companies from "@/Components/Home/Companies/page";
import Testimonials from "@/Components/Home/Testimonials/page";



const About: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
  ];

  return (
    <>
      <HeroSub title="About Us" description="Leading India's renewable energy revolution with innovative solutions" breadcrumbLinks={breadcrumbLinks} />

      {/* Header Section - Full Width Banner */}
      <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
            Clean Energy Leaders
          </span>
          <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
            Powering India's Sustainable Future
          </h1>
          <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            With over 15 years of expertise in renewable energy, we've installed 500+ MW of clean energy capacity across India, helping businesses and communities transition to sustainable power solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex text-white bg-prim hover:bg-prim/90 h-[60px] text-lg rounded-full font-chakrapetch font-semibold gap-3 px-8 py-3 justify-center items-center tracking-wider group mt-8 transition-all duration-300"
          >
            Get Solar Quote
            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-white text-prim rounded-full h-10 w-10 p-2 group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </div>
      </div>



      <div className="bg-white overflow-hidden py-20">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 space-y-20">

          {/* Features Section */}
          <div className="text-center mb-16">
            <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
              Why Choose Jindal
            </span>
            <h2 className="mt-6 font-chakrapetch text-3xl lg:text-5xl font-bold text-prim">
              Our Renewable Energy Expertise
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology, industry expertise, and commitment to sustainability to deliver exceptional clean energy solutions
            </p>
          </div>
          <div className="about-wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* First Item */}
            <div className="about-item max-w-sm bg-white shadow-xl hover:shadow-2xl p-6 rounded-2xl group hover:bg-prim transition-all duration-500 h-[280px] flex flex-col">
              <div className="about-icon w-[60px] h-[60px] rounded-full flex justify-center items-center bg-prim/10 group-hover:bg-white transition-all duration-500 mb-6">
                <Icon icon="tabler:sun"
                  width="30"
                  height="30"
                  className="text-prim group-hover:text-prim transition-colors duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-prim group-hover:text-white transition-colors duration-500">
                  Advanced Solar Technology
                </h3>
                <p className="text-gray-600 font-normal group-hover:text-white transition-colors duration-500 leading-relaxed">
                  We use high-efficiency solar panels and smart inverters with cutting-edge technology to maximize energy generation and system performance.
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="about-item max-w-sm bg-white shadow-xl hover:shadow-2xl p-6 rounded-2xl group hover:bg-prim transition-all duration-500 h-[280px] flex flex-col">
              <div className="about-icon w-[60px] h-[60px] rounded-full flex justify-center items-center bg-prim/10 group-hover:bg-white transition-all duration-500 mb-6">
                <Icon icon="tabler:certificate"
                  width="30"
                  height="30"
                  className="text-prim group-hover:text-prim transition-colors duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-prim group-hover:text-white transition-colors duration-500">
                  Certified Excellence
                </h3>
                <p className="text-gray-600 font-normal group-hover:text-white transition-colors duration-500 leading-relaxed">
                  Our certified engineers and ISO-certified processes ensure superior quality installations with comprehensive warranties and performance guarantees.
                </p>
              </div>
            </div>

            {/* Third Item */}
            <div className="about-item max-w-sm bg-white shadow-xl hover:shadow-2xl p-6 rounded-2xl group hover:bg-prim transition-all duration-500 h-[280px] flex flex-col">
              <div className="about-icon w-[60px] h-[60px] rounded-full flex justify-center items-center bg-prim/10 group-hover:bg-white transition-all duration-500 mb-6">
                <Icon icon="tabler:headphones"
                  width="30"
                  height="30"
                  className="text-prim group-hover:text-prim transition-colors duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-prim group-hover:text-white transition-colors duration-500">
                  24/7 Monitoring Support
                </h3>
                <p className="text-gray-600 font-normal group-hover:text-white transition-colors duration-500 leading-relaxed">
                  Our dedicated support team provides round-the-clock system monitoring, maintenance services, and technical assistance for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 flex lg:flex-row flex-col items-start gap-5">
          <div className="content w-full lg:w-[55%]">
            <div>
              <span className="sub-title text-[14px] bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                Our Story
              </span>

              <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch text-2xl lg:text-4xl font-semibold text-gray-800 leading-tight">
                Building India's Clean Energy Infrastructure
              </h2>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Since 2009, Jindal Renewable Energy has been at the forefront of India's clean energy revolution, delivering innovative solar and wind solutions that power sustainable growth across the nation.
              </p>

              {/* Boxes Container */}
              <div className="flex lg:flex-row flex-col gap-4 mt-6">
                {/* Our Mission */}
                <div className="bg-white p-6 rounded-2xl flex-1 shadow-sm">
                  <h4 className="font-unbounded text-xl font-bold pb-3 text-black">
                    Our Mission
                  </h4>
                  <p className="pb-5 text-gray-700 leading-relaxed">
                    To accelerate India's transition to renewable energy by providing reliable, efficient, and cost-effective clean energy solutions for all.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-medium text-gray-700">
                      <Icon
                        icon="tabler:check-circle"
                        width="20"
                        height="20"
                        className="text-prim flex-shrink-0"
                      />
                      Carbon Footprint Reduction
                    </li>
                    <li className="flex items-center gap-3 font-medium text-gray-700">
                      <Icon
                        icon="tabler:check-circle"
                        width="20"
                        height="20"
                        className="text-prim flex-shrink-0"
                      />
                      Energy Independence
                    </li>
                    <li className="flex items-center gap-3 font-medium text-gray-700">
                      <Icon
                        icon="tabler:check-circle"
                        width="20"
                        height="20"
                        className="text-prim flex-shrink-0"
                      />
                      Sustainable Development
                    </li>
                  </ul>
                </div>

                {/* Our Vision */}
                <div className="bg-white p-6 rounded-2xl flex-1 shadow-sm">
                  <h4 className="font-unbounded text-xl font-bold pb-3 text-black">
                    Our Vision
                  </h4>
                  <p className="pb-5 text-gray-700 leading-relaxed">
                    To be India's most trusted renewable energy partner, leading the transformation towards a sustainable and energy-secure future.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-medium text-gray-700">
                      <Icon
                        icon="tabler:target"
                        width="20"
                        height="20"
                        className="text-prim flex-shrink-0"
                      />
                      Market Leadership
                    </li>
                    <li className="flex items-center gap-3 font-medium text-gray-700">
                      <Icon
                        icon="tabler:target"
                        width="20"
                        height="20"
                        className="text-prim flex-shrink-0"
                      />
                      Technology Innovation
                    </li>
                    <li className="flex items-center gap-3 font-medium text-gray-700">
                      <Icon
                        icon="tabler:target"
                        width="20"
                        height="20"
                        className="text-prim flex-shrink-0"
                      />
                      Environmental Impact
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button below both boxes */}
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="flex-1 text-white bg-prim hover:bg-prim/90 h-[50px] text-[16px] rounded-2xl font-chakrapetch font-semibold flex gap-2 px-6 py-2 justify-center items-center tracking-wider group transition-all duration-300"
                >
                  Get Solar Quote
                  <Icon
                    icon="tabler:arrow-right"
                    width="20"
                    height="20"
                    className="group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
                <Link
                  href="/services"
                  className="flex-1 text-prim bg-white border-2 border-prim hover:bg-prim hover:text-white h-[50px] text-[16px] rounded-2xl font-chakrapetch font-semibold flex gap-2 px-6 py-2 justify-center items-center tracking-wider group transition-all duration-300"
                >
                  Our Solutions
                </Link>
              </div>
            </div>
          </div>
          <div className="image lg:w-[45%] w-full rounded-lg overflow-hidden">
            <Image src="/images/about/about-01.webp" alt="about-image" width={300} height={300} className="w-full h-full" />
          </div>
        </div>
      </div>
      
      <Companies />
      <Testimonials />

    </>
  );
};

export default About;