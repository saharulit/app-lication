import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="app-bg-white rounded-lg p-4"
      {...rest}
    />
  );
};

export default Input;
