import {useState} from "react";
import Header from './components/Header.tsx'
import QuickPresentation from "./components/QuickPresentation.tsx";
import {getText, type Lang} from "./lang.ts";
import Footer from "./components/Footer.tsx";
import Line from "./components/Line.tsx";

function App() {
    const [lang, setLang] = useState<Lang>('fr');
    const text = getText(lang);
    return (
        <>
            <Header/>

            <div style={sectionStyle}>
                <QuickPresentation text={text.QuickPresentation}/>
                <Line/>
            </div>

            <Footer setLang={setLang}/>
        </>
    )
}

const sectionPaddingVertical = 4
const sectionPaddingHorizontal = 4
const sectionStyle: React.CSSProperties = {
    paddingTop: sectionPaddingVertical - 1 + 'rem',
    paddingBottom: sectionPaddingVertical + 'rem',
    paddingLeft: sectionPaddingHorizontal + 'rem',
    paddingRight: sectionPaddingHorizontal + 'rem',
    textAlign: 'center',
    border: '1px solid white',
    borderRadius: '1rem',
}

export default App
