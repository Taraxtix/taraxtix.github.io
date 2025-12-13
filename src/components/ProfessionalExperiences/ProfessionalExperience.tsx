import type {Translation} from "../../lang.ts";
import JobCard from "./JobCard.tsx";
import React from "react";
import {h1AnchorStyle} from "../../shortcuts.ts";

interface ProfessionalExperienceProps {
    text: Translation['ProfessionalExperience']
}

function ProfessionalExperience({text}: ProfessionalExperienceProps) {
    return (
        <>
            <h1 id="ProfessionalExperience" style={h1AnchorStyle}>{text.h1}</h1>

            <div style={containerStyle}>
                {Object.entries(text).map(([, value]) => {
                    if (typeof value === 'string') return null
                    return (<JobCard title={value.title} details={value.details}/>)
                })}
            </div>
        </>
    )
}

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

export default ProfessionalExperience;