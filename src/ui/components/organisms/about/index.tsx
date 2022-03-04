import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Background from "../../atoms/background";
import Container from "../../atoms/container";
import Title from "../../atoms/title";

export default function About(props: any) {
  return (
    <div id="about" className="bg-sky-700 py-20">
      <Container>
        <Title level={2} className="text-center text-white mb-20">
          About Me
        </Title>
        <div className="flex flex-col justify-center items-center">
        <StaticImage src="../../../../images/profile.jpeg" className="w-64 aspect-square rounded-full mx-auto mb-20 ring-4 ring-white" alt=""/>

        <p className="text-white text-justify max-w-2xl text-2xl mx-auto mb-10">
          Hi, my name is Alejandro Gómez, I'm an experienced Mechanical Engineer
          and Software Developer. As a mechanical engineer, operated and
          maintained different transports services: automated people mover
          (APM), aerial lifts (cable cars), and buses. And as Software
          Developer, built different landing pages, websites, and mobile apps.
        </p>

        <p className="text-white text-justify max-w-2xl text-2xl mx-auto">
          I work with the latest technologies and frameworks to build the best
          applications. I have a strong background in web development, and I am
          always looking for new challenges to improve my skills.
        </p>
        </div>
      </Container>
    </div>
  );
}
