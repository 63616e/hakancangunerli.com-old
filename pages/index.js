import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Popover } from "@headlessui/react";


const bruh = `<script>var example = ['hello', 'merhaba!', '!שלום', '你好!'];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;

const navigation = [
  { name: "Education", href: "#" },
  { name: "Research", href: "#" },
  { name: "Innovation", href: "#" },
  { name: "About cna", href: "#" },
];

export default function Home() {
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className=" mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <span className="red-c-a">c</span>
                  <span className="gray-n">n</span>
                  <span className="red-c-a">a</span>

                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <svg
                          class="site-nav__search-icon site-nav__search-icon--open"
                          width="26"
                          viewBox="0 0 23 22"
                        >
                          <g
                            stroke="currentColor"
                            stroke-width="1.5"
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
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
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
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
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

      <div style={{ float: "left" }}>
        <form class="w-full max-w-lg">
          {/* <div class="flex flex-wrap -mx-3 mb-6"> */}
          <div class="w-full px-3 mb-6 md:mb-0">
            <b style={{ fontSize: "16px" }}>
              Explore websites people and locations
            </b>
            <input
              class="text-gray-700 border border-red-500 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
          {/* </div> */}
        </form>

        <div class="flex">
          <ul>
            Top resources for
            <li>_prospective students</li>
            <li>_current students</li>
            <li>_faculty & staff</li>
            <li>_alumni</li>
            <li>_Covid-19 and MIT</li>
            <li>_all resources</li>
          </ul>
        </div>

        <div>
          <div class="flex">
            <span className="rect">
              Join us in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 16 16"
                class="arrow-northeast site-footer__join-us-icon"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="currentColor"
                  stroke-width="1.5"
                  transform="translate(1 1)"
                >
                  <polyline points="3 0 14 0 14 11"></polyline>
                  <path d="M14,0 L0,14"></path>
                </g>
              </svg>{" "}
              building a better world
            </span>
          </div>
        </div>

        <div>
          <div style={{ margin: "50px", textAlign: "left" }}>
            <footer>
              <b>Hakan Can Gunerli</b>
              <br />
              100 Fox Rd, Athens,GA,USA <br />
              <a href="https://example.com">Visit </a>
              <a href="https://example.com">Map </a>
              <a href="https://example.com">Events </a>
              <a href="https://example.com">People </a>
              <a href="https://example.com">Career </a>
              <a href="https://example.com">Contact </a>
              <a href="https://example.com">Privacy </a>
              <a href="https://example.com">Accessibility </a>
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
                      <span className="block text-indigo-600 xl:inline">
                        <div dangerouslySetInnerHTML={{ __html: bruh }} />
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
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
