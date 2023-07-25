import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to Movix! We are a cutting-edge movie platform dedicated to bringing you the best in entertainment. Explore a vast collection of movies, discover new releases, and indulge in your favorite genres. With our seamless streaming experience, you can enjoy cinema-quality entertainment right at your fingertips.
                Developed by Ayush panday.
                </div>
                <div className="socialIcons">
                    
                    <span className="icon">
                       <a href='https://www.instagram.com/ayushpanday__/'><FaInstagram /></a>
                    </span>
                    <span className="icon">
                       <a href='https://github.com/AyushPanday1'><FaGithub /></a>
                    </span>
                    <span className="icon">
                        <a href='https://www.linkedin.com/in/ayush-panday-799b3120b/'><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
