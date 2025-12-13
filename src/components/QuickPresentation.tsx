import {type Translation} from "../lang.ts";
import {h1AnchorStyle} from "../shortcuts.ts";

interface QuickPresentationProps {
    text: Translation['QuickPresentation']
}

function QuickPresentation({text}: QuickPresentationProps) {
    const age = () => {
        const now = new Date();
        let age = now.getFullYear() - 2002;

        if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDay() < 13)) age--;
        return age
    }

    return (
        <div style={{cursor: 'default'}}>
            <h1 id="QuickPresentation" style={h1AnchorStyle}>{text.h1}</h1>
            <p>{text.firstName}</p>
            <p>{text.lastName}</p>
            <p>Alias: Taraxtix</p>
            <p>Age: {age()}</p>
            <p>{text.address}</p>
            <p>Email: <a href="mailto:antonin.brauer@yahoo.fr">antonin.brauer@yahoo.fr</a></p>
            <p>Email: <a href="mailto:antonin.brauer@etu.u-bordeaux.fr">antonin.brauer@etu.u-bordeaux.fr</a></p>
        </div>
    )
}

export default QuickPresentation;
