import React from "react";
import '../App.css'
import ImgLink from "./ImgLink.tsx";

function Header() {
    return (
        <div id="header" style={headerStyle}>
            <div id="photo">
                <img id="imgPhoto" alt="photo" style={photoStyle} src="../../public/logo.png"/> {/*TODO: Add photo*/}
            </div>
            <div id="social" style={socialStyle}>
                <ImgLink href="https://www.linkedin.com/in/antonin-brauer-03ba5919a/"
                         src="../../public/linkedin.svg"
                         alt="linkedin"
                />
                <ImgLink href="https://github.com/Taraxtix"
                         src={
                             window.matchMedia('(prefers-color-scheme: dark)').matches ?
                                 "../public/github-mark-white.svg" :
                                 "../public/github-mark.svg"
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
}

const photoStyle = {
    borderRadius: '25%',
    maxWidth: '5rem',
}

const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
}

export default Header
