import React from "react";
import img from "./img.jpg";

const Members = () => {
  let arr = [2, 3, 3, 4, 1, 2, 3, 4, 3];
  return (
    <div className="bg-gray-900 text-center">
      <h1 className="text-white text-2xl text-center text-bold py-8">
        MEMBERS
      </h1>
      <div
        className="
      grid grid-cols-1
      gap-6
      p-8
      md:p-16
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5"
      >
        {arr.map((a) => (
          <div
            className="
        grid grid-cols-1
        gap-6
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4
        xl:grid-cols-4
      "
          >
            <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <img
                src={img}
                alt="img"
                width="75"
                style={{
                  objectFit: "contain",
                }}
                className="
            text-white
            flex
            items-center
            absolute
            rounded-full
            shadow-2xl
            left-24
            -top-6
          "
              />

              <div className="mt-20">
                <p className="text-xl font-semibold my-2">Faruq Ismael</p>
                <div className="flex space-x-2 text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Marketing Team</p>
                </div>
                <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>1 Weeks Left</p>
                </div>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
