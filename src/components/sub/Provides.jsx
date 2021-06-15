import { FaCheck } from "react-icons/fa";
import idea from "./idea.svg";

const provides = () => {
  const provides = [
    {
      title: "High Potential",
      description:
        "Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.",
    },
    {
      title: "consultancy",
      description:
        "Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.",
    },
    {
      title: "security",
      description:
        "Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.",
    },
    {
      title: "time ",
      description:
        "Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.",
    },
  ];
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 classNameName="text-indigo-900 text-3xl pb-6 lg:uppercase">
            Collaborating with Us{" "}
          </h2>
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {provides.map((provide) => (
                <div className="flex relative pb-12">
                  <div
                    className="
                  h-full
                  w-10
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
                  >
                    {provides[provides.length - 1] !== provide && (
                      <div className="h-full w-1 bg-indigo-400 pointer-events-none"></div>
                    )}
                  </div>
                  <div
                    className="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-indigo-500
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
                  >
                    <FaCheck />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2
                      className="
                    font-medium
                    title-font
                    text-sm text-gray-900
                    mb-1
                    tracking-wider
                  "
                    >
                      {provide.title}
                    </h2>
                    <p className="leading-relaxed">{provide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-center md:mt-0 mt-12"
              width="100"
              src={idea}
              alt="step"
            />
          </div>
          {/* {svg1} */}
        </div>
      </section>
    </div>
  );
};

export default provides;
