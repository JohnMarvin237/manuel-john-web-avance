import styles from './productShow.module.css';
import Image from 'next/image';

export default function ProductShow({titleCard, description, imageCard}) {
    return <>
        <div className={styles.productShow}>
            <div className={styles.imageCard}>
                <Image src={imageCard} alt='Image of the product' layout='fill' objectFit='cover' quality={100}/>
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.contentCard}>
                <h2>{titleCard}</h2>
                <p>{description}</p>
            </div>
        </div>
    </>
};