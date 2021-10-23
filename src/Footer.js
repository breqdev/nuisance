import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
    faEnvelope,
    faHeart,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

function FooterLink(props) {
    return (
        <a
            className="flex gap-2 items-center text-blue-500 hover:underline"
            href={props.url}
        >
            <FontAwesomeIcon icon={props.icon} />
            {props.text}
        </a>
    )
}

const FOOTER_LINKS = [
    {
        text: "about",
        icon: faUserAlt,
        url: "https://breq.dev/",
    },
    {
        text: "contact",
        icon: faEnvelope,
        url: "https://breq.dev/contact",
    },
    {
        text: "github",
        icon: faGithub,
        url: "https://github.com/breq16/nuisance",
    },
]

export default function Footer() {
    return (
        <div className="px-8 py-16 bg-gray-100 rounded-3xl mb-12 text-center">
            <p className="mb-2">
                made with <FontAwesomeIcon icon={faHeart} /> by brooke chalmers.
            </p>
            <ul className="flex gap-8 justify-center">
                {FOOTER_LINKS.map((link) => (
                    <FooterLink key={link.url} {...link} />
                ))}
            </ul>
        </div>
    )
}
