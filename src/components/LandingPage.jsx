import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./landingPage.css";

const LandingPage = () => {
  const changingWords = ['kalorie!', 'zdrowie!'];

  return (
    <div
      className="h-screen w-full bg-pink-50 grid grid-cols-2 items-center bg-image-1 top-0 left-0 bg-cover bg-center bg-no-repeat"
      id="landing-page"
    >
      <div className="animated-text-container">
        <h1 className="animated-text">
          Licz swoje <br />{" "}
          {<span ref={typedRef} className="changing-word"></span>}
        </h1>
      </div>
      <div>
        <h2>Policz swoje kalorie :D</h2>
      </div>
    </div>
  );
};

export default LandingPage;
