import React from 'react';
import "./Services.css"
import { Container } from 'react-bootstrap';
import img1 from "./Images/services-img1.webp"
import img2 from "./Images/DALL·E-2024-02-15-22.36.53-A-highly-focused-video-editor-is-in-the-midst-of-editing-and-styling-a-video-in-a-modern-post-production-studio.-The-scene-captures-the-editor-working.webp"
import img3 from "./Images/DALL·E-2024-02-15-22.32.27-A-creative-and-detailed-scene-depicting-a-video-animator-in-the-process-of-creating-an-animation-and-then-templating-it.-The-image-showcases-an-animat.webp"
import Footer from "./Footer"

const Services = () => {
    return (
        <div>
            <div className='row w-100 service-s'>
                <h1>Our Services</h1>
                <p>When you work with Animatronexpo, we want you to know exactly what to anticipate.
                    That is why we follow the same process on every project.
                </p>
            </div>
            <Container>
                <div className="row w-100 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div className="col">
                        <div class="card card-img mb-3 d-md-none d-lg-none d-xl-block" >
                            <img src={img1} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col col-md-12 col-lg-12 col-xl-6">
                        <div class="card design-card">
                            <h1 className='pt-3'>Graphic Design</h1>
                            <div class="card-body">
                                <label class="card-text border p-3">From logos to banners, and everything in between,
                                    our designs stand out. Service graphic design refers to the professional
                                    creation of visual content to communicate messages. By applying visual
                                    hierarchy and page layout techniques, designers use typography and
                                    pictures to meet users' specific needs and focus on the logic of
                                    displaying elements in interactive designs to optimize the user
                                    experience. This service spans various fields such as logo design,
                                    branding, web design, and advertising materials, among others.
                                    It aims to achieve specific objectives by employing imagery,
                                    color, typography, and form. Service graphic design not only
                                    enhances aesthetic appeal but also facilitates brand recognition,
                                    improves user engagement, and communicates essential informatio
                                    n, making it an integral part of marketing and communication strategies.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='horizontal-line' />
            </Container>
            <Container>
                <div className="row w-100 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div className="col">
                        <div class="card card-img mb-3 d-md-none d-lg-none d-xl-block" >
                            <img src={img2} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col col-md-12 col-lg-12 col-xl-6">
                        <div class="card design-card">
                            <h1 className='pt-3'>Video Editing & Styling</h1>
                            <div class="card-body">
                                <label class="card-text border p-3">Cutting, splicing, and everything nice,
                                    we make your footage sing. Video editing and styling encompass the artful
                                    manipulation and arrangement of video shots to create a cohesive and
                                    visually appealing narrative. This process involves cutting and combining
                                    footage, correcting color, enhancing sound quality, and adding effects to
                                    convey emotions and stories effectively. Video editors and stylists work
                                    meticulously to ensure that the pace, rhythm, and progression of the
                                    video align with the intended message or theme. Whether for film,
                                    television, social media, or advertising, video editing and styling
                                    play a crucial role in engaging audiences, enhancing storytelling,
                                    and crafting memorable visual experiences. This craft not only
                                    requires technical skills but also a creative vision to bring
                                    stories to life through moving images.
                                    .
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='horizontal-line' />
            </Container>
            <Container>
                <div className="row w-100 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div className="col">
                        <div class="card card-img mb-3 d-md-none d-lg-none d-xl-block" >
                            <img src={img3} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col col-md-12 col-lg-12 col-xl-6">
                        <div class="card design-card">
                            <h1 className='pt-3'>Video Animation & Templating</h1>
                            <div class="card-body">
                                <label class="card-text border p-3">Cutting, splicing, and everything nice,
                                    we make your footage sing. Video editing and styling encompass the artful
                                    manipulation and arrangement of video shots to create a cohesive and
                                    visually appealing narrative. This process involves cutting and combining
                                    footage, correcting color, enhancing sound quality, and adding effects to
                                    convey emotions and stories effectively. Video editors and stylists work
                                    meticulously to ensure that the pace, rhythm, and progression of the
                                    video align with the intended message or theme. Whether for film,
                                    television, social media, or advertising, video editing and styling
                                    play a crucial role in engaging audiences, enhancing storytelling,
                                    and crafting memorable visual experiences. This craft not only
                                    requires technical skills but also a creative vision to bring
                                    stories to life through moving images.
                                    .
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='horizontal-line' />
            </Container>
            <Footer />

        </div>
    );
}

export default Services;
