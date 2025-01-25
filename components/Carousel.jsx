import React, { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({items}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return <>
        <div className={styles.carousel}>
            <button onClick={prevSlide}>Précédent</button>
            <div className={styles.carouselItem}>
                {items[currentIndex]}
            </div> 
            <button onClick={nextSlide}>Suivant</button> 
        </div>   
    </>
}