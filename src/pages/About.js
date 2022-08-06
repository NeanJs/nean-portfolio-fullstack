import React, { useEffect } from "react";
import tree from "../assets/images/home/trees.svg";
import treesec from "../assets/images/home/trees-other.svg";
import "../assets/styles/about.scss";
import { useSelector } from "react-redux";
function About() {
  const about_content = useSelector(
    (state) => state.firebasedata.about_content
  );
  return (
    <div className="about global w-full h-screen flex flex-col items-center justify-center bg-grayE text-dark relative">
      {/* <SocialHanger/> */}

      <img
        src={tree}
        loading="lazy"
        className="absolute bottom-0 left-10 tree"
        data-aos="slide-up"
        data-aos-delay={100}
        data-aos-offset="-400"
      />
      <img
        loading="lazy"
        src={treesec}
        className="absolute bottom-0 right-20 tree"
        data-aos="slide-up"
        data-aos-delay={300}
        data-aos-offset="-400"
      />
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex flex-col about-box w-full h-full items-center justify-start">
          <h1 className="text-xl tracking-xl z-1">Who is this guy?</h1>
          <div className="flex about-container items-start justify-center">
            <div className="image-holder flex flex-col items-center">
              <img src={about_content?.image} className="about_image" />
            </div>
            <div className="info-holder flex flex-col items-center justify-start h-full gap-5 px-5">
              <div className="about-header flex flex-col justify-center">
                <span className="text-md">
                  <u>Brief about me</u>
                </span>
              </div>
              <div className="about-description flex flex-col items-center justify-center gap-3" data-aos="fade-up">
                <p className="primary">{about_content?.primary}</p>
                <p className="secondary">{about_content?.secondary}</p>
              </div>
              <div className="skillsets flex flex-col items-start w-full justify-start gap-4">
                <div className="skills flex flex-col w-full">
                  <span className="text-blue text-md">
                    <u>Skills/Expertise</u>
                  </span>
                  <div className="skills-list flex justify-start gap-5 items-end flex-wrap">
                    {about_content?.skills.map((skill, id) => (
                      <div
                        data-aos="fade-right"
                        data-aos-delay={id * 100}
                        className="skill flex flex-col items-center gap-2"
                        key={`${skill.name}-${id}`}
                      >
                        <img loading="lazy" src={skill.icon} className="icon" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tools flex flex-col w-full">
                  <span className="text-blue text-md">
                    <u>Tools/Frameworks</u>
                  </span>
                  <div className="tools-list flex justify-start gap-5 items-end flex-wrap">
                    {about_content?.tools.map((tool, id) => (
                      <div
                        data-aos="fade-right"
                        data-aos-delay={id * 150}
                        key={`${tool.name}-${id}`}
                        className="tool flex flex-col items-center gap-2"
                      >
                        <img loading="lazy" src={tool.icon} className="icon" />
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
