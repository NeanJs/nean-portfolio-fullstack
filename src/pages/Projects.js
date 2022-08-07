import React from "react";
import { useState } from "react";
import { GrLinkNext, GrShare } from "react-icons/gr";
import { useSelector } from "react-redux";
function Projects() {
  const [count, setCount] = useState(3);
  const projects = useSelector(
    (state) => state.firebasedata.projects?.projects_list
  );
  const showMore = () => {
    if (count < projects.length) {
      setCount((prevCount) => prevCount + 3);
    } else {
      setCount(3);
    }
  };
  return (
    <div className="projects flex flex-col items-center justify-start bg-gray projects p-10">
      <div className="relative w-full h-full flex flex-col items-center gap-10">
        <div className="project-header">
          <span className="text-xl">Projects</span>
        </div>
        <div className="flex flex-col projects-container gap-5">
          {projects?.slice(0, count).map((prj, id) => (
            <div
              key={`${prj.title}-${id}`}
              className="project rounded relative flex gap-10 w-full items-center"
              data-aos-delay={id * 50}
              data-aos-offset={-300}
              data-aos="fade-up"
            >
              <div className="prj-cover relative">
                <img src={prj.image} className="prj-image" loading="lazy" />
              </div>
              <div className="flex prj-info justify-center h-full w-full">
                <div className="prj-details">
                  <div className="project-title flex justify-between items-center flex-wrap">
                    <div className="flex flex-col items-start">
                      <span className="text-md text-dark">{prj.title}</span>
                      {prj.associated && (
                        <span className="associated text-sm flex items-center w-full">
                          <span className="text-sm flex gap-2 items-center">
                            <span>Associated with:</span>
                            <a
                              className="flex gap-1 items-center associate-link"
                              href={prj.associated.url}
                              target="_blank"
                            >
                              <span>{prj.associated.title}</span>
                            </a>
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="btn-container flex items-center">
                      <a
                        href={`http://${prj.url}`}
                        target="_blank no-referrer no-openner"
                        className="flex items-center justify-center gap-1 text-sm visit-link"
                      >
                        <span className="">Live</span>
                        <GrLinkNext className="visit-icon" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="project-info flex flex-col px-4 gap-3"
                    data-aos="fade-up"
                  >
                    <p className="text-dark text-sm">{prj.description}</p>
                    <div className="tech-stack flex items-end gap-5">
                      {prj?.techstack.map((tech, id) => (
                        <div
                        data-aos="fade-right"
                        data-aos-delay={id * 200}
                          className="tech flex flex-col items-center  gap-2 text-sm"
                          key={`${tech.name}-${id}`}
                        >
                          <img src={tech.icon} className="icon" />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more btn" onClick={showMore}>
          Show {count < projects?.length ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
