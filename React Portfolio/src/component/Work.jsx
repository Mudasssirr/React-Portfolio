import React from "react";

const Work = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Project Description",
      imageUrl: require("../assest/Project-1-Image"),
      projectLink: "Project Link",
    },
    {
      title: "Project 2",
      description: "Project Description",
      imageUrl: require("../assest/Project-3-Image"),
      projectLink: "Project Link"
    },
    {
      title: "Project 3",
      description:
        "Project Description",
      imageUrl: require("../assest/Project-2-Image"),
      projectLink: "Project Link",
    },
  ];
  return (
    <section
      name="work"
      className="py-10 bg-[#303846] text-gray-300 w-full h-full "
    >
      <div className="container mx-auto max-w-[1000px] items-start  p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-4xl font-bold inline border-b-2" style={{ borderColor: '#00f2ff' }}>
            Projects
          </h2>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        <div className="w-full cursor-pointer flex flex-wrap justify-center gap-4 text-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="shadow-md bg-[#1e252d] shadow-[#040c16] hover:scale-110 duration-500 p-2 w-[300px]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="mb-4 object-contain rounded-md shadow-md w-full h-[150px]"
                />
                <h3 className="text-[#00f2ff] text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#d0d5db]">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
