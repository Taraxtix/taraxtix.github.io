import React, {useEffect, useState} from "react";
import Header from './components/Header/Header.tsx'
import QuickPresentation from "./components/QuickPresentation.tsx";
import {getText, type Lang} from "./lang.ts";
import Footer from "./components/Footer.tsx";
import Line from "./components/Line.tsx";
import Education from "./components/Education.tsx";
import ProfessionalExperience from "./components/ProfessionalExperiences/ProfessionalExperience.tsx";

function App() {
    const [lang, setLang] = useState<Lang>('fr');
    const text = getText(lang);

    const mediaMatcher = window.matchMedia('(max-device-width: 750px)')
    const [isMobile, setIsMobile] = React.useState(mediaMatcher.matches)

    useEffect(() => {
        const handleResize = () => setIsMobile(mediaMatcher.matches)
        mediaMatcher.addEventListener('change', handleResize)
        return () => mediaMatcher.removeEventListener('change', handleResize)
    })

    const sectionPaddingVertical = 4
    const sectionPaddingHorizontal = 4
    const sectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        scrollMarginTop: '5rem',
        marginTop: '5rem',
        paddingTop: isMobile ? 'unset' : sectionPaddingVertical + 'vh',
        paddingBottom: isMobile ? 'unset' : sectionPaddingVertical + 'vh',
        paddingLeft: isMobile ? 'unset' : sectionPaddingHorizontal + 'vw',
        paddingRight: isMobile ? 'unset' : sectionPaddingHorizontal + 'vw',
        maxWidth: isMobile ? '85vw' : '70vw',
        minWidth: isMobile ? 'unset' : '40vw',
        textAlign: 'center',
        border: '1px solid white',
        borderRadius: '1rem',
    }

    return (
        <div id="appContainer">
            <Header text={text} isMobile={isMobile}/>

            <div id="content" style={sectionStyle}>
                <QuickPresentation text={text.QuickPresentation}/>
                <Line/>
                <Education text={text.Education}/>
                <Line/>
                <ProfessionalExperience text={text.ProfessionalExperience}/>
            </div>

            <Footer setLang={setLang}/>
        </div>
    )
}

export default App
