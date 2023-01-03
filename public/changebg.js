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


let Navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", ()=>{
      if (window.scrollY>window.innerHeight) {
        Navbar.classList.add("fixed-nav");
      }
      else{
        Navbar.classList.remove("fixed-nav");
      }
    })