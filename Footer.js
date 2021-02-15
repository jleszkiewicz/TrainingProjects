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
            <FontAwesomeIcon
                id="copy"
                icon={faCopyright}/>
            </div>
            <div className="contact-icons">
                <FontAwesomeIcon
                    id="contact"
                    icon={faLinkedinIn}/>
                <FontAwesomeIcon
                    id="contact"
                    icon={faGithub}/>
            </div>
        </div>
    )
}

export default Footer;