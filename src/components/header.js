import React from "react"
import logo from "../images/gatsby-astronaut.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons"

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
      <div className="info-bottom">
        <div className="info-line">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>6 de Dezembro, 2000</span>
        </div>
        <div className="info-line">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Belo Horizonte, MG</span>
        </div>
        <div className="info-line">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>6 de Dezembro, 2000</span>
        </div>
        <div className="info-line">
          <FontAwesomeIcon icon={faMobileAlt} />
          <span>6 de Dezembro, 2000</span>
        </div>
      </div>
    </div>
  </div>
)

export default Header
