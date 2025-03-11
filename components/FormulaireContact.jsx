"use client";

import { useState } from 'react';
import styles from './FormulaireContact.module.css';
import pays from '@/data/PaysIndicatifs.json';
import { validationServerForm } from '@/actions/validationServer';
import { validationContact } from '@/validation/validationContact';
import { useRouter } from 'next/navigation';

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const [erreur, newState] = validationContact(formData);
        
        if (erreur) {
            console.log('Erreur dans le formulaire', erreur);
            setFormState(newState);
            return;
        }

        const [erreurServeur, newStateServeur, messageServeur, typeMessage] = await validationServerForm(formData);

        setFormState(newStateServeur);

        if (erreurServeur) {
            console.log('Erreur dans le formulaire');
            return;
        }

        setMessage(messageServeur);
        setMessageType(typeMessage);

        event.target.reset();
        setFormState(initialState);

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