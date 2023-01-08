import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const showSideBar= ()=>{
document.getElementById("sidebar").style.transform = "translateX(0px)";
  }
 
  
  return (
    <nav className="navbar">
      <div id="ham" onClick={showSideBar}>
        <Image
          layout="fill"
          objectFit="contain"
          src="/menu-icon.png"
          alt="menu"
        />
      </div>
      <div className="logo">
        <Link href="/" className="link">
          <h1 className="logo-heading">Tourister</h1>
        </Link>
      </div>
      <ul className="navlink">
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <a href="/#packages" className="link">
            Packages
          </a>
        </li>
        <li>
          <a href="/#services" className="link">
            Services
          </a>
        </li>
        <li>
          <a href="/#gallery" className="link">
            Gallery
          </a>
        </li> 
        <li>
          <a href="/#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
      <div className="cta">
        <button className="cta-button">Book Now</button>
      </div>
    </nav>
    )
};

export default Navbar;
