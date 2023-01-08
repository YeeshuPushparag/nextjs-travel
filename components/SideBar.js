import React from 'react'
import Image from "next/legacy/image";
import Link from "next/link";
const SideBar = () => {
  const hideSideBar = ()=>{
    document.getElementById("sidebar").style.transform = "translateX(-200px)"
  }
  return (
    <aside id='sidebar'>
       <div id="cross" onClick={hideSideBar}>
          <Image
            layout="fill"
            objectFit="contain"
            src="/close-icon.png"
            alt="close"
          />
        </div>
       <ul className="navlink sidelink">
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
      <div className='side-cta'>
        <button id="side-button">Book Now</button>
     </div>
     
    </aside>
  )
}

export default SideBar
