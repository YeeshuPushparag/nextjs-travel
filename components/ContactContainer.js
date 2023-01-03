import React from "react";
import Image from "next/legacy/image";
const ContactContainer = () => {
  return (
    <div className="contact">
 <Image
        layout="fill"
        objectFit="cover"
        src="/titlis.jpg"
      />
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-form">
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholder="enter your email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="enter your message"
        ></textarea>
        <button>Send Message</button>
      </div>
    </div>
    </div>
  );
};
export default ContactContainer;
