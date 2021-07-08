import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div class="bg-indigo-900 px-4 py-4">
        <div class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
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
                to="/services"
                class="inline-block py-1 md:py-4 mr-6   hover:text-green-300 text-gray-100"
              >
                Services
              </Link>
              <Link
                to="/projects"
                class="inline-block py-1 md:py-4 text-gray-100 hover:text-green-300 mr-6"
              >
                Our Works
              </Link>
              <Link
                to="/members"
                class="inline-block py-1 md:py-4 text-gray-100 hover:text-green-300"
              >
                Members
              </Link>
            </div>
          </div>
          <div class="hidden md:block">
            <Link
              to="/about"
              class="inline-block py-1 md:py-4 text-gray-100 hover:text-green-300 mr-6"
            >
              About
            </Link>
            <Link
              to="/contact"
              class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
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
