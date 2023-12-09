import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// Define the ButtonProps interface using the ButtonHTMLAttributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary'; // Example of variant prop
}

// Create the Button component as a generic function component
const Button1: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  // Determine the className based on the variant prop
  const className = `btn btn-${variant} `;

  return (
    <button className={className} {...rest} >
      {children}
    </button>
  );
};

export default Button1;
