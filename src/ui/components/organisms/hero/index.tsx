import React from "react";
import Title from "../../atoms/title";

export default function Hero() {
  return (
    <div className="relative bg-sky-800 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 backdrop-blur-sm bg-gradient-to-r from-sky-800/75 to-sky-900/75 lg:from-sky-800 lg:to-sky-900 lg:max-w-2xl lg:w-full h-screen flex justify-center items-center">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-sky-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 50,100" />
            <polygon points="50,0 100,100 50,100" fillOpacity="0.7" />
          </svg>
          <main className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:h-full lg:flex items-center">
            <div className="text-center lg:text-left">
              <Title level={3} className="text-slate-200">
                Software Developer:
              </Title>
              <Title level={1} className="text-white font-extrabold">
                Alex Gomez
              </Title>
              <p className="pt-7 text-xl text-slate-200">
                Mechanical Engineer and Software Developer with outstanding
                expertise in maintenance, web and mobile development.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:left-auto">
        <img
          className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
