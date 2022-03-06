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
            <polygon points="49,0 100,0 49,100 50,100" />
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
              <p className="pt-7 text-xl lg:text-2xl text-slate-200">
                Mechanical Engineer and Software Developer with outstanding
                expertise in maintenance, web and mobile development.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:left-auto">
        <img
          className="h-full w-full object-cover lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
      <OverWave />
    </div>
  );
}

const OverWave = () => (
  <div className="absolute -bottom-2 left-0 right-0 z-10">
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 400"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <path
        d="M 0,400 C 0,400 0,300 0,300 C 29.913015145585675,279.90434534697783 59.82603029117135,259.8086906939557 108,271 C 156.17396970882865,282.1913093060443 222.60889398090023,324.6695825711549 273,326 C 323.39110601909977,327.3304174288451 357.73839378522763,287.5129790214248 394,284 C 430.26160621477237,280.4870209785752 468.43753087818914,313.2785013431459 517,331 C 565.5624691218109,348.7214986568541 624.5114827020163,351.37301560599167 672,334 C 719.4885172979837,316.62698439400833 755.5165383137454,279.2294362328875 789,272 C 822.4834616862546,264.7705637671125 853.4223640430018,287.70923946245836 895,297 C 936.5776359569982,306.29076053754164 988.7940055142469,301.93360591727924 1041,298 C 1093.205994485753,294.06639408272076 1145.4016139000103,290.5563368684248 1193,285 C 1240.5983860999897,279.4436631315752 1283.5995388857114,271.8410466090215 1324,274 C 1364.4004611142886,276.1589533909785 1402.2002305571443,288.07947669548923 1440,300 C 1440,300 1440,400 1440,400 Z"
        stroke="none"
        stroke-width="0"
        fill="currentColor"
        className="transition-all duration-300 ease-in-out delay-150 path-2 text-sky-700"
      ></path>
    </svg>
  </div>
);
