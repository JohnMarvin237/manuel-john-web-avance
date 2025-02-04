"use client";

import { useState, useEffect, useRef } from 'react';

import styles from './Carousel.module.css';
import Image from 'next/image';

// Creation d'un composant Carousel qui prend en paramètre un tableau de slides et qui affiche les images en carrousel
export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 3000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return <>
        <section className={styles.slider}>
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? styles.slideActive : styles.slide}
                        key={index}
                    >
                        {index === current && (
                            <Image src={slide} alt='travel image' className={styles.image}></Image>
                        )}
                    </div>
                );
            })}
        </section>
    </>;
};