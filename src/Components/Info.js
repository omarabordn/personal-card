import React from "react"
import Personal from "../images/omar.jpg"
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"




export default function Info() {
    return (
        <div className="head">
            <div className="head-content">
                <img src={Personal}></img>
                <h1 className="head-name">Omar Abordn</h1>
                <h3 className="head-desc">Frontend Developer</h3>
                <a className="head-link" href="#">omarabordn.website</a>
                <div className="head-btn">
                    <button className="email"><FontAwesomeIcon className="envelope" icon={faEnvelope} />Email</button>
                    <button className="linked"><FontAwesomeIcon className="linkedin" icon={faLinkedin} />LinkedIn</button>
                </div>
            </div>
        </div>
    )
}