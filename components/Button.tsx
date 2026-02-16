import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center py-3 px-8 rounded-full font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-[#c5a059] text-[#1a1a1a] hover:bg-[#d4af37] hover:shadow-[0_8px_30px_rgba(197,160,89,0.3)]",
    outline:
      "border-2 border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white",
    ghost: "bg-transparent text-white hover:bg-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
