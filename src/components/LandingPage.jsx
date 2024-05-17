import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './landingPage.css';

const LandingPage = () => {
  const changingWords = ['kalorie!', 'zdrowie!'];
  const wordIndexRef = useRef(0);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: changingWords,
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      onComplete: (self) => {
        if (wordIndexRef.current === changingWords.length - 1) {
          wordIndexRef.current = 0;
        } else {
          wordIndexRef.current++;
        }
        self.start();
      }
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen w-full bg-pink-50 grid grid-cols-2 items-center bg-image-1">
      <div className='animated-text-container'>
        <h1 className='animated-text'>Licz swoje <br/> {<span ref={typedRef} className='changing-word'></span>}</h1>
      </div>
      <div>
        <h2>Policz swoje kalorie</h2>
      </div>
    </div>
  );
};

export default LandingPage;
