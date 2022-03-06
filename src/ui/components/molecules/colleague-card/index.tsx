import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { StructuredText } from "react-datocms";
import Title from "../../atoms/title";

type ColleagueType = {
  id: string;
  name: string;
  description: any;
  profesion: string;
  project: any;
};

export default function ColleagueCard({ name, description, profesion, project }: ColleagueType) {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col lg:flex-row justify-center items-center h-100 shadow-lg shadow-black/50">
      <div className="w-36 h-36 rounded-full overflow-hidden bg-sky-500 mx-auto mb-4 lg:mb-0" />
      <div className="flex-1 flex flex-col lg:ml-6">
        <Title level={3} className="text-sky-800">
          {name}
        </Title>
        <div className="my-4">
            <StructuredText data={description} />
        </div>
        
        <p className="text-xl">
          <span className="font-bold">Role: </span> {profesion}
        </p>
        <p className="text-xl">
          <span className="font-bold">Common Projects: </span> {project.map((project: any) => project.title).join(", ")}
        </p>
      </div>
    </div>
  );
}
