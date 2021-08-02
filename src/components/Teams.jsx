import React, { useRef, useEffect } from "react";

const Teams = () => {
  return (
    <div class="m-20 pb-20">
      <div class="my-20">
        <h2 class="text-4xl font-semibold text-center text-gray-700 dark:text-white">
          Teams
        </h2>
        <p class="text-xl text-center text-gray-600 dark:text-gray-200 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt
        </p>
      </div>
      <div class="grid flex-row grid-cols-1  md:grid-cols-2 md:gap-9 lg:grid-cols-3">
        <div
          className="my-class"
          class="max-w-md px-8 py-4 mt-16 bg-indigo-100 rounded-lg shadow-lg dark:bg-gray-800"
        >
          <div class="flex justify-center -mt-16 md:justify-end text-indigo-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" object-cover w-20 h-20 border-4 border-indigo-500 rounded-lg dark:border-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-2xl">
            Mobile App Development
          </h2>

          <p class="mt-2 text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div class="flex justify-end mt-4">
            <a
              href="#"
              class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
            >
              View Team
            </a>
          </div>
        </div>

        <div class="max-w-md px-8 py-4 mt-16 bg-indigo-100 rounded-lg shadow-lg dark:bg-gray-800">
          <div class="flex justify-center -mt-16 md:justify-end text-indigo-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-cover w-20 h-20 border-4 border-indigo-500 p-1 rounded-lg dark:border-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-2xl">
            Web App Development
          </h2>

          <p class="mt-2 text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div class="flex justify-end mt-4">
            <a
              href="#"
              class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
            >
              View Team
            </a>
          </div>
        </div>

        <div class="max-w-md px-8 py-4 mt-16 bg-indigo-100 rounded-lg shadow-lg dark:bg-gray-800">
          <div class="flex justify-center -mt-16 md:justify-end text-indigo-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-cover w-20 h-20 border-4 border-indigo-500 p-1 rounded-lg dark:border-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>

          <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-2xl">
            Embedded systems
          </h2>

          <p class="mt-2 text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div class="flex justify-end mt-4">
            <a
              href="#"
              class="text-xl font-medium text-indigo-500 dark:text-indigo-300"
            >
              View Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
