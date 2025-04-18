import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-6 py-2',
        icon: 'h-10 w-10',
        lg: 'h-12 rounded-md px-8 text-base',
        sm: 'h-9 rounded px-4 text-xs',
      },
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 font-sans',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 font-sans',
        ghost: 'hover:bg-muted hover:text-accent-foreground font-sans',
        link: 'text-primary underline-offset-4 hover:underline font-serif',
        outline:
          'border border-border bg-background hover:bg-muted hover:text-accent-foreground font-sans',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 font-sans',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
}

export { Button, buttonVariants }
