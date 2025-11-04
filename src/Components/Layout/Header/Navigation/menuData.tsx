import { HeaderItem } from "@/type/menu";

export const headerData: HeaderItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Pages",
        href: "#",
        submenu: [
            { label: "About Us", href:"/about"},
            { label: "Team", href:"/team"},
            { label: "Faq", href:"/faq"},
            { label: "Contact", href:"/contact"},
        ]
    },
     {
        label: "Services",
        href: "#",
        submenu: [
            { label: "Services List", href:"/services"},
            { label: "Services Details", href:"/service-details"},
        ]
    },
       {
        label: "Portfolio",
        href: "/portfolio",
        submenu: [
            { label: "Portfolio", href:"/portfolio"},
            { label: "Portfolio Details", href:"/portfolio/portfolio-details"},
        ]
    },
       {
        label: "Blog",
        href: "/blog",
        submenu: [
            { label: "Blog", href:"/blog"},
            { label: "Blog Details", href:"/blog/blog-details"},
        ]
    },
     { label: "Contact", href:"/contact"},
]