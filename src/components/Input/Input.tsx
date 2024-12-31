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
      {label && <label className="font-semibold pb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="app-bg-white rounded-lg p-3 border app-border-gray"
        {...rest}
      />
    </div>
  );
};

export default Input;
