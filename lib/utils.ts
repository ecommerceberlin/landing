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

/**
 * Formats an object as a readable key-value string
 * @param obj The object to format
 * @returns A formatted string with one key-value pair per line
 */
export function formatObject(obj: Record<string, any>): string {
  return Object.entries(obj)
    .map(([key, value]) => {
      // Format the value based on its type
      let formattedValue = value;
      
      if (value === null || value === undefined) {
        formattedValue = 'N/A';
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          formattedValue = value.join(', ');
        } else {
          // For nested objects, indent them
          formattedValue = '{\n' + 
            Object.entries(value)
              .map(([k, v]) => `    ${k}: ${v}`)
              .join('\n') + 
            '\n}';
        }
      }
      
      return `*${key}*: ${formattedValue}`;
    })
    .join('\n');
}