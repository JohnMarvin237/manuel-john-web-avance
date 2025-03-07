import styles from './page.module.css';
import Link from 'next/link';

import NavBarItem from '@/components/NavBarItem';
import SectionPage from '@/components/SectionPage';

import DroneIntell from '@/public/DroneAgriWebAvance.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Drone | John-Manuel Dev Solutions",
    description: "Découvrez le Crop Checker, un drone agricole intelligent qui utilise l'IA pour surveiller les plantations et optimiser les cultures",
    keywords: ["drone", "agriculture", "cacao", "plantation", "surveillance", "IA", "intelligence", "artificielle", "CropChecker", "John-Manuel", "Dev",
        "Solutions", "John-Manuel Dev Solutions"],
};

export default function Drone(){
    return <>
        <div className={styles.page}>
            <p id='debutPage'></p>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <NavBarItem lien="#introduction">
                            Introduction
                        </NavBarItem>
                    </li>
                    <li>
                        <NavBarItem lien="#avantages">
                            Avantages du Crop Checker
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
                <SectionPage id='introduction' titre="Introduction" image={DroneIntell} alt="Image d'un drone agricole">
                    Le present projet porte sur la conception d'un drone qui a l'aide de l'Intelligence Artificielle se deplace de maniere autonome dans une plantation tout en filmant les differents plants de cacao pour detecter les differentes anomalies qui peuvent impacter la production de ces derniers. A la fin de ces vols, il va sortir un graphique qui permettra de cartographier la plantation en fonction des differentes anomalies qu'il aura deceler. Par la suite, l'IA analysera et proposera des plans de traitement de ces anomalies.
                </SectionPage>

                <SectionPage id='avantages' titre="Avantages du Crop Checker" >
                    <ol>
                        <li>
                            <span>Optimisation des cultures : </span> 
                            L'une des applications les plus prometteuses de l'IA en agriculture est la détection des anomalies dans les plantations. En intégrant des algorithmes d'apprentissage automatique et des capteurs avancés, un drone autonome peut surveiller les cultures en temps réel, analyser les conditions du sol, détecter les maladies et les parasites, et identifier les zones nécessitant une attention particulière. Ce système intelligent permet aux agriculteurs de réagir rapidement aux problèmes, d'optimiser les rendements, de réduire les coûts et de minimiser l'utilisation d'intrants chimiques, contribuant ainsi à une agriculture plus durable et rentable.
                        </li>
                        <li>
                            <span>Détection des maladies et des ravageurs : </span> 
                            Une autre application majeure de l'IA en agriculture est la détection précoce des maladies des plantes et des infestations de ravageurs. En utilisant des drones autonomes équipés de capteurs et d'algorithmes d'apprentissage automatique, les systèmes d'IA peuvent analyser des images aériennes pour identifier les signes de stress des plantes, de maladies ou de dommages causés par les ravageurs. Cela permet aux agriculteurs d'intervenir rapidement et de limiter les pertes de récolte. De plus, ces systèmes peuvent prédire les épidémies de maladies et recommander des stratégies de gestion des cultures pour les prévenir, optimisant ainsi la santé des plantations et la rentabilité agricole.
                        </li>
                        <li>
                            <span>Prédiction des rendements et des prix : </span> 
                            L'IA peut également être utilisée pour prédire les rendements des cultures et les fluctuations des prix des produits agricoles. En intégrant des drones autonomes équipés de capteurs et d'algorithmes d'apprentissage automatique, les systèmes d'IA peuvent analyser les données historiques des rendements, les conditions météorologiques, les marchés mondiaux et d'autres facteurs pour générer des prévisions précises. Ces prévisions permettent aux agriculteurs de prendre des décisions éclairées sur la gestion de leurs exploitations et la commercialisation de leurs produits, optimisant ainsi la rentabilité et la durabilité de leurs activités agricoles.
                        </li>
                    </ol>
                </SectionPage>

                <SectionPage id='presentationVideo' titre="Notre ferme d'aquaponie">
                    Decouvrez un prototype du drone Crop Checker dans cette video:
                    
                    <iframe src="https://www.youtube.com/embed/FawkHVgm_uI?start=3&rel=0" title="Prototype Crop Checker" frameBorder="0" allow='autoplay; encrypted-media; picture-in-picture' allowFullScreen className={styles.video} alt="Prototype Crop Checker"></iframe><br />

                    Decouvrez une video de fonctionnement du Crop Checker dans une plantation de cacao:

                    <br /><iframe src="https://www.youtube.com/embed/FSAVQovAE0w?rel=0" title="Test dans une plantation" frameBorder="0" allow='autoplay; encrypted-media; picture-in-picture' allowFullScreen className={styles.video} alt="Test dans une plantation"></iframe>
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