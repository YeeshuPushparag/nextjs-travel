import Image from "next/legacy/image";
import React from "react";
import {
  MdLocationPin
} from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const PackagesContainer = () => {
  return (
    <>
      <div id="packages">
        <h2>Packages</h2>
        <div className="packages-container">
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/madrid.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Madrid</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/dubai.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Dubai</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/paris.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Paris</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/rome.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Rome</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/london.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">London</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/taj-mahal.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Agra, India</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/gornergrat.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Swiss Alpes</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/greece.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Greece</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/maldives-tour.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Maldives</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
          <div className="package-item">
            <div className="package-item-image">
              <Image layout="fill" objectFit="cover" src="/caribbean.jpg" />
            </div>
            <div className="package-item-details">
              <div className="package-location">
                <MdLocationPin color="#bd7457" fontSize={20} />{" "}
                <span className="location-name">Caribbean</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt perspiciatis facere libero velit maxime fugiat!
              </p>
              <div className="package-ratings">
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiFillStar color="#bd7457" fontSize={20} />
                <AiOutlineStar color="#bd7457" fontSize={20} />
              </div>
              <div className="package-price">
                <span className="discount-price">$99.00</span>
                <span className="original-price">$149.00</span>
              </div>
              <button className="book-package">Book Package</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesContainer;
