import React from "react";
import Title from "../../atoms/title";

export default function Hero() {
  return (
    <div className="relative bg-slate-800 overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-slate-800 lg:max-w-2xl lg:w-full lg:h-[calc(100vh-40px)]">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:h-full lg:flex items-center py-[10rem]">
            <div className="text-center lg:text-left">
              <Title level={3} className="text-slate-400">
                Software Developer:
              </Title>
              <Title level={1} className="text-white">
                Alex Gomez
              </Title>
              <p className="pt-7 text-xl text-slate-400">
                Mechanical Engineer and Software Developer with outstanding
                expertise in maintenance, web and mobile development.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
