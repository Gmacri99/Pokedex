"use client"

import { useEffect, useState } from 'react';
import  './styles.css'
export default function ScreenDetector() {

  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {

      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  return (

    <>
      <div className="medidor-centro">
        <div className="screen-width">Width: {screenWidth}</div>
        <div className="screen-height">Height: {screenHeight}</div>
      </div>
    </>
  );
}
