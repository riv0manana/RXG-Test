/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */


import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image'
import Link from 'next/link';
import React from 'react'


const Logo = ({
    className,
    ...props
}: Omit<ImageProps, 'src' | 'alt'>) => {
    return (
        <Link href="/" aria-label='Logo'>
            <Image {...props}
                className={cn('h-auto', className)} width={505} height={152}
                src='/assets/img/logo.svg'
                alt='Logo'
            />
        </Link>
    )
}

export default Logo