import {
  FaUsers,
  FaUserShield,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

const Info = () => {
  const infoList = [
    { name: "Projects", icon: FaProjectDiagram, counter: 15 },
    { name: "Developers", icon: FaUserShield, counter: 20 },
    { name: "Students", icon: FaUsers, counter: 75 },
    { name: "Teams", icon: FaCode, counter: 5 },
  ];
  return (
    <div className="sub__info">
      <section class="text-gray-600 bg-indigo-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            {infoList.map((info) => (
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200  bg-white px-4 py-6 rounded-lg">
                  <info.icon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {info.counter}+
                  </h2>
                  <p class="leading-relaxed">{info.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
