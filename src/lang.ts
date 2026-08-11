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
        StageThales: {
            title: "04/2026 - 09/2026: Stage: \"Mise en place d'un driver mémoire en Rust pour un système d'exploitation aéronautique\" chez Thales AVS, Mérignac",
            details: [
                "Étude du driver existant",
                "Portage en Rust pour une cible embarqué",
                "Programmation `no_std`",
                "Mise à jour/Mise en place d'un standard de codage interne spécifique à Rust",
                "Étude des capacité de Rust dans un contexte certifié (DO-178C / ARINC653)",
            ],
        },
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
        StageThales: {
            title: "04/2026 - 09/2026: Internship: \"Implementation of a Rust memory driver for an aeronautical operating system\" at Thales AVS, Mérignac",
            details: [
                "Analysis of the existing driver",
                "Porting to Rust for an embedded target",
                "`no_std` programming",
                "Updating/establishing an internal coding standard dedicated to Rust",
                "Evaluation of Rust capabilities in a certified environment (DO-178C / ARINC653)",
            ],
        },
        TheHostelCDI: {
            title: "02/2023 - 04/2026: GameMaster on permanent contract at The Hostel Escape Game, Bordeaux",
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
