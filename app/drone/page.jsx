import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import NavBarItem from '@/components/NavBarItem';
import SectionPage from '@/components/SectionPage';

import DroneIntell from '@/public/DroneAgriWebAvance.jpg';

export default function Drone(){
    return <>
        <div className={styles.page}>
            <p id='debutPage'></p>
            <nav className={styles.navbar}>
                <ul>
                    <li><NavBarItem lien="#introduction">Introduction</NavBarItem></li>
                    <li><NavBarItem lien="#avantages">Avantages de l'aquaponie</NavBarItem></li>
                    <li><NavBarItem lien="#presentationVideo">Notre ferme d'aquaponie</NavBarItem></li>
                </ul>
            </nav>

            <div className={styles.contentPage}>
                <SectionPage id='introduction' titre="Introduction" image={DroneIntell} alt="Image d'un drone agricole">Le present projet porte sur la conception d'un drone qui a l'aide de l'Intelligence Artificielle se deplace de maniere autonome dans une plantation tout en filmant les differents plants de cacao pour detecter les differentes anomalies qui peuvent impacter la production de ces derniers. A la fin de ces vols, il va sortir un graphique qui permettra de cartographier la plantation en fonction des differentes anomalies qu'il aura deceler. Par la suite, l'IA analysera et proposera des plans de traitement de ces anomalies.</SectionPage>

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
                    
                    <iframe src="https://www.youtube.com/embed/7N72fH0trJs?start=3&rel=0" title="Notre Ferme d'Aquaponie" frameBorder="0" allow='autoplay; encrypted-media; picture-in-picture' allowFullScreen className={styles.video}></iframe>
                </SectionPage>

                <div className={styles.buttonDeb}>
                    <button><Link href='#debutPage'>⬆</Link></button>
                </div>
            </div>
            </div>
    </>
}