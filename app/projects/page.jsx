import Image from "next/image";
import styles from "./page.module.css";
import ProductShow from "@/components/ProductShow";

import Aquaponie1 from '@/public/AquaponieWebAvancee.jpg';
import DroneIntell from '@/public/DroneAgriWebAvance.jpg';
import ChatBot from '@/public/chatbot.png';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Projets | John-Manuel Dev Solutions",
    description: "Découvrez les différents projets de John-Manuel Dev Solutions",
    keywords
: ["projets", "John-Manuel", "Dev",
        "Solutions", "John-Manuel Dev Solutions", "aquaponie", "drone", "chatbot"],
};

export default function Produit(){
    return <>
        <div className={styles.productContainer}>
            <ProductShow titleCard='Aquaponie' description="Production des poissons et des marecheres dans des bacs hors sols et dans des serres. Les poissons sont nourris, et produisent des dechets aquatiques, ces derniers presents dans l'eau sont recircules vers les plantes dont les racines baignent dans la meme eau. Et par leur racine elle recupere les nutriments necessaire a leur developpement et purifie l'eau pour les poissons." imageCard={Aquaponie1} link='/aquaponie'/>

            <ProductShow titleCard='Crop Checker' description="Drone a quatre rotors, qui se deplace de maniere autonome apres avoir defini son plan de vol au travers d'une intelligence artificielle et assure la detection des anomalies dans les plantations, produit un rapport detaille de la detection." imageCard={DroneIntell} link='/drone'/>

            <ProductShow titleCard='ChatBot AI' description="Ceci est un chatbot qui fait tourner une Intelligence Artificielle pour automatiser toutes les taches de communication avec les utilisateurs. Elle peut etre utiliser dans n'importe quel secteur d'activite qui veut utilisr un chatbot qui se veut precis, concis et repondant a toutes les taches critiques automatisables dans la gestion des requetes clients." imageCard={ChatBot} link='/'/>
        </div>
    </>;
};