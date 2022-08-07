import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./assets/styles/home.scss";
import "./assets/styles/about.scss";
import "./assets/styles/projects.scss";
import "./assets/styles/contact.scss";
import aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { getfromFirebase } from "./actions/firebasedata";
import Loader from "./components/loader";
import Footer from "./components/footer";
function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    aos.init({ duration: 700, easing: "ease", once: true });
    dispatch(getfromFirebase());
    setTimeout(() => setLoader(false), 4000);
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="main">
          <Navbar />
          <div className="app">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
