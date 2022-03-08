import axios from "axios";
import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import TextArea from "../../atoms/text-area";
import Title from "../../atoms/title";

const useContactFormQuery = () => {
  const [token, setToken] = useState("");
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            url
            method
          }
        }
      }
    }
  `);

  return {
    ...data.site.siteMetadata.contact,
    token,
    setToken,
  };
};

export default function ContactForm({onFinish}: any) {
  const { url, token, setToken } = useContactFormQuery();
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(url, {
        ...data,
        "g-recaptcha-response": token,
      });
      onFinish()
    } catch (error) {
      console.log(error);
    }
  };

  const disabled = !token || isSubmitting || Object.keys(errors).length > 0;

  console.log(isSubmitting);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-3 text-sky-900 text-center">Please fill the form and I will contact you as soon as I can:</p>
      <Input
        label="Name"
        placeholder="Alejandro Gomez"
        register={register}
        name="name"
        disabled={disabled}
        options={{ required: true }}
      />
      <Input
        label="Email"
        placeholder="example@server.com"
        register={register}
        name="email"
        type="email"
        disabled={disabled}
        options={{ required: true }}
      />
      <TextArea
        label="Comments"
        register={register}
        name="message"
        disabled={disabled}
        options={{ required: true }}
        placeholder={"How can I help you?"}
      />

      <GoogleReCaptcha
        onVerify={function (tkn: string): void | Promise<void> {
          if (!token) setToken(tkn);
        }}
      />

      <Button type="submit" className="w-full lg:w-auto" disabled={disabled}>
        Send
      </Button>
    </form>
  );
}
