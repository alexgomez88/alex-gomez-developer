import React from "react";

export default function BaseNavbarItem(props: any) {
  return (
    <a
      href="#"
      className="text-center font-medium text-gray-500 hover:text-gray-900 py-6 hover:bg-slate-300"
    >
      {props.children}
    </a>
  );
}
