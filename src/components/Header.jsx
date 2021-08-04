import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationBar } from "./Animate";

const Header = () => {
  let nav = useRef(null);

  useEffect(() => {
    navigationBar(nav);
  }, []);

  let pathname = useLocation().pathname;

  // console.log(pathname);


  return (
    <nav>
      <div class="bg-indigo-900 px-4 py-4 font-mono">
        <div
          ref={(el) => {
            nav = el;
          }}
          class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
        >
          <div class="flex justify-between items-center">
            <Link to="/" class="inline-block py-2 text-white text-xl font-bold">
              HIGHTECH
            </Link>
            <div class="inline-block cursor-pointer md:hidden">
              <div class="bg-gray-400 w-8 mb-2" style={{ height: "2px" }}></div>
              <div class="bg-gray-400 w-8 mb-2" style={{ height: "2px" }}></div>
              <div class="bg-gray-400 w-8" style={{ height: "2px" }}></div>
            </div>
          </div>

          <div>
            <div class="hidden md:block">
              <Link
                to="/teams"
                class={`inline-block py-1 md:py-4 mr-6   hover:text-green-300 text-gray-100 ${pathname == "/teams" && "underline"}` }
              >
                Teams
              </Link>
              <Link
                to="/projects"
                class={`inline-block py-1 md:py-4 text-gray-100 hover:text-green-300 mr-6 ${pathname == "/projects" && "underline"} `}
              >
                Projects
              </Link>
              <Link
                to="/members"
                class={`inline-block py-1 md:py-4 text-gray-100 hover:text-green-300 mr-6 ${pathname == "/members" && "underline"} `}
              >
                Members
              </Link>
              <Link
                to="/about"
                class={`inline-block py-1 md:py-4 text-gray-100 hover:text-green-300 mr-6 ${pathname == "/about" && "underline"} `}
              >
                About
              </Link>
            </div>
          </div>
          <div class="hidden md:block">
            <Link
              to="/contact"
              class={`inline-block py-1 md:py-4 text-gray-100 hover:text-green-300 mr-6 ${pathname == "/contact" && "underline"} `}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
