import React from 'react';
import "./Contact.css"
import { Container } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Footer from "./Footer"
import { Formik, useFormik } from 'formik';
import { signUpSchema } from '../schema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
    name: "",
    email: "",
    number: "",
    // confirm_password: "",
}

const Contact = () => {
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            // console.log(values);
            action.resetForm();
            toast.success("Done successfully we will contact you soon.")
        }
    })
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
                        <b>Facebook Page: </b> <br /> <label>Like, comment, and message us on our page,</label><br />
                        <b>LinkedIn: </b> <br /><label>Connect with us for professional inquiries and collaborations.</label><br />
                        <b>Email: </b> <br /><label>Drop us a line at <span>MuhammadTalha9279@gmail.com</span>  or queries.</label><br />
                        <b>WhatsApp</b> <br /><label>Prefer texting? Send us a message at <span>+92 322 8487164</span> for quick chats.</label>
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
                    <form onSubmit={handleSubmit}>
                        <div className='inputs-field'>
                            <input type="text" placeholder='Name'
                                autoComplete='off'
                                name='name'
                                id='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                
                            />
                            {errors.name && touched.name ? (<p className='validation-paragraph'>{errors.name}  </p>) : null } 
                        </div>
                        <div className='inputs-field'>
                            <label htmlFor="email" className='w-100'>
                                <input type="email" placeholder='Email'
                                    autoComplete='off'
                                    name='email'
                                    id='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (<p className='validation-paragraph'>{errors.email}</p>) : null}
                            </label>
                        </div>
                        <div className='inputs-field'>
                            <label htmlFor="password" className='w-100'>
                                <input type="tel" placeholder='Number'
                                    autoComplete='off'
                                    name='number'
                                    id='number'
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.number && touched.number ? (<p className='validation-paragraph'>{errors.number}</p>) : null}
                            </label>
                        </div>
                        {/* <div className='inputs-field'>
                            <label htmlFor="confirm_password" className='w-100'>
                                <input type="confirm_password" placeholder='confirm_password'
                                    autoComplete='off'
                                    name='confirm_password'
                                    id='confirm_password'
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirm_password && touched.confirm_password ? (<p className='validation-paragraph'>{errors.confirm_password}</p>) : null}
                            </label>
                        </div> */}
                        <div >
                            <select name="textarea" id="textarea" className='select-field'>
                                <option value="volvo" disabled>Select Services </option>
                                <option value="saab">Graphic Design</option>
                                <option value="opel">Video Editing & Transition</option>
                                <option value="audi">Video Styling</option>
                            </select>
                        </div>
                        {/* <div className='textarea-style'>
                            <textarea name="" id="" rows="6" placeholder='Subject'></textarea>
                        </div> */}
                        <div className='inputs-field'>
                            <input type="submit"/>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
