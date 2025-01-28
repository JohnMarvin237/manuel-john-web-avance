import Image from "next/image";
import styles from "./page.module.css";
import CardHolder from '@/components/CardHolder';

import Aquaponie1 from '@/public/AquaponieWebAvancee.jpg'
import Aquaponie2 from '@/public/AquaponieWebAvancee2.jpg';

export default function Produit(){
    return <>
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
                                                           
                </div>
    </>
}