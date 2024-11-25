/*
 * Project Name: RXG Test - Bon Coupon
 * Author: Sarindramalala Rivomanana MANDANIAINA | contact@riv0manana.dev
 * Description: Interview test - React / Next.JS - For Rouge Hexagone
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum UiVariant {
  'default' = 'bg-slate-600',
  'warning' = 'bg-yellow-500',
  'destructive' = 'bg-red-500',
  'success' = 'bg-green-600',
  'important' = 'bg-blue-500',
  'disabled' = 'bg-gray-400',
}

export const variants = (value: keyof typeof UiVariant) => UiVariant[value];

export const isFormSafe = <T extends z.AnyZodObject>(data: any, form: T) => {
  try {
    const safeForm = form.safeParse(data);
    return safeForm.success;
  } catch {
    return false;
  }
}

export function formatAmount(amount: number): string {
  return `${amount.toLocaleString('fr-Fr', {
    minimumFractionDigits: 2,
  })}`
}

export class ActionError extends Error {
  constructor(message: ActionStatusMsg, code: StatusCode) {
    super(message);
    this.name = 'ActionError';
    this.cause = {
      code,
    }
  }
}

export const parseResponse = <T>(value: T): ActionResponse<T> => [, JSON.parse(JSON.stringify(value))];

export const parseError = (message: ActionStatusMsg, code: StatusCode): ActionResponse<undefined> => {
  const error = {
    message,
    statusCode: code,
    status: code,
  }
  return [error];
}

export const handleAppError = (err: any) => {
  if (err instanceof ActionError) {
    return parseError(err.message as ActionStatusMsg, (err.cause as any)?.code! as StatusCode)
  } else {
    return parseError(err?.message || 'unknow_server_error', err?.code || 500);
  }
}

export const readLS = <T>(key: string) => {
  if (typeof window !== 'undefined') {
    const data = window.localStorage.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data) as T;
    } catch {
      return null;
    }
  }
  return null;
}

export const writeLS = <T>(key: string, data: T) => {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch { }
  }
}

export const deepCompareObject = <T>(first?: T, second?: T) => {
  try {
    return JSON.stringify(first) === JSON.stringify(second);
  } catch {
    return false;
  }
}