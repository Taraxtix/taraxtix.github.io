import React, {useState} from "react";

interface JobCardProps {
    title: string,
    details: string[]
}

function JobCard({title, details}: JobCardProps) {
    const [clicked, setClicked] = useState(false)

    return (
        <div style={cardStyle} onClick={() => setClicked(!clicked)}>
            <h2>{title.split(":")[0]}<br/><br/>{title.split(":")[1]}</h2>
            {clicked ?
                <ul style={ulStyle}>
                    {Object.entries(details).map(([key, detail]) => {
                        return <li key={key}>{detail}</li>
                    })}
                </ul> : <p style={detailPlaceholderStyle}>Click for details</p>
            }
        </div>
    )
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