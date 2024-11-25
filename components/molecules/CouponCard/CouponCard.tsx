import CouponBuyBtn from "@/components/atoms/CouponBuyBtn/CouponBuyBtn";
import { cn, formatAmount } from "@/lib/utils";
import { Gift } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export type CouponCardProps = {
    item: Coupon;
    className?: string;
    isLCP?: boolean;
}

const CouponCard = ({
    item,
    className,
    isLCP
}: CouponCardProps) => {
    const t = useTranslations('components.molecules.CouponCard')

    return (
        <li className={cn("list-none w-full max-w-[385px] h-[520px] rounded-[20px] border border-custom-lightgray hover:border-white transition-all ease-in-out bg-white hover:shadow-[0px_60px_50px_#0000001A]", className)}>
            <Image
            loading={isLCP ? 'eager' : 'lazy'}
            priority={isLCP}
                className="w-full h-[268px] object-contain"
                width={385}
                height={268}
                src={item.imgUrl}
                alt={item.title}
            />
            <div className="flex flex-col items-center gap-4 px-[30px] pt-6">
                <h3 className="text-main-600 text-[22px] font-medium leading-[26px]">{item.title}</h3>
                <p className="line-clamp-3 text-ellipsis overflow text-center text-custom-black">{item.description}</p>
                <div className="flex items-center justify-center gap-[10px] bg-main-400 font-bold text-main-700 leading-[19px] w-full h-[30px]">
                    <Gift className="h-5 text-main-600" />
                    <span>{t('startAt')}</span> 
                    <span className="text-[20px]">{t('price', { price: formatAmount(item.price)})}</span> 
                </div>
                <div className="flex items-center gap-[100px] justify-between">
                    <span className="text-custom-black">{t('pax', { pax: item.pax})}</span>
                    <CouponBuyBtn item={item} />
                </div>
            </div>
        </li>
    )
}

export default CouponCard