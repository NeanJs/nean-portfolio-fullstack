import React, { useState } from "react";
import { Link } from "react-scroll";
import { routes_links } from "../constants/constants";
import user from "../assets/images/svgs/user-sitting.svg";
import balloon from "../assets/images/svgs/balloon.svg";
import { useSelector } from "react-redux";
import Queue from "../assets/images/svgs/queue.svg";
import { GrLinkNext } from "react-icons/gr";
import { useEffect } from "react";
function Navbar() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    projects.length && setLoading(false);
  }, []);
  const projects = useSelector(
    (state) => state.firebasedata.projects?.projects_list
  );
  const [pop, setPop] = useState(false);

  const PopIn = () => {
    let navbar = document.querySelector(".navbar");
    let menu = document.querySelector(".menu");
    setPop(!pop);
    navbar.classList.toggle("popin");
    menu.classList.toggle("pop");
  };
  const handleMobileNav = () => {
    let navbar = document.querySelector(".mobile-navbar");
    let menu = document.querySelector(".mobile");
    setPop(!pop);
    navbar.classList.toggle("popin");
    menu.classList.toggle("pop");
  };
  window.onscroll = (e) => {
    window.scrollY > 300
      ? document.querySelector(".mobile-nav").classList.add("scroll")
      : document.querySelector(".mobile-nav").classList.remove("scroll");
  };
  return (
    <>
      <div className="mobile-nav fixed top-0 flex flex-col w-screen ">
        <div className="header flex items-center justify-between w-full px-1">
          <Link
            smooth
            to="home"
            className="logo text-xl text-dark cursor-pointer md:text-md"
          >
            NEAN
          </Link>
          <div
            className="burger flex items-center justify-center "
            onClick={handleMobileNav}
          >
            <span className="mobile"></span>
          </div>
        </div>
        <div className="relative">
          <div className="mobile-navbar fixed w-screen h-full">
            <ul className="routes w-full flex flex-col gap-10">
              {routes_links.map((route) => (
                <Link
                  onClick={() => (pop ? PopIn() : null)}
                  to={route.path}
                  smooth
                  key={`${route.title}-${route.path}`}
                  className="route cursor-pointer"
                  spy
                  activeClass="active"
                >
                  {route.title}
                </Link>
              ))}
            </ul>
            <img
              loading="lazy"
              src={user}
              className="absolute right-0 bottom-0 user-nav"
            />{" "}
            <img
              loading="lazy"
              src={balloon}
              className="absolute right-0 bottom-0 user-balloon"
            />
          </div>
        </div>
      </div>
      <div className="navbar fixed left-0">
        <div className="w-full h-full navlinks flex items-center justify-between z-10 relative">
          <div
            onClick={PopIn}
            className="burger absolute flex items-center justify-center z-10"
          >
            <span className="menu"></span>
          </div>
          <div
            className="nav-left flex flex-col items-start h-full justify-between z-10 "
            data-aos="fade-right"
          >
            <Link
              onClick={() => (pop ? PopIn() : null)}
              className="logo text-xl cursor-pointer"
              to="home"
              smooth
            >
              NEAN
            </Link>
            <ul className="routes w-full flex flex-col gap-10">
              {routes_links.map((route, id) => (
                <Link
                  onClick={() => (pop ? PopIn() : null)}
                  to={route.path}
                  smooth
                  key={`${route.title}-${route.path}`}
                  className="route cursor-pointer"
                  spy
                  activeClass="active"
                >
                  {route.title}
                </Link>
              ))}
            </ul>
          </div>
          {pop && (
            <div className="nav-right bg-grayE relative flex items-center justify-center">
              {loading ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src={Queue}
                    data-aos-delay={300}
                    data-aos="zoom-in-right"
                  />
                  <span
                    className="text-md"
                    data-aos-delay={300}
                    data-aos="zoom-in-right"
                  >
                    Loading...
                  </span>
                </div>
              ) : (
                <div
                  className="featured-section h-full flex flex-col p-3 gap-2 items-center"
                  data-aos="fade-up"
                >
                  <span className="text-md flex flex-col items-center">
                    Featured Projects
                    <span className="text-sm">
                      Here are some projects I would like to feature
                    </span>
                  </span>
                  <div className="featured-projects flex justify-center gap-10 items-center flex-wrap p-10">
                    {projects.map(
                      (project, id) =>
                        project.featured && (
                          <div
                          data-aos-offset={-500}
                            data-aos="fade-up"
                            data-aos-delay={id * 200}
                            className="project relative shadow-md rounded-xl"
                            key={`${id}-${project.title}`}
                          >
                            <img src={project.image} className="feature-img" />
                            <div className="feature-body flex items-center justify-between">
                              <div className="flex items-center justify-between w-full">
                                <span className="text-md body-head">
                                  {project.title}
                                </span>
                                <div className="btn-container flex items-center">
                                  <a
                                    href={`http://${project.url}`}
                                    target="_blank no-referrer no-openner"
                                    className="flex items-center justify-center gap-1 text-sm visit-link"
                                  >
                                    <span className="">Live</span>
                                    <GrLinkNext className="visit-icon" />
                                  </a>
                                </div>
                              </div>
                              <div className="body-sub absolute">
                                <span className="text-md body-head">
                                  {project.title}
                                </span>
                                <p className="text-sm">{project.description}</p>
                                <div className="flex justify-between items-center flex-wrap">
                                  <div className="tech-stack flex items-end gap-5 ">
                                    {project.techstack.map((tech, id) => (
                                      <div
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
                        )
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
