import React from "react";

export default function Anchor(props: any) {
  return <a className="anchor" id={props.id} style={{ top: props.offset }} />;
}
