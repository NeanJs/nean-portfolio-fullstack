import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";
function SocialHanger() {
  const links = useSelector(
    (state) => state.firebasedata.about_content.social_handles
  );
  // console.log(links)
  const sociallinks = [
    { icon: <FaFacebook />, link: links[0], name: "Facebook" },
    { icon: <FaTwitter />, link: links[1], name: "Twitter" },
    { icon: <FaGithub />, link: links[2], name: "Github" },
    { icon: <FaInstagram />, link: links[3], name: "Instagram" },
    { icon: <FaLinkedin />, link: links[4], name: "LinkedIn" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="social-handles flex items-center w-full justify-center gap-5 text-md">
        {sociallinks.map((link) => (
          <a
            className="link sm-icon"
            target="_blank"
            key={`${link.name}-${link.link}`}
            href={link.link}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialHanger;
