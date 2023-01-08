import React from 'react'
import Image from "next/legacy/image"
const Gallery = () => {
  return (
    <div id='gallery'>
        <h2>Gallery</h2>
        <div className="gallery-container">
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/dubai-image.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/Wengernalpbahn.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/lake-thun.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/Jungfrau-Railway.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/lake-geneva.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/lausanne.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/geneva.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/greece-tuor.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/dubai-skyline.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/maldives-travel.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/burj-al-arab.jpg" />
            </div>
            <div className="gallery-item">
            <Image layout="fill" objectFit="cover" src="/maldives-destination.jpg" />
            </div>
        </div>
    </div>
  )
}

export default Gallery