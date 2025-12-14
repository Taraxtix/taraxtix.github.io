// noinspection HtmlUnknownAnchorTarget

import React from "react";
import ImgLink from "../ImgLink.tsx";
import type {Translation} from "../../lang.ts";

interface HeaderProps {
    text: Translation
    isMobile: boolean
}

function Header({text, isMobile}: HeaderProps) {
    const [showMenu, setShowMenu] = React.useState(false)

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
        backdropFilter: isMobile ? 'unset' : 'blur(10px)',
    }

    const photoStyle: React.CSSProperties = {
        borderRadius: '25%',
        maxWidth: '5rem',
        position: isMobile ? 'fixed' : 'unset',
        left: isMobile ? '0.5rem' : 'unset',
        top: isMobile ? '0.5rem' : 'unset',
        zIndex: isMobile ? 1001 : 'unset',
    }

    const anchorsStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'left' : 'center',
        justifyContent: isMobile ? 'left' : 'center',
        visibility: isMobile ? (showMenu ? 'visible' : 'hidden') : 'visible',
        position: isMobile ? 'fixed' : 'unset',
        left: isMobile ? '0.5rem' : 'unset',
        right: isMobile ? '0.5rem' : 'unset',
        top: isMobile ? '0.5rem' : 'unset',
        backdropFilter: isMobile ? 'blur(10px)' : 'unset',
    }

    const aAnchorStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        padding: '0.5rem 0.5rem',
        textDecoration: 'none!important',
        cursor: 'pointer',
    }

    const socialStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        position: isMobile ? 'fixed' : 'unset',
        left: isMobile ? '0.5rem' : 'unset',
        bottom: isMobile ? '0.5rem' : 'unset',
    }

    const menuIconStyle: React.CSSProperties = {
        fontSize: '7rem',
        cursor: 'pointer',
        position: 'fixed',
        right: '1rem',
        top: '0rem',
        zIndex: 1000,
        marginTop: '-1rem'
    }

    return (
        <div id="header" style={headerStyle}>
            <div id="photo">
                <img id="imgPhoto" alt="photo" style={photoStyle} src="logo.png"/> {/*TODO: Add photo*/}
            </div>

            {isMobile && <h1 id="menuIcon" style={menuIconStyle} onClick={() => setShowMenu(!showMenu)}>=</h1>}
            <div id="anchors" style={anchorsStyle}>
                <a href="#QuickPresentation" className="anchor" style={aAnchorStyle}>{text["QuickPresentation"].h1}</a>
                <a href="#Education" className="anchor" style={aAnchorStyle}>{text["Education"].h1}</a>
                <a href="#ProfessionalExperience" className="anchor" style={aAnchorStyle}>{text["ProfessionalExperience"].h1}</a>
            </div>

            <div id="social" style={socialStyle}>
                <ImgLink href="https://www.linkedin.com/in/antonin-brauer-03ba5919a/"
                         src="linkedin.svg"
                         alt="linkedin"
                />
                <ImgLink href="https://github.com/Taraxtix"
                         src={
                             window.matchMedia('(prefers-color-scheme: dark)').matches ?
                                 "github-mark-white.svg" :
                                 "github-mark.svg"
                         }
                         alt="github"
                />
            </div>
        </div>
    )
}

export default Header
