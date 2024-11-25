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
}

export default CouponService;