import React from "react";
import Logo from "../Logo";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface SidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <>
      {/* Overlay */}
      {isOpenSidebar && (
        <div 
          className="hidden lg:block fixed inset-0 bg-black/20 z-[9998] transition-colors duration-75"
          onClick={() => setIsOpenSidebar(false)}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`hidden lg:block fixed top-0 right-0 h-screen lg:w-[35%] xxl:w-[40%] z-[9999] shadow-2xl bg-dark-blur backdrop-blur-lg p-10 rounded-tl-3xl rounded-bl-3xl transform transition-transform duration-500 ease-in-out overflow-y-scroll ${
          isOpenSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
      {/* Header section */}
      <div className="text-white flex justify-between items-center w-full">
        <Logo />
        <div
          onClick={() => setIsOpenSidebar(false)}
          className="close-btn group bg-white/20 text-white cursor-pointer flex items-center justify-center 
          w-10 h-10 rounded-md shadow-md hover:bg-prim hover:text-white transition duration-300"
        >
          <Icon
            icon="material-symbols:close-rounded"
            width="26"
            height="26"
            className="transition-transform duration-500 group-hover:rotate-90"
          />
        </div>
      </div>

      {/* Content */}
      <p className="text-pera-light py-8">
        We are committed to delivering innovative solutions that drive growth and add value to our clients.
        With a team of experienced professionals and a passion for excellence.
      </p>

      {/* Search */}
      <h3 className="font-chakrapetch pb-3">Search Now!</h3>
      <form className="search-box relative flex">
        <input
          type="text"
          placeholder="Search Here..."
          className="bg-white ps-3 h-[45px] w-full rounded-l-md outline-none"
          required
        />
        <button
          type="submit"
          className="absolute right-0 h-full border border-border px-4 bg-prim text-white rounded-r-md cursor-pointer"
        >
          <Icon icon="ei:search" width="25" height="25" />
        </button>
      </form>

      {/* Contact Info */}
      <h3 className="font-chakrapetch pb-3 pt-8">Contact Info</h3>
      <div className="space-y-3">
        <div>
          <span className="text-pera-light font-chakrapetch">Phone</span>
          <br />
          <Link href="/contact" className="text-white font-unbounded font-normal">
            (+91) 98765 43210
          </Link>
        </div>
        <div>
          <span className="text-pera-light font-chakrapetch">Email</span>
          <br />
          <Link href="/contact" className="text-white font-unbounded font-normal">
            info@jindal.com
          </Link>
        </div>
        <div>
          <span className="text-pera-light font-chakrapetch">Address</span>
          <br />
          <Link href="/contact" className="text-white font-unbounded font-normal">
            D-3, Hauz Khas, Saket, New Delhi-110016
          </Link>
        </div>
      </div>

      {/* Social Icons */}
      <h3 className="font-chakrapetch pb-3 pt-8">Follow Us</h3>
      <div className="social-icons flex gap-3">
        <Link href="https://www.facebook.com/">
          <Icon
            icon="gg:facebook"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-blue-600 transition duration-500 hover:-translate-y-1"
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <Icon
            icon="mdi:instagram"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-pink-500 transition duration-500 hover:-translate-y-1"
          />
        </Link>
        <Link href="https://www.youtube.com/">
          <Icon
            icon="mdi:youtube"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-red-600 transition duration-500 hover:-translate-y-1"
          />
        </Link>
        <Link href="https://www.linkedin.com/">
          <Icon
            icon="basil:linkedin-solid"
            width="30"
            height="30"
            className="text-white p-1 rounded-sm cursor-pointer bg-blue-400 transition duration-500 hover:-translate-y-1"
          />
        </Link>
      </div>
      </div>
    </>
  );
};

export default Sidebar;





