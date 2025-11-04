"use client";

import { HeaderItem } from "@/type/menu";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = () => {
        if (item.submenu) setSubmenuOpen(true);
    };
    const handleMouseLeave = () => setSubmenuOpen(false);

    return (
        <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={item.href}
                className={`text-base font-medium flex items-center transition-colors duration-300 ${
                    path === item.href 
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                }`}
            >
                {item.label}
                {item.submenu && (
                    <Icon
                        icon="iconamoon:arrow-down-2-duotone"
                        width="18"
                        height="18"
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                    />
                )}
            </Link>

            {item.submenu && (
                <div className="absolute left-0 top-full mt-2 w-60 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((subItem: any, index: number) => (
                        <Link key={index}
                            href={subItem.href}
                            className={`block px-4 py-3 text-sm transition-colors ${
                                path === subItem.href 
                                    ? "text-white bg-prim" 
                                    : "text-gray-700 hover:bg-prim hover:text-white"
                            }`}
                        >
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderLink;
