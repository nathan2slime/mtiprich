import { type ClassValue, clsx } from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export type AppChildren = {
  children: ReactNode;
};
