import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Education", href: "#" },
  { name: "Research", href: "#" },
  { name: "Innovation", href: "#" },
  { name: "About cna", href: "#" },
];

export default function Home() {
  return (
    <>
      <>
        <>
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <Popover>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <a href="#">
                            <span className="sr-only">Workflow</span>
                            <span className="red-c-a">c</span>
                            <span className="gray-n">n</span>
                            <span className="red-c-a">a</span>
                          </a>
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt=""
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <a
                          href="#"
                          className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                          Log in
                        </a>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>

                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">test</span>{" "}
                      <span className="block text-indigo-600 xl:inline">
                        online business
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                          Get started
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                          Live demo
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt=""
              />
            </div>
          </div>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Explore websites people and locations
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </div>
            </div>
          </form>
        </>
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
      </>
      <div class="flex">
       
        <span className="rect">Join us in building a better world </span>
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
        </svg>
      </div>

<div>
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

<a href="https://twitter.com/mit" target="_blank">
              <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.115 2.213A3.501 3.501 0 0 0 15.558.26a6.293 6.293 0 0 1-2.085.857C12.876.43 12.022 0 11.077 0 9.265 0 7.796 1.582 7.796 3.534c0 .277.027.547.083.805C5.152 4.19 2.734 2.786 1.114.646A3.735 3.735 0 0 0 .67 2.424c0 1.225.579 2.307 1.46 2.942a3.118 3.118 0 0 1-1.488-.442v.044c0 1.712 1.131 3.141 2.635 3.465a2.998 2.998 0 0 1-.866.124c-.212 0-.418-.021-.617-.063.417 1.404 1.63 2.427 3.066 2.454-1.124.949-2.54 1.513-4.077 1.513-.265 0-.527-.015-.783-.048A8.823 8.823 0 0 0 5.032 14c6.038 0 9.339-5.385 9.339-10.056 0-.153-.002-.306-.009-.457A6.954 6.954 0 0 0 16 1.657a6.194 6.194 0 0 1-1.885.556z" fill="currentColor" fill-rule="nonzero"></path>
              </svg></a>

              <a href="https://www.facebook.com/MITnews" target="_blank">
              <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.32 16H1.773V7.999H0V5.242h1.773V3.587c0-2.249 1-3.587 3.844-3.587h2.367v2.758h-1.48c-1.107 0-1.18.385-1.18 1.104l-.005 1.38H8L7.686 8H5.32V16z" fill="currentColor" fill-rule="nonzero"></path>
              </svg></a>
              <a href="https://www.youtube.com/mit" target="_blank">
              <svg viewBox="0 0 24 17" height="16" width="23" xmlns="http://www.w3.org/2000/svg"> <path d="M22.938 3.005A2.87 2.87 0 0 0 20.916.984C19.143.5 12.011.5 12.011.5S4.867.512 3.093.996a2.87 2.87 0 0 0-2.022 2.022C.6 4.79.6 8.5.6 8.5s0 3.709.484 5.495a2.87 2.87 0 0 0 2.021 2.021c1.774.484 8.906.484 8.906.484s7.132 0 8.905-.484a2.87 2.87 0 0 0 2.022-2.021c.484-1.774.484-5.495.484-5.495s0-3.709-.484-5.495zm-13.21 8.918V5.077l5.93 3.423-5.93 3.423z" fill="currentColor" fill-rule="nonzero"></path> </svg>
            </a>
            <a href="https://www.instagram.com/mitpics/" target="_blank">
              <svg width="18" height="18" viewBox="0 0 16 16" >
                <defs>
                  <path id="a" d="M0 .005h15.257V15.26H0z"></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(.384 .529)">
                    <mask id="b" fill="#fff">
                      <use href="#a"></use>
                    </mask>
                    <path d="M7.629.005c-2.072 0-2.332.009-3.146.046-.812.037-1.366.166-1.851.354a3.74 3.74 0 0 0-1.352.88A3.74 3.74 0 0 0 .4 2.636c-.188.486-.317 1.04-.354 1.852C.009 5.302 0 5.562 0 7.633c0 2.072.009 2.332.046 3.146.037.812.166 1.366.355 1.851.194.502.455.928.88 1.352.424.424.849.685 1.35.88.486.188 1.04.317 1.852.354.814.037 1.074.046 3.146.046 2.071 0 2.331-.009 3.145-.046.812-.037 1.366-.166 1.852-.354a3.74 3.74 0 0 0 1.35-.88 3.74 3.74 0 0 0 .88-1.352c.19-.485.318-1.04.355-1.851.037-.814.046-1.074.046-3.146 0-2.071-.009-2.331-.046-3.145-.037-.812-.166-1.366-.354-1.852a3.74 3.74 0 0 0-.88-1.35 3.74 3.74 0 0 0-1.351-.88c-.486-.19-1.04-.318-1.852-.355C9.96.014 9.7.005 7.629.005zm0 1.374c2.037 0 2.278.008 3.082.045.744.034 1.148.158 1.417.262.356.139.61.304.877.571.267.267.432.521.57.877.105.27.23.673.263 1.417.037.804.045 1.046.045 3.082 0 2.037-.008 2.279-.045 3.083-.034.744-.158 1.148-.262 1.417-.139.356-.304.61-.571.877a2.363 2.363 0 0 1-.877.57c-.269.105-.673.23-1.417.263-.804.037-1.045.045-3.082.045s-2.279-.008-3.083-.045c-.744-.034-1.148-.158-1.417-.263a2.363 2.363 0 0 1-.877-.57 2.364 2.364 0 0 1-.57-.877c-.105-.27-.23-.673-.263-1.417-.037-.804-.044-1.046-.044-3.083 0-2.036.007-2.278.044-3.082.034-.744.158-1.148.263-1.417.138-.356.303-.61.57-.877.267-.267.521-.432.877-.57.27-.105.673-.23 1.417-.263.804-.037 1.046-.045 3.083-.045z" fill="currentColor" mask="url(#b)"></path>
                  </g>
                  <path d="M8.013 10.705a2.543 2.543 0 1 1 0-5.086 2.543 2.543 0 0 1 0 5.086zm0-6.46a3.917 3.917 0 1 0 0 7.835 3.917 3.917 0 0 0 0-7.835zM13 4.09a.915.915 0 1 1-1.83 0 .915.915 0 0 1 1.83 0" fill="currentColor"></path>
                </g>
              </svg></a>


</div>

    </>
  );
}
