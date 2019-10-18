import React from "react"
import logo from "../images/gatsby-astronaut.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const Header = () => (
  <div className="sidebar">
    <img src={logo} alt="profile" />
    <div className="info-top">
      <h2>
        <span>Rogério</span> Moura
      </h2>
      <div className="pill">Front-end Developer</div>
      <div>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faGithubAlt} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </div>
  </div>
)

export default Header
