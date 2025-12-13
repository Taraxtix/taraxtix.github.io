interface ImgButtonProps {
    src: string
    alt: string
    onClick: () => void
    className?: string
}

function ImgButton({src, alt, onClick, className}: ImgButtonProps) {
    return (
        <button onClick={onClick} style={buttonStyle}>
            <img src={src} alt={alt} className={className} style={buttonImgStyle}/>
        </button>
    )
}

const buttonStyle = {
    maxWidth: '3rem',
    cursor: 'pointer',
    padding: '0.5rem 0.5rem',
}

const buttonImgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
}

export default ImgButton
