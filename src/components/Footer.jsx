import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="table w-full p-4 md:pl-24">
        <div class="block sm:table-cell">
          <p class="uppercase text-grey text-xl sm:mb-6">Links</p>
          <ul class="list-reset text-xs mb-6">
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                FAQ
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Help
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div class="block sm:table-cell">
          <p class="uppercase text-grey text-xl sm:mb-6">Legal</p>
          <ul class="list-reset text-xs mb-6">
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Terms
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div class="block sm:table-cell">
          <p class="uppercase text-grey text-xl sm:mb-6">Projects</p>
          <ul class="list-reset text-xs mb-6">
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                InQuery
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                TEvaluation
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                RATOOL
              </a>
            </li>
          </ul>
        </div>
        <div class="block sm:table-cell">
          <p class="uppercase text-grey text-xl sm:mb-6">Social</p>
          <ul class="list-reset text-xs mb-6">
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Facebook
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Linkedin
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div class="block sm:table-cell">
          <p class="uppercase text-grey text-xl sm:mb-6">Company</p>
          <ul class="list-reset text-xs mb-6">
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Official Blog
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                About Us
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
              <a href="/" class="text-grey hover:text-grey-dark">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-center text-xl pb-8 font-extrabold">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-900">HighTech</span>
      </h2>
    </footer>
  );
};

export default Footer;
