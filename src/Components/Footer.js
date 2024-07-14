import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons"
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"







export default function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a> <FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a><FontAwesomeIcon icon={faSquareInstagram} /></a>
                <a><FontAwesomeIcon icon={faSquareTwitter} /></a>
                <a><FontAwesomeIcon icon={faSquareGithub} /></a>
            </div>
        </div>
    )
}