import CouponCard from "@/components/molecules/CouponCard/CouponCard";
import { cn } from "@/lib/utils";

export type CouponListingProps = {
    total?: number;
    items?: Coupon[];
    className?: string;
}

const CouponListing = ({
    total = 0,
    items = [],
    className,
}: CouponListingProps) => {
    return (
        <div className={cn("container !px-0 flex flex-wrap gap-[32px] justify-center", className)}>
            {items.map((item, idx) => (
                <CouponCard isLCP={idx === 0} item={item} key={item.id} />
            ))}
        </div>
    )
}

export default CouponListing