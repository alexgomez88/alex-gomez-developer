import React from "react";
import Navbar from "../../organisms/navbar";
import Hero from "../../organisms/hero";
import Portafolio from "../../organisms/portafolio";
import MainLayout from "../../layouts/main-layout";
import About from "../../organisms/about";
import Colleagues from "../../organisms/colleagues";

export default function Home(props: any) {
  return (
    <MainLayout>
      <Hero />
      <About/>
      <Portafolio projects={props.projects}/>
      <Colleagues colleagues={props.colleagues}/>
    </MainLayout>
  );
}
