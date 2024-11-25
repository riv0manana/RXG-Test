/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */


import { z } from "zod";

// XSS protection regex
const xssRegex = /<.*?(script|on\w+|style|iframe|form|img|src|href|data|expression|alert).*?>|<\/.*?(script|iframe).*?>/gi;

/**
 * Check XSS patern
 */
const isXSSSafe = (input?: string): boolean => {
    return !input ? true : !xssRegex.test(input);
};

const safeString = (str: z.ZodString, t?: any) => str
    .refine(isXSSSafe, { message: t?.('xss') })

export const safeOptionalString = (str: z.ZodOptional<z.ZodString>, t?: any) => str
    .refine(isXSSSafe, { message: t?.('xss') })

export const zodString = (t?: any) => z.string({
    required_error: t?.('required')
})

export const zodOptionalString = () => z.string().optional();

export const zodPassword = (t?: any) => safeString(zodString(t)
    .regex(/^.{8,}$/, { message: t?.('password.minus', { min: 8 }) })
    .regex(/.*[a-z].*/, { message: t?.('password.minus') })
    .regex(/.*[A-Z].*/, { message: t?.('password.capital') })
    .regex(/.*\d.*/, { message: t?.('password.number') })
    .regex(/.*[@$!%*?&].*/, {
        message: t?.('password.special')
    }),
    t);

export const zodPhone = (t?: any) => safeString(zodString(t)
    .regex(/^0\d{9}$/, { message: t?.('phone') }), t);


