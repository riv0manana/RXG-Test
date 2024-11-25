/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { ReactNode } from "react"

type SocialItemProps = {
    children: ReactNode;
    className?: string;
}

const SocialItem = ({ children, className }: SocialItemProps) => (
    <div className={cn("bg-main-400 text-main-600 w-[52px] aspect-square grid place-items-center rounded-full", className)}>
        {children}
    </div>
)

const SocialLinks = () => {
    return (
        <div className="flex flex-col items-center md:flex-row gap-3">
            <div className="flex gap-4">
                <SocialItem className="bg-main-600">
                    <Facebook className="fill-white stroke-main-400 w-[20px]" />
                </SocialItem>
                <SocialItem>
                    <Youtube className="fill-main-400 w-[20px]"/>
                </SocialItem>
                <SocialItem>
                    <Instagram  className="fill-main-400 w-[20px]"/>
                </SocialItem>
                <SocialItem>
                    <Linkedin className="fill-main-400 w-[20px]"/>
                </SocialItem>
            </div>
        </div>

    )
}

export default SocialLinks