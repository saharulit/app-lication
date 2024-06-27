import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = 'text',
  label,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="app-bg-white rounded-md p-3 border app-bg-border"
        {...rest}
      />
    </div>
  );
};

export default Input;
