import { useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import Anchor from "../../atoms/anchor";
import Button from "../../atoms/button";
import Container from "../../atoms/container";
import Title from "../../atoms/title";
import Postal from "../../molecules/postal";
import ContactForm from "./contact-form";
import PostalBack from "./postal-back";
import PostalFront from "./postal-front";

export default function Contact() {
  return (
    <>
      <Anchor id="contact" offset={-100} />
      <div className="bg-white pt-10">
        <Container>
          <Title level={2} className="text-center text-sky-900 mb-10">
            Contact
          </Title>
          <div className="text-sky-900 max-w-2xl text-2xl mx-auto text-center">
            <p className="mb-6">
              If you have any questions, please don't hesitate to contact me.
            </p>
            <p className="mb-2">
              Whatsapp/Mobile:{" "}
              <a className="hover:text-sky-600" href="tel:+584126077669">
                +58 412 607.76.69
              </a>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                className="hover:text-sky-600"
                href="mailto:alejandrogomez88@gmail.com"
              >
                alejandrogomez88@gmail.com
              </a>
            </p>
            <p className="mb-2">
              Linkedin:{" "}
              <a
                className="hover:text-sky-600"
                href="https://www.linkedin.com/in/alexgomez88/"
              >
                @alexgomez88
              </a>
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-12 h-[550px]">
            <Postal front={<PostalFront />} back={<PostalBack/>} />
          </div>
        </Container>
      </div>
    </>
  );
}
