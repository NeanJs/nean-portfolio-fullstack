import React from "react";
import { useEffect } from "react";
import "./styles.scss";
function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col relative  bg-gray">
      <div className="loader flex items-center justify-center flex-col">
        <svg
          id="container"
          width="300"
          height="300"
          viewBox="0 0 326 326"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.53553 162.635L162.635 3.53553L321.734 162.635L162.635 321.734L3.53553 162.635Z"
            stroke="black"
            strokeWidth="5"
          />
        </svg>

        <svg
          width="66"
          height="92"
          className="absolute"
          id="loader"
          viewBox="0 0 66 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.47247 91V91.5H1.97247H10.3505H10.8505V91V17.8331L54.7934 91.2568L54.939 91.5H55.2225H64.0265H64.5265V91V1.966V1.466H64.0265H55.9325H55.4325V1.966V74.0107L11.7725 1.70755L11.6266 1.466H11.3445H1.97247H1.47247V1.966V91Z"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
