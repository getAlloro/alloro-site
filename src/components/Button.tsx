import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border border-transparent text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 focus:ring-slate-900",
    secondary: "border border-transparent text-alloro-900 bg-alloro-100 hover:bg-alloro-200 hover:shadow-md focus:ring-alloro-500",
    outline: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-200",
    ghost: "text-slate-600 hover:text-alloro-600 hover:bg-alloro-50/50"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;