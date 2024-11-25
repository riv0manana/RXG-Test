/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import Logo from "@/components/atoms/Logo/Logo";
import FooterLink from "@/components/atoms/FooterLink/FooterLink";
import BankCardLogo from "@/components/atoms/BankCardLogo/BankCardLogo";
import SocialLinks from "@/components/atoms/SocialLinks/SocialLinks";

export type FooterProps = {
    children?: ReactNode;
    className?: string;
}

const Footer = ({
    children,
    className
}: FooterProps) => {
    const t = useTranslations('components.molecules.Footer');
    return (
        <footer className={cn("container py-8 text-[13px] leading-[15px] space-y-[14px]", className)}>
            <div className="flex flex-col lg:flex-row md:justify-between items-center border-y border-main-500 py-[30px] gap-5">
                <Logo className="w-[200px]" />
                <div className="flex flex-col gap-[38px] md:flex-row md:justify-between items-center">
                    <BankCardLogo />
                    <span className="hidden sm:inline h-8 border-l border-main-600"></span>
                    <SocialLinks />
                </div>
            </div>

            <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between items-center">
                <span>{t('publisher')}</span>
                <FooterLink />
            </div>
        </footer>
    )
}

export default Footer