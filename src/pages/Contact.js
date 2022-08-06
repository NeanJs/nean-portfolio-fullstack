import React from "react";
import emailjs from "emailjs-com";
import formimage from "../assets/images/svgs/contact-form.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../assets/styles/contact.scss";
import SocialHanger from "../components/socialhanger";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_f64jucg",
        e.target,
        "user_jd6WEVpTXztcqNjCQ4FCH"
      )
      .then(
        (result) => {
          result.status == 200 &&
            toast.success("Your message was sent successfull!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact global flex flex-col items-center justify-center bg-grayE relative">
      <div className="contact-stripe h-screen right-0"></div>
      <div className="form-wrapper z-1 rounded">
        <div className="form-header flex flex-col justify-center items-center">
          <span className="text-xl font-extrabold">Stay Connected</span>
          <p className="text-md text-blue">Have a project or want to work?</p>
        </div>
        <div className="form-body flex items-center justify-between">
          <div
            className="form-leftouts flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <img src={formimage} loading="lazy" />
          </div>
          <div className="form-container flex flex-col justify-start gap-10 items-center">
            <form
              onSubmit={sendEmail}
              className="contact-form flex flex-col justify-start gap-10 h-full w-full"
            >
              <input
                data-aos="fade-left"
                data-aos-delay={100}
                placeholder="Your Name"
                type="text"
                required
                name="name"
              />
              <input
                data-aos="fade-left"
                data-aos-delay={200}
                placeholder="Your Email"
                type="text"
                required
                name="email"
              />{" "}
              <input
                data-aos="fade-left"
                data-aos-delay={300}
                placeholder="Title"
                type="text"
                required
                name="title"
              />
              <textarea
                data-aos="fade-left"
                data-aos-delay={400}
                placeholder="Your Message"
                type="text"
                required
                name="message"
              />
              <button className="btn" type="submit" value="send">
                Send Message
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <span>Ping me at:</span>
          <SocialHanger />
        </div>
      </div>
    </div>
  );
}

export default Contact;
{
  /*  */
}
