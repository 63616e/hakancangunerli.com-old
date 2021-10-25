// TODO: smooth scroll to search.js

import ReactTooltip from "react-tooltip";
import Link from "next/link";
import Navinav from "..//components/navinav";
import About from "../pages/about";
import Contact from "../pages/contact";
import Education from "../pages/education";
import OpenSource from "../pages/opensource";
import Research from "../pages/research";
import Resume from "../pages/resume";
import WorkExp from "../pages/workexp";

const salutations = `<script>var example = ['hello!', 'merhaba!','bonjour!','hallo!','hola!', '!שלום', '68 65 6c 6c 6f '];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;
// import { animateScroll } from "react-scroll";
import Image from "next/image";
import { padding, textAlign } from "@mui/system";
const picture = "/9358D3D5-DF3F-4F59-86CB-56C3090F86E5_4_5005_c.jpeg";
import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const SelectionSearch = [
  { label: "Education" },
  { label: "Research" },
  { label: "Teaching" },
  { label: "Open Source " },
  { label: "Work Experience " },
  { label: "About " },
  { label: "Resume " },
];

export default function Home() {
  return (
    <>
      <Navinav></Navinav>
      <div className={styles.splitScreen}>
        {/* sol */}
        <div style={{ background: "lightgray" }} className={styles.topPane}>
          <div style={{ float: "left", padding: "40px" }}>
            <form className="w-full max-w-lg">
              <div className="w-full px-3 mb-6 md:mb-0">
                <b style={{ fontSize: "20px" }}>
                  Explore websites people and locations
                </b>
                <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <Image
                    // TODO: fix this
                    src={picture}
                    alt="Picture of me!! "
                    width={200}
                    height={200}
                  />

                  <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-black-600">
                      <div dangerouslySetInnerHTML={{ __html: salutations }} />
                    </span>
                  </h1>
                  <span>
                    <About />
                  </span>
                </p>
                {/* shadow */}
                <br />
                <br />
                <Autocomplete
                  freeSolo
                  id="free-solo-demo"
                  options={SelectionSearch}
                  sx={{}}
                  renderInput={(option) => (
                    <TextField {...option} label="What are you looking for?" />
                  )}
                />
              </div>
            </form>
            <br />
            <div className="flex">
              <ul>
                Top resources for
                <li>_prospective employers</li>
                <li>_current employers </li>
                <li>
                  <ReactTooltip
                    delayHide={1000}
                    backgroundColor="#000000"
                    effect="solid"
                    html={true}
                  />
                  <a data-tip="<a>cdc.gov</a>">
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                      _Covid-19
                    </a>
                  </a>
                </li>
                <li>_all resources</li>
              </ul>
            </div>
            <br></br>
            <div style={{}}>
              <div className="flex">
                <Link href="https://web.mit.edu/building-a-better-world/">
                  <span className="rect">
                    Join us in
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      className="arrow-northeast site-footer__join-us-icon"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform="translate(1 1)"
                      >
                        <polyline points="3 0 14 0 14 11"></polyline>
                        <path d="M14,0 L0,14"></path>
                      </g>
                    </svg>{" "}
                    building a better world
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "left", background: "#A31F34" }}>
          <footer>
            <b>Hakan Can Gunerli</b>
            <br />
            100 Fox Rd, Athens,GA,USA <br />
            <a href="https://example.com">
              <u>Visit</u>{" "}
            </a>
            <a href="https://example.com">
              <u> Map</u>{" "}
            </a>
            <a href="https://example.com">
              <u>Events</u>{" "}
            </a>
            <a href="https://example.com">
              <u>People</u>{" "}
            </a>
            <br></br>
            <a href="https://example.com">
              <u>Career</u>{" "}
            </a>
            <Link href="/contact.js">
              <a>
                <u>Contact</u>{" "}
              </a>
            </Link>
            <Link href="/privacy">
              <a>
                <u>Privacy</u>{" "}
              </a>
            </Link>
            <a href="https://example.com">
              <u>Accessibility</u>{" "}
            </a>
            <br />
          </footer>
        </div>

        <div className={styles.bottomPane}>
          <div className=" z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <Education />

                <Contact />
                <OpenSource />
                <Research />
                <Resume />
                <WorkExp />

                <ReactTooltip
                  delayHide={1000}
                  backgroundColor="#000000"
                  effect="solid"
                  html={true}
                />
                <a data-tip='<a href="https://web.mit.edu"> web.mit.edu</a>'>
                  test hover system
                </a>
                {/* TODO: HYPERLINK FUNCTIONALITY */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
