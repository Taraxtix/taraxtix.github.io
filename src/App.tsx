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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    scrollMarginTop: '5rem',
    marginTop: '5rem',
    paddingTop: sectionPaddingVertical + 'vh',
    paddingBottom: sectionPaddingVertical + 'vh',
    paddingLeft: sectionPaddingHorizontal + 'vw',
    paddingRight: sectionPaddingHorizontal + 'vw',
    maxWidth: '70vw',
    minWidth: '40vw',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: '1rem',
}

export default App
