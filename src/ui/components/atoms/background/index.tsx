import React from "react";

export default function Background(props: any) {
    switch (props.type) {
        case "primary":
            return <div className="bg-primary">{props.children}</div>;
    
        default:
            return <div className="bg-red-500">{props.children}</div>;
    }
  
}