import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  name: string;
}

const Input = ({ label, name, error, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-sm font-medium text-neutral-300">
        {label}
      </label>

      <input
        id={name}
        name={name}
        className={`
          bg-neutral-800 border rounded-md p-3 text-neutral-100 outline-none transition-all
          ${
            error
              ? "border-red-500 focus:border-red-600"
              : "border-transparent focus:border-red-600"
          }
        `}
        {...props}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
