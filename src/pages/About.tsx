
import { PageProps } from '../App';

export default function About(props: Readonly<PageProps>) {
    const texts = props.About;
    return (
        <div>
            <div>
                <h2>{texts.persoInfos.title}</h2>
                <p>{texts.persoInfos.name}</p>
                <p>{texts.persoInfos.status}</p>
            </div>
            <div>
                <h2>{texts.studies.title}</h2>
                <p>{texts.studies.current}</p>
                <h3>{texts.studies.diplomasTitle}</h3>
                <ul>
                    {texts.studies.diplomas.map((diploma, index) => <li key={index}>{diploma}</li>)}
                </ul>
            </div>
        </div>
    )
}