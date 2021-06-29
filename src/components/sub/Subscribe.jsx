import React from "react";

const Subscribe = () => {
  return (
    <div className="sub__subscribe">
      <div className="w-full p-12 bg-gray-500  bg-indigo-900">
        <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
          <div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
            Subscribe For Our Updates
          </div>
          <div className=" m-0  p-0  text-xl  text-gray-300  antialiased  text-center">
            Find out about new events and other news
          </div>
          <div className="grid mt-3  md:flex  md:flex-row  md:flex-wrap">
            <input
              type="text"
              className=" text-gray-600 md:w-2/3  p-2 rounded-t-lg md:rounded-l-lg"
              placeholder="john@mail.com"
            />
            <button
              className=" p-2  md:w-1/3  bg-indigo-400  rounded-b-lg md:rounded-r-lg  text-white hover: bg-indigo-300"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
