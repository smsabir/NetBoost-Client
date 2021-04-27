import { faFacebookF, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from './FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        {name: "Privacy Policy" , link: "/#"},
        {name: "Terms and Conditions" , link: "/#"},
        {name: "Fair Usages" , link: "/#"},
        {name: "CyberSecurity Concern" , link: "/#"},
        {name: "Speed Check Up" , link: "/#"},
    ]
    const ourAddress = [
        {name: "Berlin - 10521" , link: "//google.com/map"},
        {name: "Germany" , link: "//google.com/map"},
        {name: "Phone: +370124555" , link: "//google.com/map"},
       
    ]
    const gaming = [
        {name: "Dedicated Gaming Server" , link: "/#"},
        {name: "Gaming BroadBand" , link: "/#"},
        {name: "Buffer-less Streaming" , link: "/#"},
        {name: "E-Gaming Server" , link: "/#"},
        {name: "Another Service" , link: "/#"},
       
    ]
    const services = [
        {name: "Seamless Wifi" , link: "/#"},
        {name: "Gaming Server" , link: "/#"},
        {name: "Dedicated Broadband" , link: "/#"},
        {name: "4K HD IP TV" , link: "/#"},
        {name: "Another Service" , link: "/#"},
       
    ]
    return (
        <footer className="footer-area clear-both mt-5">
            <div className="container pt-5">
                <div className="row py-3">
                    <FooterCol key={1} menuTitle={" "} menuItems={noNamed}></FooterCol>
                    <FooterCol key={2} menuTitle={"Address"} menuItems={ourAddress} />
                  
                    <FooterCol key={2} menuTitle={"Gaming Services"} menuItems={gaming} />
                    <FooterCol key={2} menuTitle={"We Offer"} menuItems={services} />
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="icon" icon={faTwitch} /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div className="copyRight text-center bottom-0">
                    <p>Copyright NetBoost.com {(new Date()).getFullYear()}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;