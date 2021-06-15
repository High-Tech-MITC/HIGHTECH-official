import { FaPhone, FaMapMarked, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact px-20">
      <div class="bg-white mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2  sm:rounded-lg">
              <h1 class="text-4xl sm:text-5xl text-indigo-900 dark:text-white font-extrabold tracking-tight">
                Contact Us
              </h1>
              <p class="text-normal text-lg sm:text-2xl font-medium text-indigo-600 dark:text-gray-400 mt-2">
                using the following addresses.
              </p>

              <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <FaMapMarked />

                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  HighTech , Street, State, Postal Code
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <FaPhone />
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  +251 922 899 2987
                </div>
              </div>

              <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <FaMailBulk />
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  info@hightech.com
                </div>
              </div>
            </div>

            <form class="p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-indigo-900">
                Send Us Feedback
              </h2>
              <div class="flex flex-col">
                <label for="name" class="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="email" class="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">
                  Message
                </label>
                <textarea
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Your Message"
                  class="w-100 h-40 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                class="md:w-32 hover:bg-indigo-900 bg-white text-indigo-900 border border-indigo-900 hover:text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
