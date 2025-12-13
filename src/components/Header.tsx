// noinspection HtmlUnknownAnchorTarget

import React from "react";
import '../App.css'
import ImgLink from "./ImgLink.tsx";
import type {Translation} from "../lang.ts";

interface HeaderProps {
    text: Translation
}

function Header({text}: HeaderProps) {
    return (
        <div id="header" style={headerStyle}>
            <div id="photo">
                <img id="imgPhoto" alt="photo" style={photoStyle} src="../../public/logo.png"/> {/*TODO: Add photo*/}
            </div>

            <div id="anchors" style={anchorsStyle}>
                <a href="#QuickPresentation" className="anchor" style={aAnchorStyle}>{text["QuickPresentation"].h1}</a>
                <a href="#Education" className="anchor" style={aAnchorStyle}>{text["Education"].h1}</a>
                <a href="#ProfessionalExperience" className="anchor" style={aAnchorStyle}>{text["ProfessionalExperience"].h1}</a>
            </div>

            <div id="social" style={socialStyle}>
                <ImgLink href="https://www.linkedin.com/in/antonin-brauer-03ba5919a/"
                         src="../../public/linkedin.svg"
                         alt="linkedin"
                />
                <ImgLink href="https://github.com/Taraxtix"
                         src={
                             window.matchMedia('(prefers-color-scheme: dark)').matches ?
                                 "../../public/github-mark-white.svg" :
                                 "../../public/github-mark.svg"
                         }
                         alt="github"
                />
            </div>
        </div>
    )
}

const headerStyle: React.CSSProperties = {
    paddingTop: '0.5rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 1rem',
    backdropFilter: 'blur(10px)',
}

const photoStyle = {
    borderRadius: '25%',
    maxWidth: '5rem',
}

const anchorsStyle = {
    display: 'flex',
    gap: '1rem',
}

const aAnchorStyle = {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '0.5rem 0.5rem',
    textDecoration: 'none!important',
    cursor: 'pointer',
}

const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
}

export default Header
