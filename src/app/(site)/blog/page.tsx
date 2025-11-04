"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { blog, blogCategories } from "@/app/api/data";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blog", text: "Blog" },
    ];
    
    const filteredBlogs = blog.filter(item => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    return (
        <>
            <HeroSub title="Blog" description="" breadcrumbLinks={breadcrumbLinks} />
            
            {/* Header Section - Full Width Banner */}
            <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
                <div className="max-w-4xl">
                    <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
                        Our Blog
                    </span>
                    <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
                        Renewable Energy Insights
                    </h1>
                    <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Stay updated with the latest trends, government policies, and insights from our experts in solar energy, wind power, and sustainable technology.
                    </p>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Search */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">Search Articles</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search renewable energy topics..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:border-prim"
                                    />
                                    <Icon 
                                        icon="tabler:search" 
                                        width="20" 
                                        height="20" 
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </div>
                            
                            {/* Categories */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-chakrapetch">Categories</h3>
                                <div className="space-y-2">
                                    {blogCategories.map((category) => (
                                        <button
                                            key={category.name}
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                                                selectedCategory === category.name 
                                                    ? 'bg-prim text-white' 
                                                    : 'hover:bg-gray-50 text-gray-700'
                                            }`}
                                        >
                                            <span className="font-medium">{category.name}</span>
                                            <span className={`text-sm px-2 py-1 rounded-full ${
                                                selectedCategory === category.name 
                                                    ? 'bg-white/20' 
                                                    : 'bg-gray-200'
                                            }`}>
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Newsletter */}
                            <div className="bg-prim text-white p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4 font-chakrapetch">Stay Updated</h3>
                                <p className="text-white/90 text-sm mb-4">
                                    Get the latest renewable energy insights delivered to your inbox.
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
                        
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 font-chakrapetch">
                                        {selectedCategory === "All" ? "All Articles" : selectedCategory}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Icon icon="tabler:sort-descending" width="16" height="16" />
                                    <span>Latest First</span>
                                </div>
                            </div>
                            
                            {/* Blog Grid */}
                            {filteredBlogs.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {filteredBlogs.map((item) => (
                                        <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                                            <div className="relative overflow-hidden">
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    width={400} 
                                                    height={250} 
                                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute top-4 right-4 bg-prim text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    {item.date}
                                                </div>
                                                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                                                    5 min read
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="bg-prim/10 text-prim px-2 py-1 rounded text-xs font-medium">
                                                        {item.category}
                                                    </span>
                                                    <span className="text-gray-500 text-sm">By {item.author}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-prim transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                    {item.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <Link
                                                        href={`/blog/${item.slug}`}
                                                        className="inline-flex items-center gap-2 text-prim font-semibold hover:gap-3 transition-all duration-300"
                                                    >
                                                        Read More
                                                        <Icon 
                                                            icon="tabler:arrow-right" 
                                                            width="16" 
                                                            height="16" 
                                                        />
                                                    </Link>
                                                    <div className="flex items-center gap-3 text-gray-400">
                                                        <button className="hover:text-prim transition-colors">
                                                            <Icon icon="tabler:heart" width="18" height="18" />
                                                        </button>
                                                        <button className="hover:text-prim transition-colors">
                                                            <Icon icon="tabler:share" width="18" height="18" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <Icon icon="tabler:search-off" width="64" height="64" className="mx-auto text-gray-400 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}