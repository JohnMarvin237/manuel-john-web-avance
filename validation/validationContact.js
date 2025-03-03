export function validationContact(formData) {
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

    let erreur = false;
    let newState = {
        courriel: {valeur: '', erreur: null},
        telephone: {valeur: '', erreur: null},
        nom: {valeur: '', erreur: null},
        prenom: {valeur: '', erreur: null},
        nom_rue: {valeur: '', erreur: null},
        numero_bloc: {valeur: '', erreur: null},
        ville: {valeur: '', erreur: null},
        etat: {valeur: '', erreur: null},
        pays: {valeur: '', erreur: null},
        titre: {valeur: '', erreur: null},
        message: {valeur: '', erreur: null},
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
