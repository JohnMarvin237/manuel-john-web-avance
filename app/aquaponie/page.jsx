import styles from './page.module.css';

import Link from 'next/link';

import NavBarItem from '@/components/NavBarItem';
import SectionPage from '@/components/SectionPage';

import Aquaponie1 from '@/public/AquaponieWebAvancee.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aquaponie | John-Manuel Dev Solutions",
    description: "Découvrez l'aquaponie, une méthode de culture qui combine l'aquaculture et l'hydroponie",
    keywords: ["aquaponie", "culture", "aquaculture", "hydroponie", "poissons", "plantes"],
};

export default function Aquaponie() {
    return <>
        <div className={styles.page}>
            <p id='debutPage'></p>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <NavBarItem lien="#introduction">
                            C'est quoi l'Aquaponie
                        </NavBarItem>
                    </li>
                    <li>
                        <NavBarItem lien="#avantages">
                            Avantages de l'aquaponie
                        </NavBarItem>
                    </li>
                    <li>
                        <NavBarItem lien="#presentationVideo">
                            Notre ferme d'aquaponie
                        </NavBarItem>
                    </li>
                </ul>
            </nav>

            <div className={styles.contentPage}>
                <SectionPage id='introduction' titre="C'est quoi l'Aquaponie?" image={Aquaponie1} alt="Image d'un systeme aquaponique">
                    L'aquaponie est une methode de culture qui combine l'aquaculture (elevage des poissons) et l'hydroponie (culture de plantes hors sol). Dans ce systeme, les dechets des poissons fournissent des nutriments pour les plantes, et les plantes filtrent l'eau pour les poissons.
                </SectionPage>

                <SectionPage id='avantages' titre="Avantages de l'aquaponie" >
                    <ul>
                        <li>
                            <span>Ecologique: </span>
                            Reduit les dechets et utilise moins d'eau que l'agriculture traditionnelle,
                        </li>
                        <li>
                            <span>Efficace: </span>
                            Les plantes poussent plus rapidement grace aux nutriments fournis par les poissons,
                        </li>
                        <li>
                            <span>Polyvalent: </span>
                            Peut etre installe a differentes echelles, de petits systemes domestiques a des fermes commerciales
                        </li>
                    </ul>
                </SectionPage>

                <SectionPage id='presentationVideo' titre="Notre ferme d'aquaponie">
                    Decouvrez notre ferme d'aquaponie dans cette video:

                    <iframe src="https://www.youtube.com/embed/7N72fH0trJs?start=3&rel=0" title="Notre Ferme d'Aquaponie" frameBorder="0" allow='autoplay; encrypted-media; picture-in-picture' allowFullScreen className={styles.video} alt="Notre Ferme d'Aquaponie"></iframe>
                </SectionPage>

                <div className={styles.buttonDeb}>
                    <button>
                        <Link href='#debutPage'>
                            ⬆
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </>;
};