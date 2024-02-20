import React from 'react';
import img1 from "./Images/cropped-ANIMATRONEXPO-LOGO-.png.webp"
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"
import { Container } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className='foot-er pt-5 mt-5'>
            <Container>
                <div className='footer-content'>
                    <div className='footer-image'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='footer-icon'>
                        <h2>Contact Us</h2>
                        <ul className='footer-unorderlist'>
                            <li> <a href=""><FaFacebook /></a> </li>
                            <li> <a href=""><FaSquareInstagram /></a></li>
                            <li><a href="">< FaFacebookMessenger /></a></li>
                            <li> <a href="">< IoCallSharp /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                        </ul>
                        <p>Address: Office number: 369, Shaheen Plaza, near PRC chowk, Mardan</p>
                    </div>
                </div>
            </Container>
        </div>

    );
}

export default Footer;
