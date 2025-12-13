interface ImgLinkProps {
    src: string
    alt: string
    href: string
}

function ImgLink({src, alt, href}: ImgLinkProps) {
    return (<a href={href}> <img src={src} alt={alt} style={{maxWidth: '3rem'}}/> </a>)
}

export default ImgLink