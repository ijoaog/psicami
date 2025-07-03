import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"

    const variants = {
      primary: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500",
      secondary: "bg-slate-600 text-white hover:bg-slate-500 focus:ring-slate-500",
      outline:
        "border-2 border-slate-500 text-slate-300 hover:bg-slate-600 hover:border-slate-400 focus:ring-slate-500",
      ghost: "text-slate-300 hover:bg-slate-600 hover:text-white focus:ring-slate-500",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button }
