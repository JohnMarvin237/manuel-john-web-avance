"use server";

import { validationContact } from "@/validation/validationContact";
import emailjs from "emailjs-com";
import axios from "axios";
import { resolve } from "styled-jsx/css";

// emailjs.init("62qo-T1uEvB8sQIa6");

export async function validationServerForm (formData) {
    let [erreur, newState] = validationContact(formData);

    if (erreur) {
        return [erreur, newState];
    };
    
    try {
        const emailParams = {
            service_id: 'service_84dn9tc',
            template_id: 'template_a9b1w42',
            user_id: '62qo-T1uEvB8sQIa6',
            templateParams: {
                nom: formData.nom,
                prenom: formData.prenom,
                courriel: formData.courriel,
                telephone: formData.telephone,
                nom_rue: formData.nom_rue,
                numero_bloc: formData.numero_bloc,
                ville: formData.ville,
                etat: formData.etat,
                pays: formData.pays,
                titre: formData.titre,
                message: formData.message,
            },
        };

        console.log("emailParams: ", emailParams);

        await new Promise(resolve => setTimeout(resolve, 3000));

        return [false, newState, "Votre message a été envoyé avec succès!", 'success'];
        
    } catch (error) {
        console.error("Erreur lors de l'envoi du message: ", error);
        return [true, newState, "Une erreur est survenue lors de l'envoi du message", 'error'];
    }
};