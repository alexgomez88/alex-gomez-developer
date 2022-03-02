import React from "react";
import Navbar from "../../organisms/navbar";
import Hero from "../../organisms/hero";
import Portafolio from "../../organisms/portafolio";

export default function Home(props:any) {
    return <>
        <Navbar menu={[]}/>
        <Hero/>
        <Portafolio/>
    </>
}