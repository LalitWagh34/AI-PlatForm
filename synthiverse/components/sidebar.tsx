"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessagesSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";

const montserrat = Montserrat({
        weight:"600" ,
        subsets:["latin"]
    });

const routes =[
    {
        label:"DashBoard",
        icon:LayoutDashboard,
        href: "/dashboard",
        color:"text-sky-500"
    },
    {
        label:"Convesation",
        icon:MessagesSquare,
        href: "/consversation",
        color:"text-violet-500"
    },
    {
        label:"Image Generator",
        icon:ImageIcon,
        href: "/image",
        color:"text-orange-500"
    },
    {
        label:"video Generator",
        icon:VideoIcon,
        href: "/video",
        color:"text-pink-500"
    },
    {
        label:"Music Generator",
        icon:MusicIcon,
        href: "/music",
        color:"text-emerald-500"
    },
    {
        label:"Code Generator",
        icon:CodeIcon,
        href: "/code",
        color:"text-cyan-300"
    },
    {
        label:"Settings",
        icon:Settings,
        href: "/setting",
        color:"text-purple-900"
    }
];

    const SideBar = () =>{

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
              <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4 ">
                        <Image 
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn ("text-2xl font-bold" ,montserrat.className)}>
                        Synthiverse
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) =>(
                        <Link
                            href={route.href}
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition">
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3" , route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
              </div>
        </div>
    );
}
export default SideBar