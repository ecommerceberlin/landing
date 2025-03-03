import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { basePriceCurrency } from '@/settings/app_rules'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uniqueItems<T>(items: T[], key: keyof T) {
  return Array.from(
    new Map(items.map(item => [item[key], item])).values()
  );
}

export const formatCurrency = (
  amount: number, 
  currency = 'EUR', 
  locale = 'de-DE'
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(amount)
}