import styles from './MemberProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MemberProfile({ image, name, role, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image src={image} className={styles.image} alt='Card Image'></Image>
            </div>
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.role}>{role}</p>
                <p className={styles.description}>{description}</p>                
            </div>
        </div>
    );
}