import img from "./img.png";

const Projects = () => {
  const projects = [1, 3, 2, 4, 3, 5, 6];
  return (
    <div>
      <h2 className="text-3xl text-center p-5">OUR WORKS</h2>
      <div className="md:flex md:flex-wrap m-5">
        {projects.map((p) => (
          <div
            class="max-w-sm rounded-lg m-2 overflow-hidden shadow-lg mx-auto"
            id="card-1"
          >
            <img class="w-full" src={img} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <h3 class="font-bold text-xl mb-2 leading-normal">InQuery</h3>
              <p class="text-grey-darker text-base leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span
                class="
            inline-block
            bg-grey-lighter
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-grey-darker
            mr-2
            mb-1
          "
              >
                <span>#photography</span>
              </span>
              <span
                class="
            inline-block
            bg-grey-lighter
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-grey-darker
            mr-2
            mb-1
          "
              >
                <span>#travel</span>
              </span>
              <span
                class="
            inline-block
            bg-grey-lighter
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-grey-darker
            mr-2
            mb-1
          "
              >
                <span>#winter</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
