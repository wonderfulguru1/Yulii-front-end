"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import {useLocation, useNavigate} from "react-router-dom"

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
};

export const SidebarItem = ({ label, href}:SidebarItemProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = 
    (location.pathname === "/" && href === "/customer") ||
    location.pathname === href || 
    location.pathname?.startsWith(`${href}/merchant`);

    const onClick = () => {
        navigate(href)
    }

    
    return (
        <Button
        onClick={onClick}
        type="button"
        className={cn(
            "flex flex-col  items-center justify-center  text-[#a1a1a0] text-sm font[500]  transition-all hover:text-[#5f2d41] hover:bg-[#fff]",
            isActive && "text-[#5f2d41] font-bold   hover:text-[#5f2d41] "
        )}
        >

        <div className="flex items-center gap-x-2 text-lg ">
            {label}
        </div>
        <div
        className={cn(
            " opacity-0 border-2 border-[#5f2d41] w-full transition-all",
            isActive && "opacity-100"
        )}
        />

        </Button>
    )
}