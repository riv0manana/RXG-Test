/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import { useTranslations } from "next-intl"
import Image from "next/image"

const BankCardLogo = () => {
    const t = useTranslations('components.atoms.BankCardLogo')
    return (
        <div className="flex flex-col items-center md:flex-row gap-3">
            <span>{t('label')}</span>
            <div className="flex gap-4">
                <Image
                    className="h-auto" width={54} height={32}
                    src='/assets/img/visa.svg'
                    alt='Logo'
                />
                <Image
                    className="h-auto" width={54} height={32}
                    src='/assets/img/mastercard.svg'
                    alt='Logo'
                />
                <Image
                    className="h-auto" width={54} height={32}
                    src='/assets/img/carte-bleue.svg'
                    alt='Logo'
                />
                <Image
                    className="h-auto" width={54} height={32}
                    src='/assets/img/stripe.svg'
                    alt='Logo'
                />
            </div>
        </div>

    )
}

export default BankCardLogo