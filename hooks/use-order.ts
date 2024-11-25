import { signal} from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

type OrderInfo = {
    model: 1 | 2 | 3;
    from: {
        email: string;
        postalCode?: string;
        address?: string;
        city?: string;
    },
    to: {
        name: string;
        fromName: string;
    }
}

type OrderStore = {
    info?: OrderInfo,
    item?: Coupon,
    total?: number,
    quatity?: number,
    paid?: boolean;
    step?: number;
    selectedPrice?: number;
}

const order = signal<OrderStore>({})
const step = signal<number>(3);

const useOrder = (item?: Coupon) => {
    useSignals();

    const setStep = (value: number) => step.value = value;

    const addQty = () => {
        if (order.value.quatity) {
            order.value.quatity += 1;
        } else {
            order.value.quatity === 1;
        }
    }

    const reduceQty = () => {
        if (order.value.quatity && order.value.quatity > 0) {
            order.value.quatity -= 1;
        }
    }

    const setPrice = (value: number) => {
        order.value.selectedPrice = value;
    }

    const saveOrderTotal = () => {
        order.value.total = (order.value.selectedPrice || order.value.item?.price || 0) * (order.value.quatity || 1);
        setStep(1);
    }

    const saveOrderInfo = (info: OrderInfo) => {
        order.value.info = info;
    }

    useEffect(() => {
        if (item && !order.value.item) {
            order.value.item = item;
        }
    }, [item, order.value.item])

    return {
        order: order.value,
        setStep,
        setPrice,
        step: step.value,
        reduceQty,
        addQty,
        saveOrderTotal,
        saveOrderInfo
    }
}

export default useOrder;