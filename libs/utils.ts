import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function convertFirstLetterToUpperCase(data: string) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}
