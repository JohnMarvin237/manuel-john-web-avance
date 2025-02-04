import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

// Creation du composant banniere pour l'image et le slogan en debut de page d'accueil
export default function Banner({ fontImage, slogan , ButtonName, ButtonLink}) {
    return <>
            <div className={styles.banner}>
                <div className={styles.background}>
                    <Image src={fontImage} alt='Background Image' layout='fill' objectFit='cover' quality={100}/>
                </div>

                <div className={styles.overlay}></div>

                <div className={styles.content}>

                    <h2>{slogan}</h2>

                    <button className={styles.button}>{ButtonName}</button>
                    
                </div>
            </div>
        </>;
};