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
          <Link href="/#" className="link">
            Packages
          </Link>
        </li>
        <li>
          <Link href="/#" className="link">
            Services
          </Link>
        </li>
        <li>
          <Link href="/#" className="link">
            Gallery
          </Link>
        </li> 
        <li>
          <Link href="/#" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="cta">
        <button className="cta-button">Book Now</button>
      </div>
    </nav>
    )
};

export default Navbar;
