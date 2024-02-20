import React from 'react';
import "./Faqs.css"
import { Container } from 'react-bootstrap';
import img1 from "./Images/DALL·E-2024-02-15-22.34.52-A-highly-skilled-graphic-designer-is-seen-creating-a-company-logo-that-features-a-stylized-A-within-a-dynamic-fiery-orb-surrounded-by-vibrant-lea.webp";
import img2 from "./Images/DALL·E-2024-02-15-22.36.53-A-highly-focused-video-editor-is-in-the-midst-of-editing-and-styling-a-video-in-a-modern-post-production-studio.-The-scene-captures-the-editor-working.webp";
import img3 from "./Images/faq-img2.webp";
import img4 from "./Images/Faqs-img.webp";
import Footer from "./Footer"

const Faqs = () => {
    return (
        <div>
            <div className='faqs-header'>
                <h1>FAQ's</h1>
            </div>
            <Container>
                <div className='row row-cols-lg-2 row-cols-md-2 row-cols-1'>
                    <div className="col">
                        <div className="card Faqs-card">
                            <div class="faqs-image">
                                <img src={img1} class="card-img-top" alt="..." />
                                <div class="card-body faqs-content">
                                    <h5 class="card-title">Graphic Design</h5>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-1">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What graphic design services do you offer?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">

                                            We offer a wide range of graphic design services including logo design,
                                            branding, web design, social media graphics, print design
                                            (brochures, business cards, flyers), packaging design, and custom
                                            illustrations.

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What is the process for a typical graphic design project?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">

                                            Our process typically includes a brief consultation, proposal,
                                            contract, research and concept development, design execution,
                                            revisions, finalization, and delivery of the project.

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card Faqs-card">
                            <div class="faqs-image">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body faqs-content">
                                    <h5 class="card-title">Script Writing</h5>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-1">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q. What information I need to provide for you write the script?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            ANS. Great question! First, we need to discuss your project
                                            requirements and information to write an amazing script just for you!
                                            To start, I’ll need to know: 1. What type of video are you doing? 2.
                                            Key message? 3. Target Audience?
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Q. Can I see samples of your scripts?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            ANS. Of course! Watch our PORTFOLIO to see video samples of how our
                                            scripts have come to life in completed projects! We can also share
                                            samples directly.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card Faqs-card">
                            <div class="faqs-image">
                                <img src={img3} class="card-img-top" alt="..." />
                                <div class="card-body faqs-content">
                                    <h5 class="card-title">Video Editing</h5>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-1">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Q. What Software do you use for Video editing?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        ANS. We use a variety of software depending on the specific needs 
                                        of the project. Some popular video editing software includes Adobe
                                         Premiere Pro and wondershare FILMORA.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Q. How much does Video Editing Cost?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        The cost of video editing services can vary widely depending on the
                                         complexity of the project and your specific needs. Factors that 
                                         can influence the cost include the length of the video and the number
                                          of edits required. To get an accurate cost, send me your raw footage
                                           & and clear instructions.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Q. What do you need from me to get Started?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        All we need is your RAW footage and other files (images, logo, etc.) 
                                        and clear instructions about what you want & the approximate length 
                                        of the FINAL video you want. If your project is more complex, please
                                         consider putting together a storyboard for us in order to have a
                                          smooth process.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card Faqs-card">
                            <div class="faqs-image">
                                <img src={img4} class="card-img-top" alt="..." />
                                <div class="card-body faqs-content">
                                    <h5 class="card-title">Video Animation</h5>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-1">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Q. What Software do you use for Video editing?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        ANS. We use a variety of software depending on the specific needs 
                                        of the project. Some popular video editing software includes Adobe
                                         Premiere Pro and wondershare FILMORA.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Q. How much does Video Editing Cost?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        The cost of video editing services can vary widely depending on the
                                         complexity of the project and your specific needs. Factors that 
                                         can influence the cost include the length of the video and the number
                                          of edits required. To get an accurate cost, send me your raw footage
                                           & and clear instructions.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Q. What do you need from me to get Started?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        All we need is your RAW footage and other files (images, logo, etc.) 
                                        and clear instructions about what you want & the approximate length 
                                        of the FINAL video you want. If your project is more complex, please
                                         consider putting together a storyboard for us in order to have a
                                          smooth process.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
}

export default Faqs;
