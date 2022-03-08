import { HeartIcon } from "@heroicons/react/solid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../../atoms/container";
import SocialLinks from "../../atoms/social-links";

export default function Footer({ colleagues = [] }: any) {
  return (
    <>
      <TopWave />
      <div className="bg-sky-900 py-10 -my-1">
        <Container>
          <div className="flex justify-center mb-9">
            <SocialLinks href="https://api.whatsapp.com/send?phone=584126077669" icon={faWhatsapp} />
            <SocialLinks href="https://www.instagram.com/alexgomez88/" icon={faInstagram} />
            <SocialLinks href="https://github.com/alexgomez88" icon={faGithub} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row lg:justify-between text-white p-4">
            <span>© 2022 Copyright: Alejandro Gómez</span>
            <span>
              Made with <HeartIcon className="h-6 inline" /> using Gatsby,
              DatoCMS, Tailwind, React & GetForms
            </span>
          </div>
        </Container>
      </div>
    </>
  );
}

const TopWave = () => (
  <svg
    width="100%"
    height="200px"
    preserveAspectRatio="xMaxYMax slice"
    viewBox="0 0 1440 400"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150"
  >
    <path
      d="M 0,400 C 0,400 0,300 0,300 C 29.913015145585675,279.90434534697783 59.82603029117135,259.8086906939557 108,271 C 156.17396970882865,282.1913093060443 222.60889398090023,324.6695825711549 273,326 C 323.39110601909977,327.3304174288451 357.73839378522763,287.5129790214248 394,284 C 430.26160621477237,280.4870209785752 468.43753087818914,313.2785013431459 517,331 C 565.5624691218109,348.7214986568541 624.5114827020163,351.37301560599167 672,334 C 719.4885172979837,316.62698439400833 755.5165383137454,279.2294362328875 789,272 C 822.4834616862546,264.7705637671125 853.4223640430018,287.70923946245836 895,297 C 936.5776359569982,306.29076053754164 988.7940055142469,301.93360591727924 1041,298 C 1093.205994485753,294.06639408272076 1145.4016139000103,290.5563368684248 1193,285 C 1240.5983860999897,279.4436631315752 1283.5995388857114,271.8410466090215 1324,274 C 1364.4004611142886,276.1589533909785 1402.2002305571443,288.07947669548923 1440,300 C 1440,300 1440,400 1440,400 Z"
      stroke="none"
      strokeWidth="0"
      fill="currentColor"
      className="transition-all duration-300 ease-in-out delay-150 path-2 text-sky-900"
    ></path>
  </svg>
);
