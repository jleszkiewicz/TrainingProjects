import React from 'react';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Footer.css';
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="personal-info">
                <p>Joanna Leszkiewicz</p>
                <a href="http://leszkiewicz-portfolio.pl/" >
                    <FontAwesomeIcon
                        id="copy"
                        icon={faCopyright}/>
                </a>
            </div>
            <div className="contact-icons">

                <a href="https://www.linkedin.com/in/joanna-leszkiewicz-8714621b8/">
                    <FontAwesomeIcon
                        id="contact"
                        icon={faLinkedinIn}/>
                </a>
                <a href="https://github.com/jleszkiewicz" >
                    <FontAwesomeIcon
                        id="contact"
                        icon={faGithub}/>
                </a>
            </div>
        </div>
    )
}

export default Footer;