import React from "react";
import ContactForm from "./contact-form";

export default function PostalFront({ swippe }: any) {
  const onFinish = () => {
    swippe();
  };
  return (
    <div className="bg-sky-200 p-6 rounded-lg h-[500px] items-center">
      <ContactForm onFinish={onFinish} />
    </div>
  );
}
