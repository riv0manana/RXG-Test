'use client'

import useOrder from "@/hooks/use-order"
import CouponDetail from "@/components/organisms/CouponDetail/CouponDetail"
import CouponForm from "@/components/organisms/CouponForm/CouponForm"

export type StepperProps = {
    coupon: Coupon
}

const Stepper = ({
    coupon
}: StepperProps) => {
    const { step } = useOrder(coupon)
    
    switch(step) {
        case 0:
            return <CouponDetail item={coupon}/>
        case 1:
            return <CouponForm />;
        case 0:
        default:
            return <CouponDetail item={coupon}/>;
    }
}

export default Stepper