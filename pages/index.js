import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import Navinav from "..//components/navinav";
const salutations = `<script>var example = ['hello!', 'merhaba!','bonjour!','hallo!','hola!', '!שלום', '你好!'];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;

export default function Home() {
  return (
    <>
      <Navinav></Navinav>

      <div style={{ float: "left", padding: "40px", background: "lightgray" }}>
        <form className="w-full max-w-lg">
          <div className="w-full px-3 mb-6 md:mb-0">
            <b style={{ fontSize: "16px" }}>
              Explore websites people and locations
            </b>
            {/* shadow */}

            <input
              className="text-gray-700 border border-red-500 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
        </form>

        <div className="flex">
          <ul>
            Top resources for
            <li>_prospective students</li>
            <li>_current students</li>
            <li>_faculty & staff</li>
            <li>_alumni</li>
            <li>
              <ReactTooltip
                delayHide={1000}
                backgroundColor="#000000"
                effect="solid"
                html={true}
              />
              <a data-tip="<a> https://www.cdc.gov/coronavirus/2019-ncov/index.html</a>">
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                  _Covid-19
                </a>
              </a>
            </li>
            <li>_all resources</li>
          </ul>
        </div>
        <br></br>
        <div>
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

        <div>
          <div
            style={{ margin: "50px", textAlign: "left", background: "#A31F34" }}
          >
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
        </div>
      </div>

      <div>
        <div style={{ float: "right" }}>
          <div className="relative bg-white ">
            <div className="max-w-7xl ">
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
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block text-black-600 xl:inline">
                        <div
                          dangerouslySetInnerHTML={{ __html: salutations }}
                        />
                      </span>
                    </h1>
                    <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      <span>
                      heyo, I am John! I'm a student at the University of
                        Georgia with a double emphasis in Artificial
                        Intelligence and Data Science. I've been in the CS
                        ecosystem since 2016, and interned at Forbes 500
                        companies as well as various startups. I have taken
                        various &nbsp; &nbsp;positions at bunch of places, still
                        looking for extra jobs to get my creative juices
                        flowing. You can get more info about that in my CV/Resume section. 
                      </span>
                    </p>

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
        </div>
      </div>
    </>
  );
}
