import React from "react";
import "./Footer.css";
import FooterInfo from "../FooterInfo/FooterInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const services = [
  { name: "Bicycle accessories", link: "/" },
  { name: "Mountain cycle", link: "/" },
  { name: "Cycle accessories set", link: "/" },
  { name: "Cycle chainring", link: "/" },
  { name: "Cycle crank", link: "/" },
  { name: "Cycle chain", link: "/" },
  { name: "More", link: "/" },
];

const ourProduct = [
  { name: "Bicycle accessories", link: "/" },
  { name: "Mountain cycle", link: "/" },
  { name: "Cycle accessories set", link: "/" },
  { name: "Cycle crank", link: "" },
  { name: "Cycle chain", link: "/" },
  { name: "Cycle chainring", link: "/" },
  { name: "Cycle break set", link: "/" },
];
const ourAddress = [
  { name: "United State - 203902", link: "//google.com/map" },
  { name: "America", link: "//google.com/map" },
];

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid footer-section margin">
        <div className="width-maintain">
          <div className="row">
            <FooterInfo
              key={1}
              title="Our Services"
              items={services}
            ></FooterInfo>
            <FooterInfo
              key={2}
              title="Our Product"
              items={ourProduct}
            ></FooterInfo>
            <FooterInfo key={3} title="Our Address" items={ourAddress}>
              <ul className="social-icon">
                <li>
                  <a href="//facebook.com">
                    <FontAwesomeIcon
                      className="icon fb-icon"
                      icon={faFacebookF}
                    />
                  </a>
                </li>
                <li>
                  <a href="//google.com">
                    <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                  </a>
                </li>
                <li>
                  <a href="//twitter.com">
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <h5>Contact Us</h5>
                <p>Email: test@gmail.com</p>
                <p>Phone: +111 (019) 25184203</p>
              </div>
            </FooterInfo>
          </div>
          <div className="mt-5 text-center">
            <p>Copyright {new Date().getFullYear()} By mahfuztech</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
