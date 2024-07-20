// app/components/ContactForm/Button.tsx
import React, { ReactNode } from "react";

type Props = {
  type: "button" | "submit" | "reset";
  variant: "primary" | "secondary";
  onClick: () => void;
  children: ReactNode;
};

const Button: React.FC<Props> = ({ type, variant, onClick, children }) => {
  const baseStyle =
    "font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none";
  const primaryStyle =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  const secondaryStyle =
    "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";

  const buttonStyle = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${buttonStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
