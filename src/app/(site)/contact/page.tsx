"use client";
import React from "react";
import Link from "next/link";
import HeroSub from "@/Components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";

export default function page() {
    const breadcrumbLinks =[
        { href: "/", text: "Home" },
        { href: "/contact", text: "Contact" },
    ];
    return(
        <>
        <HeroSub title="Contact" description="" breadcrumbLinks={breadcrumbLinks} />
        
        {/* Header Section - Full Width Banner */}
        <div className="about-header section-bannerP flex justify-center items-center text-center px-4">
          <div className="max-w-4xl">
            <span className="sub-title text-14 bg-prim text-white py-2 px-6 rounded-xl relative font-chakrapetch capitalize">
              Get Solar Quote
            </span>
            <h1 className="text-white mt-6 font-chakrapetch text-4xl lg:text-6xl font-bold leading-tight">
              Ready to Go Solar? Let&apos;s Connect
            </h1>
            <p className="text-white/90 mt-4 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Get a free solar assessment and discover how much you can save with clean energy. Our experts are ready to design the perfect renewable energy solution for your needs.
            </p>
            <Link
              href="#contact-form"
              className="inline-flex text-white bg-prim hover:bg-prim/90 h-[60px] text-lg rounded-full font-chakrapetch font-semibold gap-3 px-8 py-3 justify-center items-center tracking-wider group mt-8 transition-all duration-300"
            >
              Get Free Quote
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-white text-prim rounded-full h-10 w-10 p-2 group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Location */}
                    <div className="bg-white hover:bg-black p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-prim/10 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon icon="tabler:map-pin" width="24" height="24" className="text-prim group-hover:text-black" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2">Our Location</h3>
                        <p className="text-sm text-gray-600 group-hover:text-white">Jindal Energy Park, Sector 15<br />Gurugram, Haryana 122001</p>
                    </div>

                    {/* Email */}
                    <div className="bg-white hover:bg-black p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-prim/10 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon icon="tabler:mail" width="24" height="24" className="text-prim group-hover:text-black" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2">Email Us</h3>
                        <p className="text-sm text-gray-600 group-hover:text-white">info@jindalrenewable.com</p>
                    </div>

                    {/* Call */}
                    <div className="bg-white hover:bg-black p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-prim/10 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon icon="tabler:phone" width="24" height="24" className="text-prim group-hover:text-black" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2">Solar Helpline</h3>
                        <p className="text-sm text-gray-600 group-hover:text-white">1800-123-SOLAR</p>
                    </div>

                    {/* WhatsApp */}
                    <div className="bg-white hover:bg-black p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="w-12 h-12 bg-prim/10 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon icon="tabler:brand-whatsapp" width="24" height="24" className="text-prim group-hover:text-black" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2">WhatsApp</h3>
                        <p className="text-sm text-gray-600 group-hover:text-white">+91 98765 43210</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Contact Form and Map Section */}
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left - Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 font-chakrapetch leading-tight">
                            Get Your Free Solar Assessment Today
                        </h2>
                        <form className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-prim transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-prim transition-colors"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-prim transition-colors"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Solar Solution</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-prim transition-colors">
                                        <option value="">Select solar solution</option>
                                        <option value="rooftop-solar">Rooftop Solar</option>
                                        <option value="commercial-solar">Commercial Solar</option>
                                        <option value="industrial-solar">Industrial Solar</option>
                                        <option value="wind-energy">Wind Energy</option>
                                        <option value="energy-storage">Energy Storage</option>
                                        <option value="consultation">Free Consultation</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Project Details</label>
                                <textarea 
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-prim transition-colors resize-none"
                                    placeholder="Tell us about your energy requirements, roof area, monthly electricity bill..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="inline-flex items-center justify-center gap-3 bg-prim/80 text-white py-2 px-5 rounded-full font-semibold hover:bg-prim transition-all duration-300 group"
                            >
                                Get Solar Quote
                                <Icon
                                    icon="tabler:arrow-right"
                                    width="20"
                                    height="20"
                                    className="bg-black text-white rounded-full h-8 w-8 p-1.5 group-hover:translate-x-1 transition-all duration-300"
                                />
                            </button>
                        </form>
                    </div>
                    
                    {/* Right - Map */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="w-full h-[350px] bg-gray-200 rounded-lg overflow-hidden">
                            <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMzUuOCJF!5e0!3m2!1sen!2sin!4v1635959554180!5m2!1sen!2sin"
                                width="100%" 
                                height="100%" 
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}