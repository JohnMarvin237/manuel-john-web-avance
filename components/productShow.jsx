import styles from './ProductShow.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Creation d'un composant ProductShow qui prend en paramètre un titre, une description, une image et un lien et qui affiche une carte de produit
export default function ProductShow({ titleCard, description, imageCard, link }) {
    return <>
        <div className={styles.productShow}>
            <div className={styles.imageCard}>
                <Image src={imageCard} alt='Image of the product' layout='fill' objectFit='cover' quality={100} />
            </div>

            <div className={styles.overlay}></div>

            <div className={styles.contentCard}>

                <h2>{titleCard}</h2>

                <p>{description}</p>

                <Link href={link}>
                    <button className={styles.button}>
                        En savoir plus
                    </button>
                </Link>

            </div>
        </div>
    </>;
};