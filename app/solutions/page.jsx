import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import ChatBot from '@/public/chatbot.png';
import GestionEmployes from '@/public/gestionEmployes.png';

export default function Solution() {
  return <>
    <div className={styles.solutionPage}>
      <div titleCard='ChatBot AI' description="Création d'un ChatBot pour automatiser les requêtes des utilisateurs à l'aide de l'intelligence artificielle" imageCard={ChatBot}>
        <span className={styles.keywordCard}>IA</span>
        <span className={styles.keywordCard}>Assistant Virtuel</span>
        <span className={styles.keywordCard}>Accès 24/7</span>
        <span className={styles.keywordCard}>Expérience client</span>
        <span className={styles.keywordCard}>Multilangues</span>
        <span className={styles.keywordCard}>Langage naturel</span>
        <Link href='#'>
          <button className={styles.button}>En savoir plus!</button>
        </Link>
      </div>
      
      <div titleCard='Logiciel de gestion du personnel' description="Application qui peut être utilisée par une startup ou une entreprise de plus grand calibre pour la gestion de ses employés et de ses avoirs" imageCard={GestionEmployes}>
        <span className={styles.keywordCard}>Gestion des paies</span>
        <span className={styles.keywordCard}>Gestion des congés</span>
        <span className={styles.keywordCard}>Gestion des services</span>
        <span className={styles.keywordCard}>Gestion des stocks</span>
        <span className={styles.keywordCard}>Gestion des quarts</span>
        <Link href='#'>
          <button className={styles.button}>En savoir plus!</button>
        </Link>
      </div>
    </div>
  </>
}