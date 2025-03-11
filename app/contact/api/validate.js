export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }

    try {
        const formData = req.body;
        const [erreur, newState] = validationContact(formData);

        if (erreur) {
            return res.status(400).json({ message: 'Erreur dans le formulaire', newState });
        }

        return res.status(200).json({ message: 'Formulaire valide', newState });    
    } catch (error) {
        console.error("Erreur lors de la validation du formulaire: ", error);
        return res.status(500).json({ message: 'Erreur lors de la validation du formulaire' });
    }
}