'use client'

import { Button, ButtonProps } from "@/components/ui/button"
import { parseSlug } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

type PropsOmit = 'onClick' | 'variant' | 'children';

export type CouponBuyBtnProps = Omit<ButtonProps, PropsOmit> & {
    item: Coupon
}

const CouponBuyBtn = ({
    item,
    ...props
}: CouponBuyBtnProps) => {
    const t = useTranslations('components.atoms.CouponBuyBtn')

    return (
        <Link aria-label={item.title} href={`/${parseSlug(item.title)}`}>
            <Button {...props} variant="outline">
                {t('label')}
            </Button>
        </Link>
    )
}

export default CouponBuyBtn