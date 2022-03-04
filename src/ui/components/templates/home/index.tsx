import React from "react";
import Navbar from "../../organisms/navbar";
import Hero from "../../organisms/hero";
import Portafolio from "../../organisms/portafolio";
import MainLayout from "../../layouts/main-layout";
import About from "../../organisms/about";

export default function Home(props: any) {
  return (
    <MainLayout>
      <Hero />
      <About/>
      {/* <Portafolio /> */}
    </MainLayout>
  );
}
