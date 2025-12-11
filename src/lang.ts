const fr = {
    QuickPresentation: {
        h1: "Courte Présentation",
        firstName: "Prénom: Antonin",
        lastName: "Nom: BRAUER",
        address: "Adresse: 33400 Talence, FRANCE",

    }
}

const en = {
    QuickPresentation: {
        h1: "Quick Presentation",
        firstName: "First name: Antonin",
        lastName: "Last name: BRAUER",
        address: "Address: 33400 Talence, FRANCE",

    }
}

export type Translation = typeof fr
export type Lang = 'fr' | 'en'
export type LangText = {
    [key in Lang]: Translation
}
const langTexts: LangText = {'fr': fr, 'en': en}

export function getText(lang: Lang): Translation {
    return langTexts[lang];
}
