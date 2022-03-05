import React from "react";
import { StructuredText } from "react-datocms";

type FlipCardType = {
  id: string;
  title: string;
  image: any;
  description: any;
  url: string;
};

export default function FlipCardProject({
  title,
  image,
  description,
  url,
}: FlipCardType) {
  return (
    <div className="flip-card ">
      <div className="flip-card-inner aspect-[4/3]">
        <div className="flip-card-front "></div>
        <div className="flip-card-back">
          <StructuredText data={description} />
        </div>
      </div>
    </div>
  );
}
