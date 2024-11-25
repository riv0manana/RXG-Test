'use client'

/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */


import { useToast } from "@/hooks/use-toast";

type ToastMsg = {
    title: string;
    description?: string;
    errorTitle: string;
    errorDescription?: string;
}

const useActionToast = () => {
    const { toast } = useToast();

    const runToast = <T>(
        [error, response]: ActionResponse<T>,
        msg: ToastMsg,
        onSuccessCb?: () => void
    ) => {
        if (error) {
            toast({
                title: msg.errorTitle,
                description: msg.errorDescription,
                variant: 'destructive'
            });
        }
        if (response) {
            toast({
                title: msg.title,
                description: msg.description
            })
            onSuccessCb?.();
        }
    }

    return runToast;
}

export default useActionToast