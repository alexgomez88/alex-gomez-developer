import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SocialLinksProps = {
  icon: IconProp;
  href: string;
};

export default function SocialLinks({ icon, href }: SocialLinksProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-sky-200  flex justify-center items-center border-white hover:border-sky-200  border-2 rounded-full h-10 w-10 mx-4 text-xl"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
