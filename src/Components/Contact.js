import React from 'react';
import "./Contact.css"
import { Container } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Footer from "./Footer"

const Contact = () => {
    return (
        <div>
            <div className='contact-headr'>
                <div className='contact-component'>
                    <h1>Contact Us</h1>
                    <p>Got a project in mind? Let’s talk! We’re excited to hear your ideas and discuss how
                        we can bring them to life.
                    </p>
                    <p>
                        Ready to turn your vision into reality? Connect with us across Instagram, Facebook,
                        LinkedIn, email, or WhatsApp to start your project with ANIMATRONEXPO. Let’s create
                        something incredible together. Follow, like, share, and reach out to us on your
                        preferred platform. Your creative journey starts here!
                    </p>
                </div>
            </div>
            <div className="row w-100 row-cols-lg-2 row-cols-md-2 row-cols-1 pt-5">
                <div className="col">
                    <div className='icons-overview'>
                        <h1>Call To Action</h1>
                        <b>Instagram:</b> <br /> <label>Follow our journey and DM us @ANIMATRONEXPO.</label> <br />
                        <b>Facebook Page: </b> <br /> <label>Like, comment, and message us on our page, .</label><br />
                        <b>LinkedIn: </b> <br /><label>Connect with us for professional inquiries and collaborations.</label><br />
                        <b>Email: </b> <br /><label>Drop us a line at animatronexpo@gmail.com  or queries.</label><br />
                        <b>WhatsApp</b> <br /><label>Prefer texting? Send us a message at +92 322 8487164 for quick chats.</label>
                        <ul className='contact-icons'>
                            <li><a href="https://www.facebook.com/" target='blank' title='facebook'> <FaFacebook /> </a></li>
                            <li> <a href="https://www.instagram.com/" target='blank' title='instagram'> <FaSquareInstagram /> </a> </li>
                            <li><a href="https://www.messenger.com/" target='blank' title='messenger'><FaFacebookMessenger /></a></li>
                            <li><a href="https://pk.linkedin.com/" title='call us'><IoCallSharp /></a></li>
                            <li><a href="https://pk.linkedin.com/" title='linkedin'><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col heading-contact mt-4">
                    <h1>Contact Us</h1>
                    <form action="">
                        <div className='inputs-field'>
                            <input type="text" placeholder='Name' required />
                        </div>
                        <div className='inputs-field'>
                            <input type="email" placeholder='Email' required />
                        </div>
                        <div >
                            <select name="cars" id="cars" className='select-field' required>
                                <option value="volvo">Select Services </option>
                                <option value="saab">Graphic Design</option>
                                <option value="opel">Video Editing & Transition</option>
                                <option value="audi">Video Styling</option>
                            </select>
                        </div>
                        <div className='textarea-style'>
                            <textarea name="" id="" rows="6" placeholder='Subject'></textarea>
                        </div>
                        <div className='inputs-field'>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
