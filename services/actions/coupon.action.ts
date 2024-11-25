'use server'

import { handleAppError, parseResponse } from "@/lib/utils"
import CouponService from "@/services/coupon.service";
import { unstable_cache } from "next/cache";

export const FetchCoupon = unstable_cache(async (offset = 0, limit = 6) => {
    try {
        const res = await CouponService.getCoupons(offset, limit);
        return parseResponse(res)
    } catch (err) {
        return handleAppError(err);
    }
}, ['coupons'], { tags: ['coupons']});