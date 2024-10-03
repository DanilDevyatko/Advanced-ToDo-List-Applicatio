import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      className="bg-red hover:bg-redHover text-white font-bold py-4 px-4 rounded-3xl transition-colors duration-300 leading-4"
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
