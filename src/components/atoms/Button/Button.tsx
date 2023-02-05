import React, { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "icon";
  fullWidth?: boolean;
  leadingIcon?: string;
}

export function Button({
  onClick,
  variant,
  leadingIcon,
  fullWidth,
  children,
}: ButtonProps) {
  const className = clsx({
    "w-full border-2 rounded-lg py-1.5 px-4 uppercase min-w-[10rem] my-3": true,
    "border-solid border-feldgrau bg-feldgrau text-white hover:bg-smoke hover:border-smoke":
      variant === "primary" || !variant,
    "border-solid border-quickSilver bg-transparent text-quickSilver hover:border-electricBlue hover:text-electricBlue":
      variant === "secondary",
    "sm:w-fit": !fullWidth,
    "w-full": fullWidth,
  });

  return (
    <button className={className} onClick={onClick} type="button">
      {!!leadingIcon && (
        <span className="peer flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!!children && <span className="font-bold peer-[]:ml-2">{children}</span>}
    </button>
  );
}
