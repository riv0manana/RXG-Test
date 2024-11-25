'use client'

import NavigationContainer from "@/components/molecules/NavigationContainer/NavigationContainer";
import useOrder from "@/hooks/use-order";
import { cn, formatAmount } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export type CouponDetailProps = {
    item: Coupon;
    className?: string;
}

const CouponDetail = ({
    item,
    className
}: CouponDetailProps) => {
    const t = useTranslations('components.organisms.CouponDetail')

    const { order } = useOrder(item);

    return (
        <NavigationContainer className={cn('', className)}>
            <NavigationContainer.BackLink link="/" label={t('breadcrumb')} className="block" />
            <div className="flex flex-col md:flex-row md:justify-between gap-8 lg:gap-[86px] mb-7">
                <Image
                    alt={item.title}
                    src={item.imgUrl}
                    width={600}
                    height={460}
                    loading="lazy"
                    className="rounded-[20px] w-full h-[170px] md:max-w-[400px] lg:max-w-[600px] object-contain md:h-auto"
                />
                <div className="flex-1">
                    <h1 className="mb-10">{item.title}</h1>
                    <div></div>
                    <span className="inline-block bg-main-400 text-main-700 leading-[19px] px-8 mb-5 font-medium py-1">
                        {t('basket.pax', { pax: item.pax })}
                    </span>
                    <p className="text-custom-black mb-9">
                        {item.longDescription}
                    </p>
                    <div className="flex justify-between">
                        <div className="flex-col items-center">
                            <div className="text-center text-[22px] leading-[26px] text-main-600 font-medium mb-1">
                                {t('basket.total', { total: formatAmount(order.total || item.price) })}
                            </div>
                            <span className="inline-block bg-main-400 text-main-700 leading-[19px] px-8 mb-5 font-medium py-1">
                                {t('basket.pax', { pax: item.pax })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mb-5">{t('description')}</h2>
                <p className="text-custom-black">
                    {item.description}
                </p>
            </div>
        </NavigationContainer>
    )
}

export default CouponDetail