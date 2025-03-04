"use client";

import { useState } from 'react';
import styles from './FormulaireContact.module.css';
import pays from '@/data/PaysIndicatifs.json';
import emailjs from 'emailjs-com';
import { validationContact } from '@/validation/validationContact';
import { validationServerForm } from '@/actions/validationServer';

export default function FormulaireContact() {
    const initialState = {
        courriel: { valeur: '', erreur: null },
        telephone: { valeur: '', erreur: null },
        nom: { valeur: '', erreur: null },
        prenom: { valeur: '', erreur: null },
        nom_rue: { valeur: '', erreur: null },
        numero_bloc: { valeur: '', erreur: null },
        ville: { valeur: '', erreur: null },
        etat: { valeur: '', erreur: null },
        pays: { valeur: '', erreur: null },
        titre: { valeur: '', erreur: null },
        message: { valeur: '', erreur: null },
    };

    const [formState, setFormState] = useState(initialState);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const [erreur, newState] = validationContact(formData);

        setFormState(newState);

        if (erreur) {
            // setMessage("Veuillez corriger les erreurs dans le formulaire");
            // setMessageType('error');
            console.log('Erreur dans le formulaire');
            return;
        }

        emailjs.send(
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
        )
        .then(() => {
            setMessage("Votre message a été envoyé avec succès!");
            setMessageType('success');
            setFormState({
                courriel: { valeur: '', erreur: null },
                telephone: { valeur: '', erreur: null },
                nom: { valeur: '', erreur: null },
                prenom: { valeur: '', erreur: null },
                nom_rue: { valeur: '', erreur: null },
                numero_bloc: { valeur: '', erreur: null },
                ville: { valeur: '', erreur: null },
                etat: { valeur: '', erreur: null },
                pays: { valeur: '', erreur: null },
                titre: { valeur: '', erreur: null },
                message: { valeur: '', erreur: null },
            });
            event.target.reset();
            console.log('Message envoyé');
        })
        .catch(() => {
            setMessage("Une erreur est survenue lors de l'envoi du message");
            setMessageType('error');
            console.log("Une erreur est survenue lors de l'envoi du message");
        });

        setTimeout(() => {
            setMessage("");
        }, 5000);
    };

    return (
        <div className={styles.body}>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div>
                    <label>Civilité:</label>
                    <select name="civilite">
                        <option value="monsieur">M.</option>
                        <option value="madame">Mme.</option>
                        <option value="mademoiselle">Mlle.</option>
                        <option value="maitre">Me.</option>
                        <option value="docteur">Dr.</option>
                        <option value="professeur">Prof.</option>
                    </select>
                </div>
                <div>
                    <label>Nom:</label>
                    <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                    <div className={styles.erreur}>{formState.nom.erreur}</div>
                </div>
                <div>
                    <label>Prénom:</label>
                    <input type="text" name="prenom" defaultValue={formState.prenom.valeur} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" defaultValue={formState.courriel.valeur} />
                    <div className={styles.erreur}>{formState.courriel.erreur}</div>
                </div>
                <div>
                    <label>Téléphone:</label>
                    <select name="indicatif" required>
                        {pays.map((pays) => (
                            <option key={pays.id} value={pays.code}>
                                {pays.name} {pays.code}
                            </option>
                        ))}
                    </select>
                    <input type="tel" name="telephone" defaultValue={formState.telephone.valeur} />
                    <div className={styles.erreur}>{formState.telephone.erreur}</div>
                </div>
                <div>
                    <label>Adresse:</label>
                    <input type="text" name="Nom_rue" placeholder="Nom et numero de rue" />
                    <input type="text" name="NumeroBloc" placeholder="Numéro d'appartement" />
                    <input type="text" name="ville" placeholder="Ville" />
                    <input type="text" name="etat" placeholder="État/Région/Province" />
                    <select name="pays">
                        {pays.map((pays) => (
                            <option key={pays.id} value={pays.name}>{pays.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Titre du message:</label>
                    <input type="text" name="titre" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message"></textarea>
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </div>
                <button type="submit" >Envoyer</button>

                { message && (
                <div className={`${styles.Valider} ${messageType ==="success" ? styles.success : styles.errors}`}>
                    {message}
                </div>
            )}
            </form>
            
        </div>
    );
};