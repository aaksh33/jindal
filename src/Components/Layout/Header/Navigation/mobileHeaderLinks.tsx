"use client";
import React, { useState } from "react";
import { HeaderItem } from "@/type/menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleToggle = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="w-full">
      {/* Main Item */}
      {item.submenu ? (
        <div
          className="flex items-center justify-between w-full py-3 px-4 text-prim hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
          onClick={handleToggle}
        >
          <span className="font-medium">{item.label}</span>
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width="20"
            height="20"
            className={`transition-transform duration-300 ${
              submenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      ) : (
        <Link
          href={item.href}
          className={`block w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            path === item.href
              ? "text-white bg-prim"
              : "text-prim hover:bg-gray-50"
          }`}
        >
          {item.label}
        </Link>
      )}

      {/* Submenu */}
      {item.submenu && submenuOpen && (
        <div className="ml-4 mt-2 space-y-1">
          {item.submenu.map((subItem: { href: string; label: string }, index: number) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                path === subItem.href
                  ? "text-white bg-dark"
                  : "text-gray-600 hover:text-prim hover:bg-gray-50"
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

export default MobileHeaderLink;

