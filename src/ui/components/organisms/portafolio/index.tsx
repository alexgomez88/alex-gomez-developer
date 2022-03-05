import React from "react";
import Container from "../../atoms/container";
import Title from "../../atoms/title";
import FlipCardProject from "../../molecules/flip-card-project";

export default function Portafolio({ projects }: any) {
  return (
    <div id="portafolio" className="bg-white py-20">
      <Container>
        <Title level={2} className="text-center text-sky-900 mb-20">
          Portafolio
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <FlipCardProject key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
