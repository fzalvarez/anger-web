import type { ReactNode } from "react";
import { Button } from "#components/ui/button";
import { cn } from "#lib/utils";

type AppButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "hero";
type AppButtonSize = "sm" | "md" | "lg";

type AppButtonProps = Omit<React.ComponentProps<typeof Button>, "variant" | "size"> & {
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
};

const variantClasses: Record<AppButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-container",
  secondary: "bg-secondary text-on-secondary hover:bg-secondary-container",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary",
  ghost: "bg-transparent text-primary hover:bg-surface-container-low",
  hero: "bg-secondary text-on-primary hover:bg-secondary-container shadow-lg",
};

const sizeClasses: Record<AppButtonSize, string> = {
  sm: "h-8 px-3 text-label-md",
  md: "h-10 px-4 text-label-md",
  lg: "h-12 px-6 text-body-md",
};

const buttonSizeMap: Record<AppButtonSize, "sm" | "default" | "lg"> = {
  sm: "sm",
  md: "default",
  lg: "lg",
};

export function AppButton({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  ...props
}: AppButtonProps) {
  return (
    <Button
      variant="ghost"
      size={buttonSizeMap[size]}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all active:scale-95",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        variant === "hero" && "px-10 py-5 text-label-md shadow-lg",
        className,
      )}
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </Button>
  );
}
