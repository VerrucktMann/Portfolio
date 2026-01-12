import React, { useEffect, useState, useRef } from 'react';
import styles from './HeroCarousel.module.css';

export default function HeroCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const currentProject = projects[currentIndex];
  const backgroundImage = currentProject.bannerImages[Math.floor(Math.random() * currentProject.bannerImages.length)];

  return (
    <div className={`${styles.hero} ${styles.fadeIn}`}>
      <img src={backgroundImage} alt={currentProject.title} className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1>{currentProject.title}</h1>
        <div className={styles.tags}>
          {currentProject.tags?.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.arrows}>
        <button onClick={prevSlide}></button>
        <button onClick={nextSlide}></button>
      </div>

      <div className={styles.dots}>
        {projects.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}