import React from "react";
import SocialHanger from "../components/socialhanger";
import user from "../assets/images/user-sitting.svg";
import usercheck from "../assets/images/user-checking.svg";
import balloon from "../assets/images/home/balloon.svg";
import treesec from "../assets/images/home/trees-other.svg";
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
  return (
    <div className="home global w-full h-full flex flex-col items-center justify-center bg-gray relative">
      <SocialHanger />
      <img
        src={balloon}
        className="absolute left-0 top-10 balloon "
        data-aos="slide-up"
      />
      {/* <img src={treesec} className="absolute  top-10  z-10"/> */}
      <div className="color-shades absolute right-0 flex items-center justify-end">
        {colorstripes.map((stripe, id) => (
          <div
            data-aos="slide-up"
            data-aos-delay={id * 400}
            key={`${stripe.title}-${stripe.color}`}
            className="colorstripe"
            style={{ background: stripe.color }}
          ></div>
        ))}
      </div>
      <div className="flex flex-col w-full h-full items-center">
        <div className="box relative h-full">
          <div className="flex flex-col overlay-text relative">
            <h1
              data-aos="fade-up"
              data-aos-delay={500}
              className="text-exl tracking-xl header"
            >
              NEAN
            </h1>
            <span
              data-aos="fade-up"
              data-aos-delay={700}
              className="text-xl sub-header"
            >
              A Full Stack Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
