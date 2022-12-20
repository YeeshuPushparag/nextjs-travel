import React, { useEffect, useRef ,useState} from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Header from "./Header";
import SideBar from "./SideBar";
import Image from "next/legacy/image";
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
  function showAnimation() {
    var count = 2;
    let myInterval = null;
    function runInterval() {
      myInterval = setInterval(() => {
        if (count === 3) {
          document.getElementById("bg-3").style.opacity = "0";
          document.getElementById("circle3").classList.remove("circle-ani");
          document
            .getElementById("small-circle3")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-1").style.opacity = "1";
          document.getElementById("circle1").classList.add("circle-ani");
          document
            .getElementById("small-circle1")
            .classList.add("small-circle-ani");
          count = 1;
        } else if (count === 2) {
          document.getElementById("bg-2").style.opacity = "0";
          document.getElementById("circle2").classList.remove("circle-ani");
          document
            .getElementById("small-circle2")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-3").style.opacity = "1";
          document.getElementById("circle3").classList.add("circle-ani");
          document
            .getElementById("small-circle3")
            .classList.add("small-circle-ani");
          count = 3;
        } else if (count === 1) {
          document.getElementById("bg-1").style.opacity = "0";
          document.getElementById("circle1").classList.remove("circle-ani");
          document
            .getElementById("small-circle1")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-2").style.opacity = "1";
          document.getElementById("circle2").classList.add("circle-ani");
          document
            .getElementById("small-circle2")
            .classList.add("small-circle-ani");
          count = 2;
        }
      }, 3000);
    }
    runInterval();
    document.getElementById("circle1").addEventListener("click", () => {
      changeBg("bg-1");
    });
    document.getElementById("circle2").addEventListener("click", () => {
      changeBg("bg-2");
    });
    document.getElementById("circle3").addEventListener("click", () => {
      changeBg("bg-3");
    });
    document.getElementById("left").addEventListener("click", () => {
      changeBg("left");
    });
    document.getElementById("right").addEventListener("click", () => {
      changeBg("right");
    });
  
    function changeBg(data) {
      if (data === "bg-1") {
        clearInterval(myInterval);
        document.getElementById(`bg-${count}`).style.opacity = "0";
        document.getElementById(`circle${count}`).classList.remove("circle-ani");
        document
          .getElementById(`small-circle${count}`)
          .classList.remove("small-circle-ani");
        document.getElementById("bg-1").style.opacity = "1";
        document.getElementById("circle1").classList.add("circle-ani");
        document
          .getElementById("small-circle1")
          .classList.add("small-circle-ani");
        count = 1;
        setTimeout(() => {
          runInterval();
        });
      }
      if (data === "bg-2") {
        clearInterval(myInterval);
        document.getElementById(`bg-${count}`).style.opacity = "0";
        document.getElementById(`circle${count}`).classList.remove("circle-ani");
        document
          .getElementById(`small-circle${count}`)
          .classList.remove("small-circle-ani");
        document.getElementById("bg-2").style.opacity = "1";
        document.getElementById("circle2").classList.add("circle-ani");
        document
          .getElementById("small-circle2")
          .classList.add("small-circle-ani");
        count = 2;
        setTimeout(() => {
          runInterval();
        });
      }
      if (data === "bg-3") {
        clearInterval(myInterval);
        document.getElementById(`bg-${count}`).style.opacity = "0";
        document.getElementById(`circle${count}`).classList.remove("circle-ani");
        document
          .getElementById(`small-circle${count}`)
          .classList.remove("small-circle-ani");
        document.getElementById("bg-3").style.opacity = "1";
        document.getElementById("circle3").classList.add("circle-ani");
        document
          .getElementById("small-circle3")
          .classList.add("small-circle-ani");
        count = 3;
        setTimeout(() => {
          runInterval();
        });
      }
      if (data === "left") {
        clearInterval(myInterval);
        if (count === 3) {
          document.getElementById("bg-3").style.opacity = "0";
          document.getElementById("circle3").classList.remove("circle-ani");
          document
            .getElementById("small-circle3")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-2").style.opacity = "1";
          document.getElementById("circle2").classList.add("circle-ani");
          document
            .getElementById("small-circle2")
            .classList.add("small-circle-ani");
          count = 2;
          setTimeout(() => {
            runInterval();
          });
        } else if (count === 2) {
          document.getElementById("bg-2").style.opacity = "0";
          document.getElementById("circle2").classList.remove("circle-ani");
          document
            .getElementById("small-circle2")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-1").style.opacity = "1";
          document.getElementById("circle1").classList.add("circle-ani");
          document
            .getElementById("small-circle1")
            .classList.add("small-circle-ani");
          count = 1;
          setTimeout(() => {
            runInterval();
          });
        } else if (count === 1) {
          document.getElementById("bg-1").style.opacity = "0";
          document.getElementById("circle1").classList.remove("circle-ani");
          document
            .getElementById("small-circle1")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-3").style.opacity = "1";
          document.getElementById("circle3").classList.add("circle-ani");
          document
            .getElementById("small-circle3")
            .classList.add("small-circle-ani");
          count = 3;
          setTimeout(() => {
            runInterval();
          });
        }
      }
      if (data === "right") {
        clearInterval(myInterval);
        if (count === 3) {
          document.getElementById("bg-3").style.opacity = "0";
          document.getElementById("circle3").classList.remove("circle-ani");
          document
            .getElementById("small-circle3")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-1").style.opacity = "1";
          document.getElementById("circle1").classList.add("circle-ani");
          document
            .getElementById("small-circle1")
            .classList.add("small-circle-ani");
          count = 1;
          setTimeout(() => {
            runInterval();
          });
        } else if (count === 2) {
          document.getElementById("bg-2").style.opacity = "0";
          document.getElementById("circle2").classList.remove("circle-ani");
          document
            .getElementById("small-circle2")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-3").style.opacity = "1";
          document.getElementById("circle3").classList.add("circle-ani");
          document
            .getElementById("small-circle3")
            .classList.add("small-circle-ani");
          count = 3;
          setTimeout(() => {
            runInterval();
          });
        } else if (count === 1) {
          document.getElementById("bg-1").style.opacity = "0";
          document.getElementById("circle1").classList.remove("circle-ani");
          document
            .getElementById("small-circle1")
            .classList.remove("small-circle-ani");
          document.getElementById("bg-2").style.opacity = "1";
          document.getElementById("circle2").classList.add("circle-ani");
          document
            .getElementById("small-circle2")
            .classList.add("small-circle-ani");
          count = 2;
          setTimeout(() => {
            runInterval();
          });
        }
      }
    }
  }
  const size = useWindowSize();
  const dataFetchedRef = useRef(false);
  useEffect(() => {
  if (window.innerWidth>768) {
    document.getElementById("sidebar").style.transform = "translateX(-250px)";
    document.getElementById("ham").style.display = "none"
  }
  else{
    document.getElementById("ham").style.display = "flex"
  }
  }, [size])
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    showAnimation();
  }, []);
  return (
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
  );
};

export default Maincontainer;
