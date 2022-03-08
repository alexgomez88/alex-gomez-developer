import React from "react";
import Button from "../../atoms/button";

export default function PostalBack({ swippe }: any) {
  return (
    <div className="bg-sky-900 p-6 rounded-lg h-[500px] flex flex-col justify-center items-center text-white">
      <svg
        className="w-32 aspect-square mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="mb-6 text-xl">Your message has been sent!</p>
      <Button style="secondary" onClick={swippe}>Send another message!</Button>
    </div>
  );
}
