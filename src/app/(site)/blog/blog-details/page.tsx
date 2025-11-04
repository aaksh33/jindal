"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { blog } from "@/app/api/data";

export default function BlogDetails() {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blog", text: "Blog" },
        { href: "/blog/blog-details", text: "Blog Details" },
    ];

    const currentBlog = blog[0]; // Using first blog post as example
    const relatedBlogs = blog.slice(1, 3); // Other blog posts

    return (
        <>
            <HeroSub title="Blog Details" description="" breadcrumbLinks={breadcrumbLinks} />
            
            {/* Header Section */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                        {currentBlog.category}
                    </span>
                    <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                        {currentBlog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 mt-6 text-white/90">
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:user" width="20" height="20" />
                            <span>{currentBlog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:calendar" width="20" height="20" />
                            <span>{currentBlog.date}, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:clock" width="20" height="20" />
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Featured Image */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <Image 
                                    src={currentBlog.image} 
                                    alt={currentBlog.title} 
                                    width={800} 
                                    height={500} 
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            
                            {/* Article Content */}
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    {currentBlog.description}
                                </p>
                                
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-chakrapetch">
                                    India's Solar Revolution
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    India's solar energy sector has witnessed unprecedented growth in recent years, driven by ambitious government policies, declining technology costs, and increasing environmental awareness. The National Solar Mission, launched as part of the National Action Plan on Climate Change, aims to establish India as a global leader in solar energy.
                                </p>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">
                                    Key Growth Drivers
                                </h3>
                                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                                    <li>Government initiatives like PM-KUSUM and rooftop solar schemes</li>
                                    <li>Significant reduction in solar panel costs over the past decade</li>
                                    <li>Improved financing options and attractive subsidies</li>
                                    <li>Growing corporate commitment to renewable energy</li>
                                    <li>Technological advancements in solar panel efficiency</li>
                                </ul>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">
                                    Market Opportunities
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The Indian solar market presents immense opportunities across residential, commercial, and utility-scale segments. With over 300 sunny days annually in most regions, India has the potential to become a solar manufacturing hub while meeting its domestic energy needs through clean sources.
                                </p>
                                
                                <div className="bg-prim/5 border-l-4 border-prim p-6 rounded-r-lg mb-6">
                                    <p className="text-gray-700 italic">
                                        "Solar energy is not just an alternative; it's the future of sustainable power generation in India. The convergence of policy support, technological advancement, and economic viability makes this the perfect time for solar adoption."
                                    </p>
                                    <p className="text-prim font-semibold mt-2">- {currentBlog.author}, Solar Energy Expert</p>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">
                                    Future Outlook
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Looking ahead, India's solar sector is poised for exponential growth. The integration of energy storage solutions, smart grid technologies, and innovative financing models will further accelerate adoption. By 2030, solar energy is expected to play a pivotal role in India's energy security and climate commitments.
                                </p>
                            </div>
                            
                            {/* Tags and Share */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm">Solar Energy</span>
                                        <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm">India</span>
                                        <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm">Renewable</span>
                                        <span className="bg-prim/10 text-prim px-3 py-1 rounded-full text-sm">Clean Energy</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600 text-sm">Share:</span>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                                <Icon icon="tabler:brand-facebook" width="16" height="16" />
                                            </button>
                                            <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                                <Icon icon="tabler:brand-twitter" width="16" height="16" />
                                            </button>
                                            <button className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                                                <Icon icon="tabler:brand-linkedin" width="16" height="16" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:sticky lg:top-8 lg:h-fit space-y-8">
                            {/* Author Info */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">About the Author</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-prim/10 rounded-full flex items-center justify-center">
                                        <Icon icon="tabler:user" width="32" height="32" className="text-prim" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{currentBlog.author}</h4>
                                        <p className="text-sm text-gray-600">Solar Energy Expert</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    With over 15 years of experience in renewable energy, {currentBlog.author} leads our solar engineering team and has overseen the installation of over 500MW of solar capacity across India.
                                </p>
                            </div>
                            
                            {/* Related Posts */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 font-chakrapetch">Related Articles</h3>
                                <div className="space-y-4">
                                    {relatedBlogs.map((post) => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                                            <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                <Image 
                                                    src={post.image} 
                                                    alt={post.title} 
                                                    width={80} 
                                                    height={60} 
                                                    className="w-20 h-15 object-cover rounded-lg flex-shrink-0"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-800 group-hover:text-prim transition-colors text-sm line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1">{post.date}, 2024</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Newsletter */}
                            <div className="bg-prim text-white p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 font-chakrapetch">Stay Updated</h3>
                                <p className="text-white/90 text-sm mb-4">
                                    Subscribe to our newsletter for the latest renewable energy insights and industry updates.
                                </p>
                                <div className="space-y-3">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm"
                                    />
                                    <button className="w-full bg-white text-prim py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}