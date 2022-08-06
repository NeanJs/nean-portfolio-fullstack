import React from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import SocialHanger from "../components/socialhanger";
function Home() {
  const colorstripes = [
    {
      title: "Color1",
      color: "#2FA4FF",
    },
    {
      title: "Color1",
      color: "#023550",
    },
    {
      title: "Color1",
      color: "#FF530E",
    },
  ];
  const home_content = useSelector((state) => state.firebasedata.home_content);
  return (
    <div className="home global w-full h-full flex flex-col items-center justify-center bg-gray relative">
      {/* <img
        src={balloon}
        className="absolute left-0 top-10 balloon "
        data-aos="slide-up"
      /> */}
      {/* <img src={treesec} className="absolute  top-10  z-10"/> */}
      {/* <div className="color-shades absolute right-0 flex items-center justify-end">
        {colorstripes.map((stripe, id) => (
          <div
            data-aos="slide-up"
            data-aos-delay={id * 400}
            key={`${stripe.title}-${stripe.color}`}
            className="colorstripe"
            style={{ background: stripe.color }}
          ></div>
        ))}
      </div> */}
      <div className="flex flex-col w-full h-2/5 items-center">
        <div
          data-aos="fade-up"
          className="box relative flex items-center gap-10 bg-white rounded-2xl"
        >
          <div className="header-section flex flex-col h-full justify-center items-start p-10 gap-10">
            <div className="flex flex-col overlay-text relative">
              {/* <img className="absolute home-user" data-aos="fade-up" data-aos-delay={500} src={user} /> */}

              <h1
                data-aos="fade-up"
                data-aos-delay={100}
                className="text-exl tracking-xl header leading-none"
              >
                {home_content?.profile_title}
              </h1>
              <span
                data-aos="fade-up"
                data-aos-delay={300}
                className="text-xl sub-header"
              >
                {home_content?.profile_desc}
              </span>
              <div
                data-aos="fade-up"
                data-aos-delay={500}
                className="btn-container flex justify-start items-center gap-3"
              >
                <a target="_blank" href={home_content?.resume} className="btn">
                  Latest Resume
                </a>
                <Link smooth to="projects" className="btn prj-btn">
                  See My Works
                </Link>
              </div>
            </div>
            <div
              className="mail-nean flex items-center justify-between w-full "
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <span className="flex flex-col text-dark text-sm ease">
                <span>Ping me at: </span>
                <a
                  href="mailto:neancodes@gmail.com"
                  className="link hover:text-blue"
                >
                  neancodes@gmail.com
                </a>
              </span>
              <div className="flex social flex-col items-start text-sm">
                <span>Find me at:</span>
                <SocialHanger/>
                {/* <div className="social-handles flex items-center w-full gap-2 text-md">
                  {sociallinks.map((link) => (
                    <a
                      className="link sm-icon"
                      key={`${link.name}-${link.link}`}
                      href={link.link}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="notnean-div" data-aos="fade-up" data-aos-delay={500}>
            <img
              loading="lazy"
              className="not-nean"
              src={home_content?.profile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
