'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

type ProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}