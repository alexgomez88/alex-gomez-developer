import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  register: any;
  name: string;
  type?: string;
  disabled?: boolean;
  options?: any;
};

export default function Input({
  label,
  placeholder,
  register,
  name,
  disabled,
  type = "text",
  options,
}: InputProps) {
  return (
    <label className="block mb-5">
      <span className="text-sky-900">{label}</span>
      <input
        type={type}
        className="mt-1
        block
        w-full
        rounded-md
        border-sky-300
        shadow-sm
        focus:border-sky-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        "
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, options)}
      />
    </label>
  );
}
