/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React from "react";

type ButtonProps = {
  variant?: "default" | "contained" | "outlined" | "white-contained";
  children?: React.ReactNode;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  onClick,
  className,
  isLoading,
  type,
  icon,
  ...props
}) => {
  const buttonClassNames = `
           w-fit rounded-[6px] px-3 text-xs cursor-pointer transition duration-500
           ${
             variant === "default" &&
             "bg-[#F2F2F2] text-gray-700 h-[46px] hover:bg-[#e9e9e9]"
           }
           ${
             variant === "contained" &&
             "bg-primary h-[27px] text-sm text-[#F9F9F9] hover:!bg-[#0505c1]"
           }
             ${
               variant === "outlined" &&
               "border border-primary h-[27px] text-sm text-primary font-bold"
             }
           ${className && className}
       `;
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type={type}
      className={buttonClassNames}
      {...props}
    >
      <Box className="flex justify-center items-center gap-1">
        {icon && <span>{icon}</span>}
        {children}
      </Box>
    </button>
  );
};

export default Button;
