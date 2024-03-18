"use client";


import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideBar from "./sidebar";
import { useEffect, useState } from "react";
const MobileSidebar = () =>{
    const [isMounted , setisMounted] = useState(false);
    useEffect (() =>{
        setisMounted(true);
    },[])
    if(!isMounted){
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"} size={"icon"} className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <SideBar/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;