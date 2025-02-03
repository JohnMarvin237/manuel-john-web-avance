import Link from "next/link";
import Image from "next/image";
import styles from "./SectionPage.module.css";

export default function SectionPage({ id, titre, image = null,alt = null, children}) {
    return <>
        <section id = {id} className={styles.sectionStyle}>
            <h2 className={styles.titre_h2}>{titre}</h2>
            <Image src={image} alt={alt} className={styles.image_sec}></Image>
            <div className={styles.content_sec}>{children}</div>
        </section>
    </>;
};