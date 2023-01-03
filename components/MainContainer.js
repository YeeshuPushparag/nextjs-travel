import React, { useEffect, useRef ,useState} from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Header from "./Header";
import SideBar from "./SideBar";
import Image from "next/legacy/image";
import Script from "next/script";

const useWindowSize=()=> {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
const Maincontainer = () => {
 
  const size = useWindowSize();
  useEffect(() => {
  if (window.innerWidth>768) {
    document.getElementById("sidebar").style.transform = "translateX(-250px)";
    document.getElementById("ham").style.display = "none"
  }
  else{
    document.getElementById("ham").style.display = "flex"
  }
  }, [size])
  

  return (
<>
    <div id="nav-head">
      <Image
        layout="fill"
        objectFit="cover"
        src="/london.jpg"
        className="bg"
        id="bg-1"
      />
      <Image
        layout="fill"
        objectFit="cover"
        src="/rome.jpg"
        className="bg"
        id="bg-2"
      />
      <Image
        layout="fill"
        objectFit="cover"
        src="/paris.jpg"
        className="bg"
        id="bg-3"
      />
      <div className="nav-head-container">
        <SideBar />
        <Navbar />
        <Header />
        <div className="circle-list">
          <div className="circle" id="circle1">
            <div className="small-circle" id="small-circle1"></div>
          </div>
          <div className="circle circle-ani" id="circle2">
            <div
              className="small-circle small-circle-ani"
              id="small-circle2"
            ></div>
          </div>
          <div className="circle" id="circle3">
            <div className="small-circle" id="small-circle3"></div>
          </div>
        </div>
        <FaAngleLeft
          className="left-arrow"
          id="left"
          color="#fff"
          fontSize={20}
        />
        <FaAngleRight
          className="right-arrow"
          id="right"
          color="#fff"
          fontSize={20}
        />
      </div>
    </div>
    <Script src="/changebg.js" strategy="lazyOnload"></Script>
    </>
  );
};

export default Maincontainer;
