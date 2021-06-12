import "./styles/Header.css";

const Header = () => {
  return (
    <nav>
      <div class="bg-indigo-900 px-4 py-4">
        <div class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
          <div class="flex justify-between items-center">
            <a href="/" class="inline-block py-2 text-white text-xl font-bold">
              HIGHTECH
            </a>
            <div class="inline-block cursor-pointer md:hidden">
              <div class="bg-gray-400 w-8 mb-2" style={{ height: "2px" }}></div>
              <div class="bg-gray-400 w-8 mb-2" style={{ height: "2px" }}></div>
              <div class="bg-gray-400 w-8" style={{ height: "2px" }}></div>
            </div>
          </div>

          <div>
            <div class="hidden md:block">
              <a
                href="/"
                class="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold"
              >
                Services
              </a>
              <a
                href="/"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
              >
                About
              </a>
              <a
                href="/"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100"
              >
                Teams
              </a>
            </div>
          </div>
          <div class="hidden md:block">
            <a
              href="/"
              class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
            >
              Blog
            </a>
            <a
              href="/"
              class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
