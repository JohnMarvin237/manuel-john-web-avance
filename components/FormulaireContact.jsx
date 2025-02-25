"use client";

import { useState } from 'react';
import styles from './FormulaireContact.module.css';
import pays from '@/data/PaysIndicatifs.json';
import emailjs from 'emailjs-com';

export default function FormulaireContact() {
    const [formState, setFormState] = useState({
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
        methode_reponse: { valeur: '', erreur: null },
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const courriel = formData.get('email');
        const telephone = formData.get('telephone');
        const nom = formData.get('nom');
        const prenom = formData.get('prenom');
        const nom_rue = formData.get('Nom_rue');
        const numero_bloc = formData.get('NumeroBloc');
        const ville = formData.get('ville');
        const etat = formData.get('etat');
        const pays = formData.get('pays');
        const titre = formData.get('titre');
        const message = formData.get('message');

        let newState = { ...formState };
        let erreur = false;

        if (!courriel) {
            newState.courriel.erreur = 'Veuillez entrer une adresse courriel';
            erreur = true;
        } else if (!courriel.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            newState.courriel.erreur = 'Veuillez entrer une adresse courriel valide';
            erreur = true;
        } else {
            newState.courriel.erreur = null;
        }

        if (!telephone) {
            newState.telephone.erreur = 'Veuillez entrer un numéro de téléphone';
            erreur = true;
        } else if (!telephone.match(/^\d{10,15}$/)) {
            newState.telephone.erreur = 'Veuillez entrer un numéro de téléphone valide';
            erreur = true;
        } else {
            newState.telephone.erreur = null;
        }

        if (!nom) {
            newState.nom.erreur = 'Veuillez entrer un nom';
            erreur = true;
        } else {
            newState.nom.erreur = null;
        }

        setFormState(newState);

        if (erreur) {
            return;
        }

        emailjs.send(
            'service_84dn9tc',
            'template_a9b1w42',
            {
                nom,
                prenom,
                courriel,
                telephone,
                nom_rue,
                numero_bloc,
                ville,
                etat,
                pays,
                titre,
                message,
            },
            "62qo-T1uEvB8sQIa6"
        )
        .then(() => {
            alert('Votre message a été envoyé avec succès');
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
                methode_reponse: { valeur: '', erreur: null },
            });
            event.target.reset();
        })
        .catch(() => {
            alert('Une erreur est survenue lors de l\'envoi du message');
        });
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
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
