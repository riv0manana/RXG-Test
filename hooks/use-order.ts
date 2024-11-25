import { computed, signal} from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { useEffect } from 'react';

type OrderInfo = {
    model: 1 | 2 | 3;
    from: {
        name: string;
    },
    to: {
        name: string;
    }
}

type OrderStore = {
    info?: OrderInfo,
    item?: Coupon,
    total?: number,
    quatity?: number,
    paid?: boolean;
    step?: number;
}

const order = signal<OrderStore>({})
const step = signal<number>(3);


const useOrder = (item?: Coupon) => {
    useSignals();

    const setStep = (value: number) => step.value = value;

    useEffect(() => {
        if (item && !order.value.item) {
            order.value.item = item;
        }
    }, [item, order.value.item])

    return {
        order: order.value,
        setStep,
        step: step.value,
    }
}

export default useOrder;