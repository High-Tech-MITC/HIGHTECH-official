import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./sub/About";
import Provides from "./sub/Provides";
import Info from "./sub/Info";
import Subscribe from "./sub/Subscribe";
import { gsap, Power3 } from "gsap";

const Landing = () => {
  let welcomeText = useRef(null);
  let hightTech = useRef(null);
  let description = useRef(null);
  let ourservice = useRef(null);
  let terminal = useRef(null);
  let terminalCursor = useRef(null);

  let textTl = gsap.timeline();

  let terminalTl = gsap.timeline();

  useEffect(() => {
    textTl
      .from(welcomeText, {
        y: -90,
        stagger: 0.6,
        opacity: 0,
      })
      .from(hightTech, {
        y: -50,
        opacity: 0,
      })
      .from(description, {
        y: -10,
        stagger: 0.6,
        opacity: 0,
      })
      .from(ourservice, {
        y: -20,
        stagger: 0.6,
        opacity: 0,
      });

    terminalTl
      .from(terminal, {
        x: 90,
        opacity: 0,
      })
      .to(terminalCursor, {
        opacity: 0,
        ease: Power3.inOut,
        duration: 0.6,
        repeat: -1,
      });
  }, []);

  return (
    <div>
      <div class=" md:h-auto bg-indigo-900 md:overflow-hidden font-mono">
        <div class="px-4 py-20 md:py-4">
          <div class="md:max-w-6xl md:mx-auto">
            <div class="md:flex md:flex-wrap">
              <div class="md:w-1/2 text-center md:text-left md:pt-16">
                <h1
                  ref={(el) => {
                    welcomeText = el;
                  }}
                  class="font-bold   text-white text-2xl md:text-5xl leading-tight mb-4"
                >
                  Welcome To The Kingdom of
                </h1>

                <span
                  ref={(el) => {
                    hightTech = el;
                  }}
                  className="font-bold text-4xl bg-white text-indigo-900 mb-4 px-1"
                >
                  HIGHTECH
                </span>

                <p
                  ref={(el) => {
                    description = el;
                  }}
                  class="text-indigo-200 md:text-xl md:pr-48 mt-3"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  vitae corrupti asperiores veritatis dolorum, commodi aperiam
                  enim.
                </p>

                <Link
                  ref={(el) => {
                    ourservice = el;
                  }}
                  to="/services"
                  class="font-black mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-indigo-900 bg-white hover:bg-green-300 over:text-green-500 rounded-lg shadow"
                >
                  Our Services
                </Link>
              </div>

              {/* TODO: make the terminal interactive. it would be a cool feature if users can run commands that gives details about high tech */}
              <div
                ref={(el) => {
                  terminal = el;
                }}
                class="md:w-1/2 mx-auto text-center md:text-left md:pt-16"
              >
                <div class="hidden md:block">
                  <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                    <div
                      class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
                      id="headerTerminal"
                    >
                      <div
                        class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                        id="closebtn"
                      ></div>
                      <div
                        class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
                        id="minbtn"
                      ></div>
                      <div
                        class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
                        id="maxbtn"
                      ></div>
                      <div class="mx-auto pr-16" id="terminaltitle">
                        <p class="text-center text-sm">Terminal</p>
                      </div>
                    </div>
                    <div
                      class="pl-1 pt-1 h-auto  text-indigo-400 font-mono text-sm bg-black"
                      id="console"
                    >
                      <p class="pb-1">
                        guest@hightTech:~$
                        <span
                          ref={(el) => {
                            terminalCursor = el;
                          }}
                          class="pl-3"
                        >
                          _
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          class=" fill-current text-white  md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>
      <About />
      <Info />
      <Provides />
      <Subscribe />
    </div>
  );
};

export default Landing;
