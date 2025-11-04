import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { footerlinks } from "@/app/api/data";
import Logo from '../Header/Logo/page';

const Footer = () => {
    return (
        <>
            <footer className="pt-10 relative bg-white">
                <div className="container m-auto px-4 max-w-screen-xl">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-centre border-b pb-10 mb-10 gap-6">
                        <div className="flex flex-wrap md:flex-nowrap gap-6">
                            <div className="flex items-start text-foottext text-[15px]">
                                <Icon icon="weui:location-outlined" className="w-6 h-6 mr-3 mt-1" />
                                <div className="flex flex-col">
                                    <span>Jindal Energy Park, Sector 15</span>
                                    <span>Gurugram, Haryana 122001</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-foottext">
                                <Icon icon="majesticons:phone-retro-line" className="w-6 h-6" />
                                <Link href="tel:+911800123456" className="text-[15px] hover:text-prim">1800-123-SOLAR</Link>
                            </div>
                            <div className="flex items-center gap-2 text-foottext">
                                <Icon icon="clarity:email-line" className="w-6 h-6" />
                                <Link href="mailto:info@jindalrenewable.com" className="text-[15px] hover:text-prim">info@jindalrenewable.com</Link>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com" className="text-muted hover:text-prim transition-colors">
                                <Icon icon="fe:facebook" width="28" height="28" />
                            </Link>
                            <Link href="https://x.com/" className="text-muted hover:text-prim transition-colors">
                                <Icon icon="fa6-brands:square-twitter" width="28" height="28" />
                            </Link>
                            <Link href="https://www.linkedin.com" className="text-muted hover:text-prim transition-colors">
                                <Icon icon="fa6-brands:linkedin" width="28" height="28" />
                            </Link>
                            <Link href="https://www.youtube.com" className="text-muted hover:text-prim transition-colors">
                                <Icon icon="cbi:youtube-alt" width="30" height="30" />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-3">
                            <div className="text-black pb-5 ">
                                <Logo />
                            </div>
                            <p className="text-[14px] leading-6 text-foottext text-left">
                                Leading India&apos;s renewable energy revolution with innovative solar and wind solutions. Committed to providing clean, sustainable energy for homes, businesses, and industries nationwide.
                            </p>
                            <div className="flex flex-wrap gap-3 items-center pt-5 ">
                                <Image src="/images/footer/award-logo-1.webp" alt="award-logo-1" width={70} height={70} className="p-2 cursor-pointer bg-black" />
                                <Image src="/images/footer/award-logo-2.webp" alt="award-logo-1" width={70} height={70} className="p-2 cursor-pointer bg-black" />
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Services</h4>
                            <ul>
                                {footerlinks.slice(0 , 6).map((item , index) =>(
                                    <li key={index} className="pb-2">
                                        <Link href="#" className="text-foottext text-[15px] hover:text-prim transition-colors">{item.link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="lg:col-span-2">
                            <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Company</h4>
                            <ul>
                                {footerlinks.slice(6 , 12).map((item , index) =>(
                                    <li key={index} className="pb-2">
                                        <Link href="#" className="text-foottext text-[15px] hover:text-prim transition-colors">{item.link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:col-span-5">
                            <p className="text-[18px] text-black font-bold font-chakrapetch">Get Solar Updates</p>
                            <form className=" mt-5 ">
                                <div className="relative ">
                                    <input type="email"
                                    name="email"
                                    placeholder="Get latest solar news & offers"
                                    className="w-full bg-white placeholder:text-foottext text-black py-3 pl-5 pr-10 border border-border rounded-md"
                                    />
                                    <Icon icon="solar:plain-2-linear" className="rexr-[20px] text-foottext absolute right-4 top-3.5" />
                                </div>
                            </form>
                            <p className="text-[18px] text-black font-bold font-chakrapetch pt-10 pb-4">Solar Monitoring App</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#">
                                    <Image src="/images/footer/google.webp"
                                    alt="Google Play"
                                    width={140}
                                    height={45}
                                    className="w-auto h-auto"
                                    />
                                </a>
                                 <a href="#">
                                    <Image src="/images/footer/app.webp"
                                    alt="App Store"
                                    width={140}
                                    height={45}
                                    className="w-auto h-auto"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 py-3 text-center sm:text-left">
                        <p className="text-[15px] text-foottext mb-3 sm:mb-0">© 2025. All rights reserved by {""}
                            <Link href="#" className="hover:text-prim">Jindal Renewable Energy</Link>
                        </p>
                        <div className="flex gap-4">
                            {footerlinks.slice(12, 15).map((item, index) => (
                                <Link key={index} href="#" className="text-foottext hover:text-prim text-[15px]">{item.link}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer