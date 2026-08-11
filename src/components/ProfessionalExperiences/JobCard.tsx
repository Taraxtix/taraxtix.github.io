import React, {useState} from "react";

interface JobCardProps {
    title: string,
    details: string[]
}

function JobCard({title, details}: JobCardProps) {
    const [clicked, setClicked] = useState(false)
    const firstColonIndex = title.indexOf(":");
    const datePart = firstColonIndex !== -1 ? title.slice(0, firstColonIndex).trim() : title;
    const restPart = firstColonIndex !== -1 ? title.slice(firstColonIndex + 1).trim() : "";

    return (
        <div style={cardStyle} onClick={() => setClicked(!clicked)}>
            <h2>
                {datePart}
                <br /><br />
                {restPart}
            </h2>
            {clicked ? (
                <ul style={ulStyle}>
                    {Object.entries(details).map(([key, detail]) => (
                        <li key={key}>{detail}</li>
                    ))}
                </ul>
            ) : (
                <p style={detailPlaceholderStyle}>Click for details</p>
            )}
        </div>
    );
}

const cardStyle: React.CSSProperties = {
    border: '1px solid',
    borderRadius: '1rem',
    padding: '1rem',
    margin: '1rem',
    minWidth: '40vw',
    width: '70%',
    cursor: 'pointer',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const detailPlaceholderStyle: React.CSSProperties = {
    color: 'gray',
    fontSize: '0.8rem',
}

const ulStyle: React.CSSProperties = {
    textAlign: 'left',
}

export default JobCard
