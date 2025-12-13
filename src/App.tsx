import React, {useState} from "react";
import Header from './components/Header.tsx'
import QuickPresentation from "./components/QuickPresentation.tsx";
import {getText, type Lang} from "./lang.ts";
import Footer from "./components/Footer.tsx";
import Line from "./components/Line.tsx";
import Education from "./components/Education.tsx";
import ProfessionalExperience from "./components/ProfessionalExperiences/ProfessionalExperience.tsx";

function App() {
    const [lang, setLang] = useState<Lang>('fr');
    const text = getText(lang);
    return (
        <>
            <Header text={text}/>

            <div style={sectionStyle}>
                <QuickPresentation text={text.QuickPresentation}/>
                <Line/>
                <Education text={text.Education}/>
                <Line/>
                <ProfessionalExperience text={text.ProfessionalExperience}/>
            </div>

            <Footer setLang={setLang}/>
        </>
    )
}

const sectionPaddingVertical = 4
const sectionPaddingHorizontal = 4
const sectionStyle: React.CSSProperties = {
    scrollMarginTop: '5rem',
    marginTop: '5rem',
    paddingTop: sectionPaddingVertical / 2 + 'rem',
    paddingBottom: sectionPaddingVertical + 'rem',
    paddingLeft: sectionPaddingHorizontal + 'rem',
    paddingRight: sectionPaddingHorizontal + 'rem',
    maxWidth: 'calc(90vw - 16rem)',
    minWidth: '60vw',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: '1rem',
}

export default App
