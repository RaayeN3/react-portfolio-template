import React from "react";
import { cn } from "../../lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium",
        variant === "ghost" ? "bg-transparent" : "bg-primary text-white",
        className as string
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
