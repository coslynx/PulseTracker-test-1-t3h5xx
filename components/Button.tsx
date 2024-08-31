import React from "react";
import { ButtonProps } from "@types/types";
import cn from "classnames";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    secondary:
      "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",
    outline:
      "border border-blue-500 hover:border-blue-700 text-blue-500 font-bold py-2 px-4 rounded",
  };

  return (
    <button
      className={cn(
        variants[variant],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;