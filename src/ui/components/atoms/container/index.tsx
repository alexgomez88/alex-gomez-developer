import React from "react";

export default function Container(props: any) {
  return <div className="container mx-auto">{props.children}</div>;
}