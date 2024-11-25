import { FetchCoupons } from "@/services/actions/coupon.action"
import CouponListing from "@/components/organisms/CouponListing/CouponListing"

export type TCouponListingProps = {
    offset?: number,
    limit?: number,
}

const TCouponListing = async ({
    offset = 0,
    limit = 6
}: TCouponListingProps) => {
    const [, res] = await FetchCoupons(offset, limit)
    return (
        <CouponListing items={res?.data} total={res?.total} />
    )
}

export default TCouponListing