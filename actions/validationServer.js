"use server";

import { validationContact } from "@/validation/validationContact";
import { redirect } from "next/navigation";

export async function validationServerForm (formData) {
    let [erreur, newState] = validationContact(formData);

    if (erreur) {
        return [erreur, newState];
    };

    redirect('/');
};