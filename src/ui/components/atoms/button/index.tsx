import React from "react";

type ButtonProps = {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  style?: string;
  className?: string;
  disabled?: boolean;
  href?: string;
};

const buttonConfig = {
  primary: {
    classes:
      "bg-sky-900 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  },
  secondary: {
    classes:
      "bg-white hover:bg-sky-200 text-sky-900 font-bold py-2 px-4 rounded disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  },
};

export default function Button({
  children,
  type,
  href,
  onClick,
  className,
  disabled,
  style = "primary",
}: ButtonProps) {
  if (!!href)
    return (
      <a
        href={href}
        className={buttonConfig[style as keyof typeof buttonConfig].classes}
      >
        {children}
      </a>
    );
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        buttonConfig[style as keyof typeof buttonConfig].classes,
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
