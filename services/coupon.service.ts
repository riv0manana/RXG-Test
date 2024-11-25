import { parseSlug } from '@/lib/utils';
import Coupons from '@/services/mock/coupons.json'

class CouponService {
    static getCoupons = async (offset = 0, limit = 10): Promise<ArrayResponse<Coupon>> => {
        const total = Coupons.length || 0;
        const data = Coupons.slice(offset, offset + limit);
        return {
            total,
            data
        } 
    }

    static getCouponsBySlug = async (slug: string): Promise<Coupon | undefined> => {
        return Coupons.find(item => parseSlug(item.title) === slug);
    }
}

export default CouponService;