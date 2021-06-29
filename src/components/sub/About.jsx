import React from "react";
import { Link } from "react-router-dom";
import team from "./team.svg";

const About = () => {
  const about = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Pariatur nobis explicabo doloremque atque repudiandae, ad nisi
  nihil dolorum? Excepturi sapiente expedita unde, culpa
  quibusdam eveniet doloremque animi. Facere, ipsa optio.
  `;

  return (
    <div className="sub__about">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <img
              className="invisible lg:visible lg:w-3/5 md:w-1/2 object-center md:mt-0 mt-12"
              width="100"
              src={team}
              alt="step"
            />
            <div className="text-center flex justify-center items-center lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div>
                <h1 className="text-3xl text-black underline font-bold">
                  ABOUT US
                </h1>
                <p className="text-left text-xl text-black p-8">{about}</p>
                <Link
                  to="/about"
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
