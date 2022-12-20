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
      <div className='side-cta'>
        <button id="side-button">Book Now</button>
     </div>
     
    </aside>
  )
}

export default SideBar
