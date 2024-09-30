import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      className="bg-red hover:bg-redHover text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
