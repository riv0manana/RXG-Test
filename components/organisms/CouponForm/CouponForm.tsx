'use client'

import BoxContainer from '@/components/atoms/BoxContainer/BoxContainer'
import NavigationContainer from '@/components/molecules/NavigationContainer/NavigationContainer'
import { Form } from '@/components/ui/form'
import useOrder from '@/hooks/use-order'
import { useTranslations } from 'next-intl'
import React from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { orderForm } from '@/lib/forms'
import Input from '@/components/atoms/Input/Input'
import { Button } from '@/components/ui/button'

const CouponForm = () => {
    const t = useTranslations('components.organisms.CouponForm')
    const z = useTranslations('Common.zod')
    const { setStep, saveOrderInfo } = useOrder();

    const orderSchema = orderForm(z);

    const form = useForm<z.infer<typeof orderSchema>>({
        resolver: zodResolver(orderSchema),
        mode: 'onBlur',
        defaultValues: {
            model: 1,
        }
    })

    const handleSubmit = (data: z.infer<typeof orderSchema>) => {
        saveOrderInfo(data);
    }

    return (
        <NavigationContainer>
            <NavigationContainer.BackLink onClick={() => setStep(0)} label={t('breadcrumb')} />
            <h1 className='mx-auto mb-[48px] text-center py- flex-col items-center text-main-600 text-[22px] leading-[26px] px-8 max-w-[460px]'>
                {t.rich('title', {
                    span: (chunk) => <><br />{chunk}<br /></>
                })}
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8 mb-8'>
                    <BoxContainer title={t('box.identity')}>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <Input
                                label={t('form.email.label')}
                                control={form.control}
                                type='text'
                                name='from.email'
                                placeholder={t('form.email.placeholder')}
                            />
                            <Input
                                label={t('form.address.label')}
                                control={form.control}
                                type='text'
                                name='from.address'
                                placeholder={t('form.address.placeholder')}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <Input
                                label={t('form.postalCode.label')}
                                control={form.control}
                                type='text'
                                name='from.postalCode'
                                placeholder={t('form.postalCode.placeholder')}
                            />
                            <Input
                                label={t('form.city.label')}
                                control={form.control}
                                type='text'
                                name='from.city'
                                placeholder={t('form.city.placeholder')}
                            />
                        </div>
                    </BoxContainer>
                    <BoxContainer title={t('box.info-to')} step={2}>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <Input
                                label={t('form.name.label')}
                                control={form.control}
                                type='text'
                                name='to.name'
                                placeholder={t('form.name.placeholder')}
                            />
                            <Input
                                label={t('form.fromName.label')}
                                control={form.control}
                                type='text'
                                name='to.fromName'
                                placeholder={t('form.fromName.placeholder')}
                            />
                        </div>
                    </BoxContainer>
                    <BoxContainer title={t('box.models')} step={3} />
                    <div className='flex justify-center'>
                        <Button type='submit'>
                            {t('form.submit.label')}
                        </Button>
                    </div>
                </form>
            </Form>
        </NavigationContainer>
    )
}

export default CouponForm