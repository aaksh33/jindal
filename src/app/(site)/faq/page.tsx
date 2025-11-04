"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";


type FAQItem = {
    questions: string;
    answers: string;
};
const faqData: FAQItem[] = [
    {
        questions: "What solar solutions do you offer?",
        answers: "We offer comprehensive solar solutions including rooftop solar installations, ground-mounted solar systems, solar water heaters, battery storage systems, and grid-tie inverters for residential, commercial, and industrial applications."
    },
    {
        questions: "How long does solar installation take?",
        answers: "Installation timelines vary by system size. Residential rooftop systems typically take 1-3 days, while commercial installations can take 1-2 weeks. Large industrial projects may take 4-8 weeks depending on capacity and complexity."
    },
    {
        questions: "Do you provide maintenance and support after installation?",
        answers: "Yes, we offer comprehensive post-installation support including regular maintenance, performance monitoring, cleaning services, and technical assistance. We provide 5-25 year warranties depending on the system components."
    },
    {
        questions: "What are the costs and financing options?",
        answers: "Solar system costs range from ₹35,000-₹45,000 per kW depending on system type and capacity. We offer flexible financing options, government subsidy assistance, and EMI plans to make solar affordable for everyone."
    },
    {
        questions: "Can solar work during monsoon and winter seasons?",
        answers: "Yes, solar panels work year-round including monsoon and winter. While efficiency may reduce during cloudy days, modern panels still generate electricity. Our systems include battery backup for continuous power supply."
    },
    {
        questions: "Do you help with government subsidies and net metering?",
        answers: "Absolutely! We assist with all government subsidy applications, net metering approvals, and regulatory compliance. Our team handles all paperwork and liaisons with electricity boards for seamless processing."
    }
]

const commonQuestionsData: FAQItem[] = [
    {
        questions: "How do I get started with solar installation?",
        answers: "Contact us for a free site assessment. Our engineers will evaluate your roof, energy consumption, and provide a customized solar solution with cost estimates, savings projections, and installation timeline."
    },
    {
        questions: "What information do you need for solar system design?",
        answers: "We need your electricity bills (last 12 months), roof area measurements, structural details, shading analysis, and energy consumption patterns. This helps us design an optimal system for maximum savings."
    },
    {
        questions: "Do you provide training on system operation and monitoring?",
        answers: "Yes, we provide comprehensive training on system operation, monitoring app usage, maintenance basics, and troubleshooting. We also provide detailed user manuals and 24/7 technical support."
    },
    {
        questions: "What happens if I need system expansion or modifications?",
        answers: "We design systems with future expansion capabilities. Additional panels, battery storage, or capacity upgrades can be easily integrated. We assess your current system and provide expansion options."
    },
    {
        questions: "Do you work in rural and remote areas?",
        answers: "Yes, we serve customers across India including rural and remote locations. We have experience with off-grid solar solutions, microgrids, and rural electrification projects nationwide."
    },
    {
        questions: "What makes Jindal different from other solar companies?",
        answers: "Our 15+ years experience, 500+ MW installed capacity, certified engineers, comprehensive warranties, 24/7 monitoring, and commitment to quality make us India's trusted renewable energy partner."
    }
]


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <span className="sub-title text-[14px] bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                    Solar FAQ
                </span>
                <h2 className="w-full mx-auto lg:w-3/4 mt-4 font-chakrapetch lg:text-[35px] font-semibold">
                    Solar Energy Questions
                </h2>
            </div>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="font-semibold text-lg text-gray-800">{faq.questions}</h3>
                            <Icon
                                icon={openIndex === index ? "tabler:chevron-up" : "tabler:chevron-down"}
                                className="text-prim text-xl transition-transform"
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.answers}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const CommonQuestionsSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
                {commonQuestionsData.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="font-semibold text-lg text-gray-800">{faq.questions}</h3>
                            <Icon
                                icon={openIndex === index ? "tabler:chevron-up" : "tabler:chevron-down"}
                                className="text-prim text-xl transition-transform"
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.answers}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/faq", text: "FAQ" },
    ];

    return (
        <>
            <HeroSub title="FAQ" description="" breadcrumbLinks={breadcrumbLinks} />
            
            {/* Header Section - Full Width Banner */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
              <div className="max-w-4xl">
                <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                  Solar FAQ
                </span>
                <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                  Solar Energy Questions Answered
                </h1>
                <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                  Find answers to common questions about solar installation, costs, maintenance, and how renewable energy can benefit your home or business.
                </p>
              </div>
            </div>

            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 mt-10">
                <div className="container mx-auto max-w-7xl px-4 flex flex-wrap lg:flex-nowrap justify-center gap-5">
                    <div className="lg:w-[50%] w-full">
                        <Image src="/images/faq/faq-image-01.webp" alt="faq-image" width={300} height={300} className="w-full h-full rounded-xl" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <FAQSection />
                    </div>
                </div>
            </div>
            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="text-center mb-12">
                        <span className="sub-title text-[14px] bg-black text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                            Getting Started
                        </span>
                        <h2 className="w-full mx-auto lg:w-3/4 mt-4 font-chakrapetch text-2xl lg:text-4xl font-semibold">
                            Ready to Go Solar? Start Here...
                        </h2>
                    </div>
                    <CommonQuestionsSection />
                </div>
            </div>
        </>
    );
};

export default Page;