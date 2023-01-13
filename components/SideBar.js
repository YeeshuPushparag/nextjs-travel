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
          <Link href="/" className="link" onClick={hideSideBar}>
            Home
          </Link>
        </li>
        <li>
          <a href="/#packages" className="link" onClick={hideSideBar}>
            Packages
          </a>
        </li>
        <li>
          <a href="/#services" className="link" onClick={hideSideBar}>
            Services
          </a>
        </li>
        <li>
          <a href="/#gallery" className="link" onClick={hideSideBar}>
            Gallery
          </a>
        </li> 
        <li>
          <a href="/#contact" className="link" onClick={hideSideBar}>
            Contact
          </a>
        </li>
      </ul>
      <div className='side-cta'>
      <a href="/#book-now" className="link" onClick={hideSideBar}>
        <button id='side-button'>Book Now</button>
          </a>
     </div>
     
    </aside>
  )
}

export default SideBar
