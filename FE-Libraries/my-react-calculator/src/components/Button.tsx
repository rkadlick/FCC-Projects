import React from 'react';

interface ButtonProps {
  id: string;
  value: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ id, value, onClick }) => {
  return (
    <button id={id} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;