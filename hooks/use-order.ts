import { signal, computed} from '@preact/signals-react';
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
    item?: Coupon,
    selectedPrice?: number;
}

const order = signal<Coupon>()
const step = signal<number>(0);
const info = signal<OrderInfo>();
const quatity = signal<number>(1);
const price = signal<number>();
const total = computed(() => (price.value || order.value?.price || 0) * (quatity.value || 1));

const useOrder = (item?: Coupon) => {
    useSignals();

    const setStep = (value: number) => step.value = value;

    const addQty = () => {
        quatity.value += 1;
    }

    const reduceQty = () => {
        if (quatity.value > 0) {
            quatity.value -= 1;
        }
    }

    const setPrice = (value: number) => {
        price.value = value;
    }

    const saveOrderTotal = () => {
        setStep(1);
    }

    const saveOrderInfo = (value: OrderInfo) => {
        info.value = value;
    }

    useEffect(() => {
        if (item && !order.value) {
            order.value = item;
        }
    }, [item, order.value])

    return {
        quatity: quatity.value,
        info: info.value,
        price: price.value,
        total: total.value,
        step: step.value,
        setStep,
        setPrice,
        reduceQty,
        addQty,
        saveOrderTotal,
        saveOrderInfo
    }
}

export default useOrder;