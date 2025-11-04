"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Header/Logo/page";
import { headerData } from "./Header/Navigation/menuData";
import HeaderLink from "./Header/Navigation/headerLink";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Sidebar from "./Header/Sidebar/page";
import MobileHeaderLink from "./Header/Navigation/mobileHeaderLinks";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-5 left-0 right-0 z-50 transition-all duration-500 w-[90vw] xl:w-[80vw] mx-auto rounded-xl ${
          pathname === "/faq"
            ? "bg-black backdrop-blur-lg"
            : sticky 
              ? "bg-black/50 backdrop-blur-lg" 
              : "bg-black/10 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <div className="text-white">
                <Logo />
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </div>
            </nav>

            {/* Right Side - Let's Talk Button */}
            <div className="flex items-center space-x-4">
              {/* Let's Talk Button - Desktop */}
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full font-chakrapetch font-semibold transition-all duration-300 group bg-dark text-white hover:bg-prim"
              >
                <span>Let&apos;s Talk</span>
                <Icon
                  icon="tabler:arrow-right"
                  width="20"
                  height="20"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  navbarOpen ? "rotate-45 translate-y-1.5" : ""
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : "opacity-100"
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                  navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}></span>
              </button>

              {/* Sidebar Toggle - Desktop Only */}
              <button
                onClick={() => setIsOpenSidebar(true)}
                className="hidden lg:block p-2 cursor-pointer group"
                aria-label="Toggle sidebar"
              >
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-white transition-colors duration-300"></span>
                  <span className="block w-4 h-0.5 bg-white transition-all duration-300 group-hover:w-6"></span>
                  <span className="block w-6 h-0.5 bg-white transition-colors duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="text-prim">
            <Logo />
          </div>
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2 text-gray-500 hover:text-prim transition-colors hover:cursor-pointer"
            aria-label="Close mobile menu"
          >
            <Icon icon="material-symbols:close" width="24" height="24" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="px-6 py-4">
          <div className="space-y-2">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </div>
        </nav>

        {/* Mobile Let's Talk Button */}
        <div className="px-6 py-4">
          <Link
            href="/contact"
            onClick={() => setNavbarOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-prim text-white py-3 px-6 rounded-full font-chakrapetch font-semibold transition-all duration-300 hover:bg-dark group"
          >
            <span>Let&apos;s Talk</span>
            <Icon
              icon="tabler:arrow-right"
              width="20"
              height="20"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="px-6 py-4 border-t border-gray-200">
          <h3 className="font-chakrapetch text-prim font-semibold mb-3">Contact Info</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-500 font-chakrapetch">Phone</span>
              <br />
              <Link href="tel:+919876543210" className="text-prim font-medium hover:text-dark transition-colors">
                (+91) 98765 43210
              </Link>
            </div>
            <div>
              <span className="text-gray-500 font-chakrapetch">Email</span>
              <br />
              <Link href="mailto:info@jindal.com" className="text-prim font-medium hover:text-dark transition-colors">
                info@jindal.com
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="px-6 py-4 border-t border-gray-200">
          <h3 className="font-chakrapetch text-prim font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/" className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon icon="gg:facebook" width="20" height="20" />
            </Link>
            <Link href="https://www.instagram.com/" className="p-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
              <Icon icon="mdi:instagram" width="20" height="20" />
            </Link>
            <Link href="https://www.youtube.com/" className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Icon icon="mdi:youtube" width="20" height="20" />
            </Link>
            <Link href="https://www.linkedin.com/" className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
              <Icon icon="basil:linkedin-solid" width="20" height="20" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
    </>
  );
};

export default Header;