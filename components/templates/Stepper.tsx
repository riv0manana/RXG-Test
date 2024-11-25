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

    switch (step) {
        case 1:
            return <CouponForm />;
        case 2:
            return <div className="flex justify-center">Pending</div>
        case 3:
            return <div className="flex justify-center">Pending</div>
        case 0:
        default:
            return <CouponDetail item={coupon} />;
    }
}

export default Stepper