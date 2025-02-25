import React from "react";
import './contact.css'
import linkd from '../../assets/linkdin.png'
import github from '../../assets/github.png'
function Contact()
{
    return(
        <div className="contact_section" id="contact">
            <div className="contact_heading">
                <h1>Connect with me</h1>

                <div className="contact-factor">
                    <button className="email">harsh444577@gmail.com</button>
                    <button className="mobile">+91 9520611838</button>
                </div>
                <div className="social_links">
                    <a href="https://www.linkedin.com/in/harsh-sharma016/" target="_blank"><img src={linkd} alt="" /></a>
                    <a href="https://github.com/HarshSharma122" target="_blank"><img src={github} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
export default Contact;