import type {Lang} from "../lang.ts";
import type {SetState} from "../shortcuts.ts";
import ImgButton from "./ImgButton.tsx";
import React from "react";

interface FooterProps {
    setLang: SetState<Lang>
}

function Footer({setLang}: FooterProps) {
    return (<div id="langButtons" style={langButtonsStyle}>
        <ImgButton
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
            onClick={() => setLang('fr')} alt="Français" className="flag"
        />
        <ImgButton
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/English_language_-_United_States%2C_Canada_and_the_United_Kingdom.svg"
            onClick={() => setLang('en')} alt="English" className="flag"
        />
    </div>)
}

const langButtonsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    zIndex: 1000,
    position: 'fixed',
}

export default Footer