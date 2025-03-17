export function validationContact(formData) {
    const courriel = formData.courriel;
    const telephone = formData.telephone;
    const nom = formData.nom;
    const prenom = formData.prenom;
    const nom_rue = formData.nom_rue;
    const numero_bloc = formData.numero_bloc;
    const ville = formData.ville;
    const etat = formData.etat;
    const pays = formData.pays;
    const titre = formData.titre;
    const message = formData.message;

    let erreur = false;
    let newState = {
        courriel: { valeur: courriel, erreur: null },
        telephone: { valeur: telephone, erreur: null },
        nom: { valeur: nom, erreur: null },
        prenom: { valeur: prenom, erreur: null },
        nom_rue: { valeur: nom_rue, erreur: null },
        numero_bloc: { valeur: numero_bloc, erreur: null },
        ville: { valeur: ville, erreur: null },
        etat: { valeur: etat, erreur: null },
        pays: { valeur: pays, erreur: null },
        titre: { valeur: titre, erreur: null },
        message: { valeur: message, erreur: null },
    };

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
    
    if (!message) {
        newState.message.erreur = 'Veuillez entrer un message';
        erreur = true;
    } else {
        newState.message.erreur = null;
    }

    if (!nom) {
        newState.nom.erreur = 'Veuillez entrer un nom';
        erreur = true;
    } else {
        newState.nom.erreur = null;
    }

    return [erreur, newState];
};
