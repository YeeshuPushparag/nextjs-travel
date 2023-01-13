import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            rem! Nulla excepturi ullam dolor omnis iste quae autem modi numquam.
          </p>
        </div>
        <div className="footer-location">
          <h2>Our Locations</h2>
          <ul>
            <li>
              <a href="/#" className="link">
                USA
              </a>
            </li>
            <li>
              <a href="/" className="link">
                Italy
              </a>
            </li>
            <li>
              <a href="/" className="link">
                Australia
              </a>
            </li>
            <li>
              <a href="/" className="link">
                Germany
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
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
        </div>
        <div className="footer-social-media">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="/#" className="link">
                Facebook
              </a>
            </li>
            <li>
              <a href="/" className="link">
                Instagram
              </a>
            </li>
            <li>
              <a href="/" className="link">
                Twitter
              </a>
            </li>
            <li>
              <a href="/" className="link">
                LinkdIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; Created by <a href="https://yeeshupushparag.github.io/" className="link creator"  target='_blank' rel="noreferrer" >Yeeshu Pushparag</a></p>
      </div>
    </footer>
  );
};

export default Footer;
