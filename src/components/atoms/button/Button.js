import React from "react";

function Button({
  children,
  className,
  onClick,
  leftIcon,
  rightIcon,
  outlined = false,
  filled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row gap-2 items-center heading3 py-2 px-4 rounded-full ${
        filled ? "bg-greyWhite text-greyBlack" : "bg-transparent"
      } border-[1px] justify-center ${
        outlined
          ? " border-greyWhite hover:bg-greyWhite text-greyWhite hover:text-greyBlack"
          : "border-transparent hover:border-greyWhite"
      } ${className} `}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;
