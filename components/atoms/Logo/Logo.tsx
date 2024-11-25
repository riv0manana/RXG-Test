/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */


import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image'
import React from 'react'


const Logo = ({
    className,
    ...props
}: Omit<ImageProps, 'src' | 'alt'>) => {
    return (
        <Image {...props}
            className={cn('h-auto', className)} width={505} height={152}
            src='/assets/img/logo.svg'
            alt='Logo'
        />
    )
}

export default Logo