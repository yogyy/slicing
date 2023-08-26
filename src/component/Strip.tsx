import { cn } from '@/libs/utils';
import { ReactNode } from 'react';

type Strips = {
  children: ReactNode;
  className?: string;
};
export default function Strip({ children, className }: Strips) {
  return (
    <div className={cn('text tracking-[1.6px] flex items-center gap-2 text-sm', className)}>
      <div className="border-2 border-b w-7" />
      {children}
    </div>
  );
}
