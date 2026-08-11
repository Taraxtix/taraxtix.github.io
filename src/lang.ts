const fr = {
    QuickPresentation: {
        h1: "Courte Présentation",
        firstName: "Prénom: Antonin",
        lastName: "Nom: BRAUER",
        address: "Adresse: 33400 Talence, FRANCE",
    },
    Education: {
        h1: "Formation",
        Master2: "2026: Master 2 Informatique, spécialité ASPIC (Systèmes Autonomes, Perception, Interaction et Contrôle), Université de Bordeaux" +
            " (En cours)",
        License: "2024: Licence 3 Informatique, Université de Bordeaux",
        Bac: "2020: Baccalauréat Scientifique, spécialité Mathématiques, mention Très Bien, Lycée Jaufré Rudel, Blaye",
    },
    ProfessionalExperience: {
        h1: "Expérience professionnelles",
        TheHostelCDI: {
            title: "02/2023 - 04/2026: GameMaster en CDI chez The Hostel Escape Game, Bordeaux",
            details: [
                "Accueil des clients",
                "Acteur et Game Master dans les salles de jeux",
                "Élaboration de scripts pour optimiser les processus de l'entreprise",
                "Aide à la configuration des salles lors de leurs créations",
                "Design de circuits imprimé pour l'amélioration des salles",
            ],
        },
        TheHostelAE: {
            title: "05/2022 - 02/2023: GameMaster en auto-entrepreneur chez The Hostel Escape Game, Bordeaux",
            details: [
                "Accueil des clients",
                "Acteur et Game Master dans les salles de jeux",
            ],
        },
        DistriCenter: {
            title: "06/2020 - 09/2020: Vendeur chez DistriCenter",
            details: [
                "Accueil des clients",
                "Conseil",
                "Gestion des stocks",
                "Réassortiment des rayons",
            ],
        },
    },
}

const en = {
    QuickPresentation: {
        h1: "Quick Presentation",
        firstName: "First name: Antonin",
        lastName: "Last name: BRAUER",
        address: "Address: 33400 Talence, FRANCE",
    },
    Education: {
        h1: "Education",
        Master2: "2026: Master's degree in Computer Science, specialization ASPIC (Autonomous Systems, Perception, Interaction and Control), University of Bordeaux (Ongoing)",
        License: "2024: Bachelor's degree in Computer Science, University of Bordeaux",
        Bac: "2020: Scientific Baccalaureate, specialization in Mathematics, with highest honors, Lycée Jaufré Rudel, Blaye",
    },
    ProfessionalExperience: {
        h1: "Professional experience",
        TheHostelCDI: {
            title: "02/2023 - Present: GameMaster on permanent contract at The Hostel Escape Game, Bordeaux",
            details: [
                "Welcoming customers",
                "Actor and Game Master in the game rooms",
                "Scriptwriting to optimize company processes",
                "Assisting in room setup during their creation",
                "Designing printed circuits for room improvement",
            ],
        },
        TheHostelAE: {
            title: "05/2022 - 02/2023: GameMaster as self-employed at The Hostel Escape Game, Bordeaux",
            details: [
                "Welcoming customers",
                "Actor and Game Master in the game rooms",
            ],
        },
        DistriCenter: {
            title: "06/2020 - 09/2020: Seller at DistriCenter",
            details: [
                "Welcoming customers",
                "Advising",
                "Managing stock",
                "Restocking shelves",
            ],
        },
    },
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
