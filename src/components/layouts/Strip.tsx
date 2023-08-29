import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type Strips = {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'white';
  border?: 'default' | 'primary' | 'white';
};

const stripVarian = cva('text tracking-[1.6px] font-semibold flex items-center gap-2 text-sm', {
  variants: {
    variant: {
      default: 'text-white/40',
      primary: 'text-primary',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const borderVariant = cva('border-2 border-b w-7', {
  variants: {
    border: {
      default: 'border-white/40',
      primary: 'border-primary',
      white: 'border-white',
    },
  },
  defaultVariants: {
    border: 'default',
  },
});

export default function Strip({ children, variant, border }: Strips) {
  return (
    <div className={cn(stripVarian({ variant }))}>
      <div className={cn(borderVariant({ border }))} />
      <p>{children}</p>
    </div>
  );
}
