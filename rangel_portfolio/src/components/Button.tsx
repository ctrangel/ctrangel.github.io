import React from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
