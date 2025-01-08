import React from "react";

const Projects = () => {
  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Project+${
                  index + 1
                }`}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project {index + 1}
                </h3>
                <p className="text-gray-600">
                  A brief description of this amazing project.
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
