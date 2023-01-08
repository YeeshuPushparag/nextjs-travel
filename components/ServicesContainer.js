import React from 'react'
import { FaHotel, FaHiking } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import {
  MdFastfood,
  MdOutlineAirplanemodeActive,
} from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
const ServicesContainer = () => {
  return (
    <div id='services'>
        <h2>Services</h2>
        <div className="services-container">
            <div className="service-list">
            <FaHotel color="#bd7457" fontSize={64} />
            <p className='service-name'>Affordable Hotels</p>
            <p className="service-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam autem velit modi optio ipsam consectetur, inventore ex minima non impedit rem vel enim, nisi iste!</p>
            </div>
            <div className="service-list">
            <FaHiking color="#bd7457" fontSize={64} />
            <p className='service-name'>Adventurous Trips</p>
            <p className="service-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam autem velit modi optio ipsam consectetur, inventore ex minima non impedit rem vel enim, nisi iste!</p>
            </div>
            <div className="service-list">
            <MdFastfood color="#bd7457" fontSize={64} />
            <p className='service-name'>Food &amp; Drinks</p>
            <p className="service-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam autem velit modi optio ipsam consectetur, inventore ex minima non impedit rem vel enim, nisi iste!</p>
            </div>
            <div className="service-list">
            <MdOutlineAirplanemodeActive color="#bd7457" fontSize={64} />
            <p className='service-name'>Fastest Travel</p>
            <p className="service-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam autem velit modi optio ipsam consectetur, inventore ex minima non impedit rem vel enim, nisi iste!</p>
            </div>
            <div className="service-list">
            <BiWorld color="#bd7457" fontSize={64} />
            <p className='service-name'>Around The Globe</p>
            <p className="service-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam autem velit modi optio ipsam consectetur, inventore ex minima non impedit rem vel enim, nisi iste!</p>
            </div>
            <div className="service-list">
            <HiSpeakerphone color="#bd7457" fontSize={64} />
            <p className='service-name'>Safety Guide</p>
            <p className="service-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam autem velit modi optio ipsam consectetur, inventore ex minima non impedit rem vel enim, nisi iste!</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesContainer