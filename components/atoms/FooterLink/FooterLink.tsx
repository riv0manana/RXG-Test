/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import { useTranslations } from "next-intl"
import Link from "next/link"

const FooterLink = () => {
    const t = useTranslations('components.atoms.FooterLink')
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-1 text-[13px] leading-[15px]">
            <Link href={t('legal.link')}>{t('legal.label')}</Link>
            <span className="hidden md:inline">|</span>
            <Link href={t('privacy-policy.link')}>{t('privacy-policy.label')}</Link>
            <span className="hidden md:inline">|</span>
            <Link href={t('cgu.link')}>{t('cgu.label')}</Link>
        </div>
    )
}

export default FooterLink