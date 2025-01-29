import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Aquaponie1 from '@/public/AquaponieWebAvancee.jpg';

export default function Aquaponie() {
    return <>
        <p id='debutPage'></p>
        <nav>
            <ul>
                <li><Link href='#introduction'>Introduction</Link></li>
                <li><Link href='#avantages'>Avantages de l'aquaponie</Link></li>
                <li><Link href='#presentationVideo'>Presentation Video de l'aquaponie</Link></li>
            </ul>
        </nav>

        <section id='introduction'>
            <h2>C'est quoi l'Aquaponie</h2>
            <Image src={Aquaponie1}></Image>
            <p>L'aquaponie est une methode de culture qui combine l'aquaculture (elevage des poissons) et l'hydroponie (culture de plantes hors sol). Dans ce systeme, les dechets des poissons fournissent des nutriments pour les plantes, et les plantes filtrent l'eau pour les poissons.</p>
        </section>

        <section id='avantages'>
            <h2>Avantages de l'aquaponie</h2>
            <ul>
                <li><span>Ecologique:</span> Reduit les dechets et utilise moins d'eau que l'agriculture traditionnelle,</li>
                <li><span>Efficace:</span> Les plantes poussent plus rapidement grace aux nutriments fournis par les poissons,</li>
                <li><span>Polyvalent:</span> Peut etre installe a differentes echelles, de petits systemes domestiques a des fermes commerciales</li>
            </ul>
        </section>

        <section id='presentationVideo'>
            <h2>Notre ferme d'aquaponie</h2>
            <iframe width="75%" height="500px" src="https://www.youtube.com/embed/7N72fH0trJs?start=3&rel=0" title="Notre Ferme d'Aquaponie" frameborder="0" allow='autoplay; encrypted-media; picture-in-picture' allowFullScreen></iframe>
        </section>

        <button><Link href='#debutPage'>.</Link></button>
    </>;
};