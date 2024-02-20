import React from 'react';
import "./Home.css"
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineAnimation } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import img from "./Images/DALL·E-2024-02-15-22.34.52-A-highly-skilled-graphic-designer-is-seen-creating-a-company-logo-that-features-a-stylized-A-within-a-dynamic-fiery-orb-surrounded-by-vibrant-lea.webp";
import img1 from "./Images/DALL·E-2024-02-15-22.32.27-A-creative-and-detailed-scene-depicting-a-video-animator-in-the-process-of-creating-an-animation-and-then-templating-it.-The-image-showcases-an-animat.webp";
import img2 from "./Images/DALL·E-2024-02-15-22.36.53-A-highly-focused-video-editor-is-in-the-midst-of-editing-and-styling-a-video-in-a-modern-post-production-studio.-The-scene-captures-the-editor-working.webp";
import img4 from "./Images/Carousal-img-1.webp"
import img5 from "./Images/Carousal-img-2.webp";
import img6 from "./Images/Carousal-img-3.webp";
import img7 from "./Images/Carousal-img-4.webp";
import img8 from "./Images/Carousal-img-5.jpg";
import img9 from "./Images/Carousal-img-6.jpg";
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className='home-header'>
                <div className='home-section'>
                    <div className="col-lg-5 col-md-7 col-sm-12">
                        <h3 className='pt-5 ps-lg-5 ps-md-3 ps-2'>Creative Design & Animation Studio</h3>
                        <h1 className='ps-lg-5 ps-md-3 pt-3 ps-2'>Unleash Your Vision</h1>
                        <p className='ps-lg-5 ps-md-3 pt-3 ps-2'>Welcome to ANIMATRONEXPO, where your visions come
                            to life through stunning graphics, captivating videos,
                            and engaging 2D animations! We started on Fiverr, offering
                            top-notch freelance services, and now we're here to take your
                            projects to the next level. Dive into a world where creativity
                            meets professionalism. Let's make something amazing together!</p>
                        <p className='ps-lg-5 ps-md-3 pt-2 ps-2'>
                            Drive engagement, increase conversions and boost your marketing
                            efforts with ANIMATRONEXPO videos!
                        </p>
                        <ul className='home-unorderlist pb-5'>
                            <li><a href=""><FaFacebook /></a> </li>
                            <li><a href=""><FaSquareInstagram /></a> </li>
                            <li><a href=""><FaFacebookMessenger /></a> </li>
                            <li><a href=""><IoCallSharp /></a> </li>
                            <li><a href=""><FaLinkedin /></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Container className='p-lg-0 home-content'>
                    <h1>Video Production Process</h1>
                    <p>When you work with Animatronexpo, we want you to
                        know exactly what to anticipate.
                        That is why we follow the same process on every project.</p>
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 w-100">
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <LuMessagesSquare className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 1) CONSULTATION</h3>
                                    <p class="card-text">We offer complimentary consultations, tailoring
                                        video projects to your specific objectives, deeply understanding your
                                        target audience and creative vision. Our expertise guides the content
                                        creation process,leading
                                        to exceptional results. Upon finalizing costs and timelines, we meticulously
                                        advance to the subsequent production steps.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <MdOutlineDescription className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 2) SCRIPT WRITING</h3>
                                    <p class="card-text">Our team excels in scriptwriting for animated
                                        explainer videos, pivotal for to ensure your video's foundation
                                        is project success. Whether you have a
                                        script ready, need editing assistance, or prefer we handle
                                        scriptwriting with your information, we're fully equipped
                                        to support you. Our goal is to ensure your video's foundation
                                        is strong and effective.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <MdOutlineAnimation className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 3) ANIMATION DESIGN</h3>
                                    <p class="card-text">Post-voiceover, our in-house animators take over,
                                        initiating the video's creation. At ANIMATRONEXPO, each video undergoes
                                        a thorough production process, meeting your standards and needs.
                                        We guarantee that every project reflects the highest quality,
                                        ensuring your,maintaining our commitment to excellence.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <FaInfo className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 4) PROJECT INFO</h3>
                                    <p class="card-text">Every project begins with gathering the relevant
                                        project information. First we will need any branding information
                                        you have, such as your logo, colors, and so on. This is also where
                                        you'll tell us about your preferred video style, any design notes,
                                        similar videos you like, or any other preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <MdOutlineSettingsVoice className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 5) VOICEOVER RECORDING</h3>
                                    <p class="card-text">Let's turn your script into life! We start working
                                        on your voiceover recording once the script is ready and you've chosen
                                        from by one of accents and genders.  For a custom quote on voiceover
                                        accents, please contact us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <CiDeliveryTruck className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 6)DELIVERY</h3>
                                    <p class="card-text">It's finally here! The video is delivered directly
                                        to you after the animation and quality control processes are completed.
                                        From the time you place your order, our typical delivery time is 2 to 30
                                        days depends on the duration of your video.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="card home-cards mb-4">
                                <div className='home-icons'>
                                    <MdOutlinePreview className='icon' />
                                </div>
                                <div class="card-body home-cards-body">
                                    <h3> 7) REVISION</h3>
                                    <p class="card-text">It's finally here! The video is delivered directly
                                        to you after the animation and quality control processes are completed.
                                        From the time you place your order, our typical delivery time is 2 to 30
                                        days depends on the duration of your video.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className='content-heading'>
                    <div className="home-content">
                        <h1>Our Services</h1>
                    </div>
                    <p className='ps-lg-5'>Our services are designed to cover all your creative needs.
                        With a knack for detail and a flair for creativity, we offer:
                    </p>
                    <div className="row row-cols-lg-3 row-cols-md-3 row-cols-1">
                        <div className="col">
                            <div class="card home-service-card mb-3">
                                <div className='service-image'>
                                    <img src={img} alt="" />
                                </div>
                                <div class="card-body service-text">
                                    <p class="card-text">Graphic Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-service-card mb-3">
                                <div className='service-image'>
                                    <img src={img1} alt="" />
                                </div>
                                <div class="card-body service-text">
                                    <p class="card-text">Video Editing & Styling</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card home-service-card mb-3">
                                <div className='service-image'>
                                    <img src={img2} alt="" />
                                </div>
                                <div class="card-body service-text">
                                    <p class="card-text">Video Animation</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide carousal-style" data-bs-ride="carousel">
                <div className='home-content'>
                    <h1>What Our Clients Say</h1>
                </div>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <Container>
                            <div className='carousel-content'>
                                <p>ANIMATRONEXPO was amazing, he did really good job for my project
                                    i like so much that i order again with extra work. i recommended him 100%
                                    believe me you want dissapoint with him.Thanku my friend.</p>
                            </div>
                        </Container>
                        <div class="carousel-caption  d-md-block">
                            <h5 >BileFarrah</h5>
                            <p >MANAGER</p>
                        </div>
                        <img src={img4} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <Container>
                            <div className='carousel-content'>
                                <p>ANIMATRONEXPO was amazing, he did really good job for my project
                                    i like so much that i order again with extra work. i recommended him 100%
                                    believe me you want dissapoint with him.Thanku my friend.</p>
                            </div>
                        </Container>
                        <div class="carousel-caption d-md-block">
                            <h5>Wali Shahid</h5>
                            <p>CTO</p>
                        </div>
                        <img src={img5} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <Container>
                            <div className='carousel-content'>
                                <p>ANIMATRONEXPO was amazing, he did really good job for my project
                                    i like so much that i order again with extra work. i recommended him 100%
                                    believe me you want dissapoint with him.Thanku my friend.</p>
                            </div>
                        </Container>
                        <div class="carousel-caption  d-md-block">
                            <h5>Jeff Bezoz</h5>
                            <p>Owner</p>
                        </div>
                        <img src={img6} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <Container>
                            <div className='carousel-content'>
                                <p>ANIMATRONEXPO was amazing, he did really good job for my project
                                    i like so much that i order again with extra work. i recommended him 100%
                                    believe me you want dissapoint with him.Thanku my friend.</p>
                            </div>
                        </Container>
                        <div class="carousel-caption  d-md-block">
                            <h5>Jeff Bezoz</h5>
                            <p>Owner</p>
                        </div>
                        <img src={img8} class="d-block" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <Container>
                            <div className='carousel-content'>
                                <p>ANIMATRONEXPO was amazing, he did really good job for my project
                                    i like so much that i order again with extra work. i recommended him 100%
                                    believe me you want dissapoint with him.Thanku my friend.</p>
                            </div>
                        </Container>
                        <div class="carousel-caption  d-md-block">
                            <h5>Jeff Bezoz</h5>
                            <p>Owner</p>
                        </div>
                        <img src={img9} class="d-block" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
