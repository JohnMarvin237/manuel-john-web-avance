import styles from './Footer.module.css';
export default function Footer() {
    return <footer className={styles.footer}>
        <div>
            <nav className={styles.nav}>
                <ul className={styles.footerList}>
                    <li><a href="#à-propos" className={styles.footerItems}>À PROPOS</a></li>
                    <li><a href="#carriere" className={styles.footerItems}>CARRIÈRE</a></li>
                    <li><a href="#contact" className={styles.footerItems}>CONTACT</a></li>

                </ul>


            </nav>
            <ul className={styles.footerSocial}>
                <li><a href='linkedin.com/in/manuel-wonda-0b0b062a7/' title='LinkedIn' target='_blank' rel='noopener'></a></li>
            </ul>

            &copy; John-Manuel Dev Solutions
            Développé par Manuel Wonda & John Ndekebitik

            <div className={styles.footerlogo}>

            </div>
        </div>

    </footer>


}
