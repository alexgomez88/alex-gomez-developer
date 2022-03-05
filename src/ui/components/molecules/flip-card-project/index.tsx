import React from "react";

type FlipCardType = {
    id: string;
    title: string;
    image: any;
    description: any;
    url: string;
}

export default function FlipCardProject({  title, image, description, url }: FlipCardType) {
  return (
      <div className="bg-sky-100 rounded-xl aspect-[4/3] overflow-hidden">

      </div>
  );
}
