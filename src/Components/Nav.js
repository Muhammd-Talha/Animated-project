import React from 'react';
import { Container } from 'react-bootstrap';
import './Nav.css'
import img from "./Images/cropped-ANIMATRONEXPO-LOGO-.png.webp"
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

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
                    <p className='offcanvas-modal'>
                        <a class="anchr-tag" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><Hamburger /></a>
                    </p>
                    <div className="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                <div class="card card-body">
                                    <ul class="mobilescreen">
                                        <li><NavLink className="anchor-tag" to={"/"} class="hoverline">HOME</NavLink></li>
                                        <li><NavLink className="anchor-tag" to={"/Services"} class="hoverline">SERVICES</NavLink></li>
                                        <li><NavLink className="anchor-tag" to={"/Portfolio"} class="hoverline">PORTFOLIO</NavLink></li>
                                        <li><NavLink className="anchor-tag" to={"/Faqs"} class="hoverline">FAQ's</NavLink></li>
                                        <li><NavLink className="anchor-tag" to={"/Contact"} class="hoverline">CONTACT US</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Nav;
