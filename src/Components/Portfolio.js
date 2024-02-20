import React from 'react';
import img from "./Images/portfolio-img.webp"
import "./Portfolio.css"
import { Container } from 'react-bootstrap';
import Footer from "./Footer"

const Portfolio = () => {
    return (
        <div>
            <div className='top-portfolio'>
                <Container>
                    <div className="d-flex row hero-section w-100  pt-5">
                        <div className='col col-md-6 col-lg-6 col-12'>
                            <h1>PORTFOLIO</h1>
                            <p>They say a picture is worth a thousand words, but our portfolio tells
                                a story beyond words. Dive into our collection of graphic designs, video edits,
                                and 2D animations that have wowed our clients from all around the globe. Each
                                project showcases our commitment to creativity, quality, and client satisfaction.
                                Your project could be next!
                            </p>
                        </div>
                        <div className='portfolio-img col  col-md-6 col-lg-6 col-12'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='heading-style'>
                    <h1>Video Editing</h1>
                    <h1 className='mb-5'>1. Youtube Channel Video</h1>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/c-ptvXgUfdg?si=0CEoPS_6q1eQhRgx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/r7eGVaQ76ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/c09mbVvdfmE " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/IuJ5zUgN2Go  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='heading-style'>
                    <h1 className='mb-5'>2. Compelling commercial brand video for your business</h1>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/oZymm_E0on4 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/o8r0Vytv8EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/8gkN38FV-V0 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/IuJ5zUgN2Go  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='heading-style'>
                    <h1 className='mb-5'>Animated explainer videos</h1>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/CiDv16VbYMs  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/V1TevGucQDQ " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/S-8uyt9vuCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/eKh59q9TuEY " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/CiDv16VbYMs  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/V1TevGucQDQ " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/S-8uyt9vuCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/eKh59q9TuEY " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='heading-style'>
                    <h1 className=''>Educational and eLearning videos</h1>
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/S_QQeMeQweA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/h-48PDSBHVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/-zK_eZgSMQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4">
                                <iframe src="https://www.youtube.com/embed/-zK_eZgSMQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Portfolio;
