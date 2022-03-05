import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { StructuredText } from "react-datocms";
import Title from "../../atoms/title";

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
      <div className="flip-card-inner aspect-square">
        <div className="flip-card-front rounded-xl overflow-hidden bg-sky-200">
          <GatsbyImage className="w-full h-full " image={image.gatsbyImageData} alt={""} />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-sky-900 to-transparent"/>
          <Title level={3} className="absolute bottom-4 right-4 text-white">{title}</Title>
        </div>
        <div className="flip-card-back rounded-xl bg-sky-800 text-white flex flex-col items-center justify-center px-6 py-4">
          <div className="">
            <StructuredText data={description} />
          </div>
          <a className="btn bg-white hover:bg-sky-200 px-8 py-4 text-sky-800 mt-6 rounded-lg font-bold" href={url} target="_blank">Go To {title}</a>
        </div>
      </div>
    </div>
  );
}
