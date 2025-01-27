import Image from "next/image";
import styles from "./page.module.css";
import CardHolder from '@/components/CardHolder';
import Aquaponie1 from '@/public/AquaponieWebAvancee.jpg'
import Aquaponie2 from '@/public/AquaponieWebAvancee2.jpg';
import DroneIntell from '@/public/DroneAgriWebAvance.jpg';
import ChatBot from '@/public/chatbot.png';
import GestionEmployes from '@/public/gestionEmployes.png'
import SearchBar from "@/components/SearchBar";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carousel from "@/components/Carousel";

// Importation des images pour le caroussel
import Image1 from '@/public/AI.jpg';
import Image2 from '@/public/power-bi_logo.png';
import Image3 from '@/public/aws.png';
import Image4 from '@/public/iot.png';
import Image5 from '@/public/C_Sharp.png';
import Image6 from '@/public/Python-logo.png';
import Image7 from '@/public/java.jpg';
import Image8 from '@/public/Cassandra_logo.png';
import Image9 from '@/public/CI-CD.png';
import Image10 from '@/public/cloud-computing-diagram.jpg';
import Image11 from '@/public/Cybersecurity.jpeg';
import Image12 from '@/public/Database.jpg';
import Image13 from '@/public/dotnet.png';
import Image14 from '@/public/electronic.jpeg';
import Image15 from '@/public/embedded-systems.png';
import Image16 from '@/public/GCP.png';
import Image17 from '@/public/GitHub-Logo.png';
import Image18 from '@/public/gitlab.png';
import Image19 from '@/public/bigdata2.png';
import Image20 from '@/public/java.jpg';
import Image21 from '@/public/Javascript.png';
import Image22 from '@/public/Jenkins-Logo.jpg';
import Image23 from '@/public/kubernetes.png';
import Image24 from '@/public/mongodb.png';
import Image25 from '@/public/NextJs.png';
import Image26 from '@/public/Node-js-Logo.png';
import Image27 from '@/public/Python-logo.png';
import Image28 from '@/public/WebDev.jpg';

// Création du tableau des images
const slides = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27,
    Image28
]

export default function Accueil() {
    return <>
        <div className={styles.home}>
            <div className={ styles.banner }>

            </div>
            <div className={ styles.expertise }>
                <div className={styles.expertiseTitle}>
                    <h2>Notre Expertise</h2>
                </div>
                <div className={styles.expertiseContent}>
                    <Carousel slides={slides}/>
                </div>                
            </div>
            <div className={ styles.testimonial}>

            </div>
            <div className={ styles.project }>
                <h2>Quelques projets en cours de réalisations</h2>
                <div className={ styles.cardContainer}>
                    <CardHolder titleCard='Aquaponie' description="Production des poissons et des maréchères" imageCard={ Aquaponie1 } >
                        <span className={styles.keywordCard}>IA</span>
                        <span className={styles.keywordCard}>Poissons</span>
                        <span className={styles.keywordCard}>Végétaux</span>
                        <span className={styles.keywordCard}>Electronique</span>
                        <span className={styles.keywordCard}>Poissons</span>
                    </CardHolder>
                    <CardHolder titleCard='Crop Checker' description="Détection des anomalies dans les plantations" imageCard={ DroneIntell } >
                        <span className={styles.keywordCard}>IA</span>
                        <span className={styles.keywordCard}>Drone</span>
                        <span className={styles.keywordCard}>Végétaux</span>
                        <span className={styles.keywordCard}>Electronique</span>
                        <span className={styles.keywordCard}>Analyse</span>
                    </CardHolder>
                    <CardHolder titleCard='ChatBot AI' description="Création d'un ChatBot pour automatiser les requêtes des utilisateurs à l'aide de l'inteligence artificielle" imageCard={ ChatBot } >
                        <span className={styles.keywordCard}>IA</span>
                        <span className={styles.keywordCard}>Assistant Virtuel</span>
                        <span className={styles.keywordCard}>Accès 24/7</span>
                        <span className={styles.keywordCard}>Expérience client</span>
                        <span className={styles.keywordCard}>Multilangues</span>
                        <span className={styles.keywordCard}>Langage naturel</span>
                    </CardHolder>
                    <CardHolder titleCard='Logiciel de gestion du personnel' description="Application qui peut être utilisée par une startup ou un entreprise de plus grand calibre pour la gestion de ses employés et de ses avoirs" imageCard={ GestionEmployes } >
                        <span className={styles.keywordCard}>Gestion des paies</span>
                        <span className={styles.keywordCard}>Gestion des congés</span>
                        <span className={styles.keywordCard}>Gestion des services</span>
                        <span className={styles.keywordCard}>Gestion des stocks</span>
                        <span className={styles.keywordCard}>Gestion des quarts</span>
                    </CardHolder>                                        
                </div>                
            </div>
                        
            <div className={ styles.team }></div>
        </div>
    </>;
};