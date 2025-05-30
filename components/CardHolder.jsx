import styles from './CardHolder.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Creation du composant CardHolder pour les cartes de presentation des differents services
export default function CardHolder({ imageCard, titlecard, description, linkCard, children }) {
    return <>
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={imageCard} className={styles.imageCard} alt='Card Image'></Image>
            </div>

            <div>
                <h2 className={styles.titleCardCss}>{titlecard}</h2>

                <p className={styles.descriptionCss}>{description}</p>

                <div>
                    {children}
                </div><br />

                <Link href={linkCard}>
                    <button className={styles.button}>En savoir plus!</button>
                </Link>

            </div>

        </div>
    </>;
};