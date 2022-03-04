import { Link } from "gatsby";
import React from "react";

export default function BaseNavbarItem(props: any) {
  return (
    <Link
      to={props.link}
      className="text-center font-medium text-gray-500 hover:text-gray-900 py-6 hover:bg-slate-300"
    >
      {props.text}
    </Link>
  );
}
