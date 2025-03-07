import FormulaireContact from "@/components/FormulaireContact";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Contact | John-Manuel Dev Solutions",
    description: "Contactez John-Manuel Dev Solutions pour toutes vos questions et demandes de devis",
    keywords
: ["contact", "John-Manuel", "Dev",
        "Solutions", "John-Manuel Dev Solutions", "devis", "questions", "demandes"],
};

export default function Contact () {
    return <>
        <FormulaireContact/>
    </>;
};