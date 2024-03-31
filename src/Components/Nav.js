import React from 'react';
import { Container } from 'react-bootstrap';
import './Nav.css'
import img from "./Images/cropped-ANIMATRONEXPO-LOGO-.png.webp"
import { NavLink } from 'react-router-dom';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
    return (
        <div>
            <div class="navbar-header">
                <div className="header-image">
                    <img src={img} alt="" />
                </div>
                <ul class="unorder-list">
                    <li><NavLink className="anchor-tag" to={"/"} class="hoverline">HOME</NavLink></li>
                    <li><NavLink className="anchor-tag" to={"/Services"} class="hoverline">SERVICES</NavLink></li>
                    <li><NavLink className="anchor-tag" to={"/Portfolio"} class="hoverline">PORTFOLIO</NavLink></li>
                    <li><NavLink className="anchor-tag" to={"/Faqs"} class="hoverline">FAQ's</NavLink></li>
                    <li><NavLink className="anchor-tag" to={"/Contact"} class="hoverline">CONTACT US</NavLink></li>
                </ul>
                <div className='d-lg-none d-md-none d-block hamburger-button'>
                    <span className="mobile-icons" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiOutlineBars3BottomRight /></span>

                    <div className="offcanvas mobile-size offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel" style={{ display: "none" }}>Offcanvas right</h5>
                            <button type="button" className="btn-close text-reset close-button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul class="mobile-list-tags">
                                <NavLink className="anchortags" to={"/"} class="hoverline" data-bs-dismiss="offcanvas" aria-label="Close"><li>HOME</li></NavLink>
                                <NavLink className="anchortags" to={"/Services"} class="hoverline" data-bs-dismiss="offcanvas" aria-label="Close"> <li>SERVICES </li></NavLink>
                                <NavLink className="anchortags" to={"/Portfolio"} class="hoverline" data-bs-dismiss="offcanvas" aria-label="Close"><li> PORTFOLIO </li></NavLink>
                                <NavLink className="anchortags" to={"/Faqs"} class="hoverline" data-bs-dismiss="offcanvas" aria-label="Close"> <li>FAQ's </li></NavLink>
                                <NavLink className="anchortags" to={"/Contact"} class="hoverline" data-bs-dismiss="offcanvas" aria-label="Close"> <li>CONTACT US </li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Nav;
