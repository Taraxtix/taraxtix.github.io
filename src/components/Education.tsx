import React from "react";
import type {Translation} from "../lang.ts";
import {h1AnchorStyle} from "../shortcuts.ts";

interface EducationProps {
    text: Translation['Education']
}

function Education({text}: EducationProps) {
    return (
        <div style={containerStyle}>
            <h1 id="Education" style={h1AnchorStyle}>{text.h1}</h1>
            <ul style={ulStyle}>
                <li>{text.Master2}</li>
                <li>{text.License}</li>
                <li>{text.Bac}</li>
            </ul>
        </div>
    )
}

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
}

const ulStyle: React.CSSProperties = {
    listStyle: 'none',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
}

export default Education;