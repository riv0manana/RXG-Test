'use client'

import { Button, ButtonProps } from "@/components/ui/button"
import { useTranslations } from "next-intl";

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
        <Button {...props} variant="outline">
            {t('label')}
        </Button>
    )
}

export default CouponBuyBtn