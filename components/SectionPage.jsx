import Image from "next/image";
import styles from "./SectionPage.module.css";

// Creation d'un composant SectionPage qui prend en paramètre un id, un titre, une image et des enfants et qui affiche une section
export default function SectionPage({ id, titre, image = null, alt = null, children }) {
    return <>
        <section id={id} className={styles.sectionStyle}>

            <h2 className={styles.titre_h2}>{titre}</h2>

            <Image src={image} alt={alt} className={styles.image_sec} />

            <div className={styles.content_sec}>{children}</div>

        </section>
    </>;
};