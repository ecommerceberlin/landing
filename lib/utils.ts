import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uniqueItems<T>(items: T[], key: keyof T) {
  return Array.from(
    new Map(items.map(item => [item[key], item])).values()
  );
}