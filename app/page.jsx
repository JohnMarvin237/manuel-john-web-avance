import Image from "next/image";
import styles from "./page.module.css";
import CardHolder from '@/components/CardHolder';
import Aquaponie1 from '@/public/AquaponieWebAvancee.jpg'

// import Aquaponie2 from '@/public/AquaponieWebAvancee2.jpg'
// import DroneIntell from '@/public/DroneAgriWebAvancee.jpg'
import SearchBar from "@/components/SearchBar";

// Importation des images pour le caroussel
import Image1 from '@/public/AI.jpg';
import Image2 from '@/public/power-bi_logo.png';
import Image3 from '@/public/aws.png';
import Image4 from '@/public/iot.jpg';
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
import Image19 from '@/public/iot.jpg';
import Image20 from '@/public/java.jpg';
import Image21 from '@/public/Javascript.png';
import Image22 from '@/public/Jenkins-Logo.jpg';
import Image23 from '@/public/kubernetes.png';
import Image24 from '@/public/mongodb.png';
import Image25 from '@/public/NextJs.png';
import Image26 from '@/public/Node-js-Logo.png';
import Image27 from '@/public/Python-logo.png';
import Image28 from '@/public/WebDev.jpg';

const items = [
    <Image key={1} src={Image1}></Image>,
    <Image key={2} src={Image2}></Image>,
    <Image key={3} src={Image3}></Image>,
    <Image key={4} src={Image4}></Image>,
    <Image key={5} src={Image5}></Image>,
    <Image key={6} src={Image6}></Image>,
    <Image key={7} src={Image7}></Image>,
    <Image key={8} src={Image8}></Image>,
    <Image key={9} src={Image9}></Image>,
    <Image key={10} src={Image10}></Image>,
    <Image key={11} src={Image11}></Image>,
    <Image key={12} src={Image12}></Image>,
    <Image key={13} src={Image13}></Image>,
    <Image key={14} src={Image14}></Image>,
    <Image key={115} src={Image15}></Image>,
];

export default function Accueil() {
    return <>
        <div className={styles.home}>
            <div className={ styles.banner }>

            </div>
            <div className={ styles.expertise }>
                {/* <CarouselNew slides={items} /> */}
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
                    <CardHolder titleCard='Aquaponie' description="Production des poissons et des maréchères" imageCard={ Aquaponie1 } >
                        <span className={styles.keywordCard}>IA</span>
                        <span className={styles.keywordCard}>Poissons</span>
                        <span className={styles.keywordCard}>Végétaux</span>
                        <span className={styles.keywordCard}>Electronique</span>
                        <span className={styles.keywordCard}>Poissons</span>
                    </CardHolder>
                    <CardHolder titleCard='Aquaponie' description="Production des poissons et des maréchères" imageCard={ Aquaponie1 } >
                        <span className={styles.keywordCard}>IA</span>
                        <span className={styles.keywordCard}>Poissons</span>
                        <span className={styles.keywordCard}>Végétaux</span>
                        <span className={styles.keywordCard}>Electronique</span>
                        <span className={styles.keywordCard}>Poissons</span>
                    </CardHolder>
                    <CardHolder titleCard='Aquaponie' description="Production des poissons et des maréchères" imageCard={ Aquaponie1 } >
                        <span className={styles.keywordCard}>IA</span>
                        <span className={styles.keywordCard}>Poissons</span>
                        <span className={styles.keywordCard}>Végétaux</span>
                        <span className={styles.keywordCard}>Electronique</span>
                        <span className={styles.keywordCard}>Poissons</span>
                    </CardHolder>
                                        
                </div>                
            </div>
                        
            <div className={ styles.team }></div>
        </div>
    </>;
};