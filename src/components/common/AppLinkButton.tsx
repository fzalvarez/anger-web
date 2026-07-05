import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "#lib/utils";

type AppLinkButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "hero";
type AppLinkButtonSize = "sm" | "md" | "lg";

type AppLinkButtonProps = Omit<LinkProps, "className"> & {
  variant?: AppLinkButtonVariant;
  size?: AppLinkButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<AppLinkButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-container",
  secondary: "bg-secondary text-on-secondary hover:bg-secondary-container",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary",
  ghost: "bg-transparent text-primary hover:bg-surface-container-low",
  hero: "bg-secondary text-on-primary hover:bg-secondary-container shadow-lg",
};

const sizeClasses: Record<AppLinkButtonSize, string> = {
  sm: "h-8 px-3 text-label-md",
  md: "h-10 px-4 text-label-md",
  lg: "h-12 px-6 text-body-md",
};

export function AppLinkButton({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  ...props
}: AppLinkButtonProps) {
  return (
    <Link
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
    </Link>
  );
}