"use server";

import { validationContact } from "@/validation/validationContact";
import emailjs from "emailjs-com";

export async function validationServerForm (formData) {
    let [erreur, newState] = validationContact(formData);

    if (erreur) {
        return [erreur, newState];
    };
    
    try {
        await emailjs.send(
            'service_84dn9tc',
            'template_a9b1w42',
            {
                nom: formData.get('nom'),
                prenom: formData.get('prenom'),
                courriel: formData.get('email'),
                telephone: formData.get('telephone'),
                nom_rue: formData.get('Nom_rue'),
                numero_bloc: formData.get('NumeroBloc'),
                ville: formData.get('ville'),
                etat: formData.get('etat'),
                pays: formData.get('pays'),
                titre: formData.get('titre'),
                message: formData.get('message'),
            },
            "62qo-T1uEvB8sQIa6"
        );

        return [false, newState, "Votre message a été envoyé avec succès!", 'success'];
    } catch (error) {
        console.error("Erreur lors de l'envoi du message: ", error);
        return [true, newState, "Une erreur est survenue lors de l'envoi du message", 'error'];
    }
};