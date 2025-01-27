"use client";

import { useState, useEffect, useRef } from 'react';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import styles from './Carousel.module.css';
import Image from 'next/image';

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

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={styles.slider}>
            {/* <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
            <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} /> */}
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
    );
};