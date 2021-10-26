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
const picture = "/9358D3D5-DF3F-4F59-86CB-56C3090F86E5_4_5005_c.jpeg";
import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// const salutations = `<script>var example = ['hello!', 'merhaba!','bonjour!','hallo!','hola!', '!שלום', '你好!'];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;

const navigation = [
  { name: "Education", href: "#education" },
  { name: "Research/Teaching", href: "#research" },
  { name: "Open Source", href: "#opensource" },
  { name: "Work Experience", href: "#workexp" },
  { name: "About cna", href: "#about" },
  { name: "Resume/CV", href: "#resume" },
  {
    name: (
      <center>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <span> please be advised that this project is in alpha. </span>
        </button>
      </center>
    ),
  },
];
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
      <Disclosure as="nav" className="bg-white-800">
        {({ open }) => (
          <>
            <div className=" mx-auto px-2 sm:px-6 lg:px-8">
              <div className=" flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div style={{position:"fixed"}}> 
                <Link href="/">

                      <span className="red-c-a">
                        c<span className="gray-n">n</span>
                        <span className="red-c-a">a</span>
                      </span>
                      

                    
                  </Link>

                  </div>            
                      
                  <Link href="/">
                    <div style={{  }}>
                      <span className="red-c-a">
                        c<span className="gray-n">n</span>
                        <span className="red-c-a">a</span>
                      </span>
                      
                    </div>
                    
                  </Link>
                  &nbsp;&nbsp;
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} to={item.href}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
              
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        {/* search icon */}
                        <Link href="/search">
                          <svg
                            className="site-nav__search-icon site-nav__search-icon--open"
                            width="26"
                            viewBox="0 0 23 22"
                          >
                            <g
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="none"
                            >
                              <circle
                                cx="9.20757329"
                                cy="8.99160695"
                                r="8.50646589"
                              ></circle>
                              <path d="M14.8522097,14.6362434 L20.7140392,20.4980728"></path>
                            </g>
                          </svg>
                        </Link>
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className={styles.splitScreen}>
        {/* sol */}

        <div style={{ background: "#e7f8fc" }} className={styles.topPane}>
          <div style={{ float: "left", padding: "40px", width: "100%" }}>
            <form className="w-full max-w-lg">
              <div className="w-full px-3 mb-6 md:mb-0">
                <b style={{ fontSize: "20px" }}>
                  Explore websites people and locations &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <Autocomplete
                    freeSolo
                    id="free-solo-demo"
                    options={SelectionSearch}
                    sx={{}}
                    renderInput={(option) => (
                      <TextField
                        {...option}
                        label="What are you looking for?"
                      />
                    )}
                  />
                </b>
                <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-black-600">
                      <div dangerouslySetInnerHTML={{ __html: salutations }} />
                    </span>
                  </h1>
                </p>
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

            <br />
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
              <br />
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
            </div>
          </div>
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

            <div className="sm:text-center lg:text-left">
              <div id="about">
                {" "}
                <About />{" "}
              </div>
              <br />
              <div id="education">
                {" "}
                <Education />{" "}
              </div>
              <br />
              <div id="contact">
                {" "}
                <Contact />{" "}
              </div>
              <br />
              <div id="opensource">
                {" "}
                <OpenSource />{" "}
              </div>
              <br />
              <div id="research">
                {" "}
                <Research />{" "}
              </div>
              <br />
              <div id="resume">
                {" "}
                <Resume />{" "}
              </div>
              <br />
              <div id="WorkExp">
                {" "}
                <WorkExp />{" "}
              </div>

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
          </div>
        </div>
      </div>
    </>
  );
}
