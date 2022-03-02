import React from "react";

interface Props {
  level?: number;
  className?: string;
  children: any;
}

export default function Title({
  level = 1,
  className,
  children,
}: Props) {
  const baseTitle = `title-${level}`;
  const titleClassName = `${className} ${baseTitle}`;
  switch (level) {
    case 1:
      return <h1 className={titleClassName}>{children}</h1>;
    case 2:
      return <h2 className={titleClassName}>{children}</h2>;
    case 3:
      return <h3 className={titleClassName}>{children}</h3>;
    default:
      return <div>index</div>;
  }
}
