import React from 'react'
import Image from "next/legacy/image"

const Partners = () => {
  return (
    <div id="partners">
    <h2>Our Partners</h2>
    <div className="partners-list">
        <div className="partners-image">
        <Image layout="fill" objectFit="contain" src="/Air_France.png" />
        </div>
        <div className="partners-image">
        <Image layout="fill" objectFit="contain" src="/British_Airways.png" />
        </div>
        <div className="partners-image">
        <Image layout="fill" objectFit="contain" src="/Lufthansa.png" />
        </div>
        <div className="partners-image">
        <Image layout="fill" objectFit="contain" src="/Swiss_International_Air_Lines.png" />
        </div>
        <div className="partners-image">
        <Image layout="fill" objectFit="contain" src="/KFC.png" />
        </div>
        <div className="partners-image">
        <Image layout="fill" objectFit="contain" src="/Papa_John's_Pizza.png" />
        </div>
    </div>
    </div>
  )
}

export default Partners