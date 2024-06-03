import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const ChangingText = ({ words }) => {
  const wordIndexRef = useRef(0);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      onComplete: (self) => {
        if (wordIndexRef.current === words.length - 1) {
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
  }, [words]);

  return <span ref={typedRef} className='changing-word'></span>;
};

export default ChangingText;
