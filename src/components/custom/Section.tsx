import { cn } from '@/lib/utils';
import * as React from 'react';
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'px-section-sm md:px-section-md max-w-screen-2xl mx-auto space-y-16',
          className,
        )}
        {...props}
      />
    );
  },
);

Section.displayName = 'Section';

export { Section };
