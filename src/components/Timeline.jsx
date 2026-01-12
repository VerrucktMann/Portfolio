import React, { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';

export default function Timeline({ events }) {
  const containerRef = useRef(null);
  const [cursorX, setCursorX] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [autoScrollActive, setAutoScrollActive] = useState(true);
  const autoScrollTimeoutRef = useRef(null);

  /** Configuración editable */
  const maxCursorSpeed = 10;        // Velocidad máxima con el cursor
  const autoScrollSpeed = 0.5;      // Velocidad en modo automático
  const autoScrollDelay = 3000;     // Espera antes de reanudar auto-scroll (ms)

  const startYear = 2015;
  const endYear = 2026;
  const pixelsPerMonth = 30;

  /** Ajuste para empezar en mitad de 2026 */
  const extraYearsAtStart = 0.5; // medio año
  const totalMonths = (endYear - startYear + extraYearsAtStart) * 12;
  const timelineWidth = totalMonths * pixelsPerMonth - (30 * 6);    //  Para cortar el medio ultimo año

  // Convierte fecha en índice de mes
  const getMonthIndex = (dateStr) => {
    const [year, month] = dateStr.split('-').map(Number);
    return (endYear - year) * 12 + (12 - month);
  };

  /** Gestión del hover */
  const handleMouseEnter = () => {
    setIsHovering(true);
    setAutoScrollActive(false);
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCursorX(null);
    autoScrollTimeoutRef.current = setTimeout(() => {
      setAutoScrollActive(true);
    }, autoScrollDelay);
  };

  /** Animación de scroll */
  useEffect(() => {
    let animationFrame;

    const animateScroll = () => {
      if (!containerRef.current) return;
      const { width, left } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;

      if (isHovering && cursorX !== null) {
        const distanceFromCenter = cursorX - centerX;
        const relativeDistance = Math.abs(distanceFromCenter) / (width / 2);
        const accelerationFactor = relativeDistance ** 2;
        const dynamicSpeed = maxCursorSpeed * accelerationFactor;

        if (distanceFromCenter < -width * 0.05) {
          containerRef.current.scrollLeft -= dynamicSpeed;
        } else if (distanceFromCenter > width * 0.05) {
          containerRef.current.scrollLeft += dynamicSpeed;
        }
      } else if (autoScrollActive) {
        containerRef.current.scrollLeft += autoScrollSpeed;
      }

      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorX, isHovering, autoScrollActive]);

  return (
    <div className={styles.container} style={{ width: '100vw' }}>
      <div
        ref={containerRef}
        className={styles.wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={(e) => setCursorX(e.clientX)}
      >
        <div
          className={styles.timeline}
          style={{ width: `${timelineWidth}px` }}
        >
          {/* Línea base gris */}
          <div
            className={styles.baseLine}
            style={{ width: `${timelineWidth}px` }}
          />

          {/* Eventos */}
          {events.map((event, i) => {
            const startIndex = getMonthIndex(event.start);
            const endIndex = getMonthIndex(event.end);
            const durationMonths = startIndex - endIndex + 1;

            const left = endIndex * pixelsPerMonth;
            const width = durationMonths * pixelsPerMonth;

            return (
              <div
                key={i}
                className={`${styles.event} ${styles[event.type]}`}
                style={{ left: `${left}px`, width: `${width}px` }}
              >
                <div className={styles.range} />
                <div className={styles.card}>
                  <img src={event.image} alt={event.title} />
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            );
          })}

          {/* Marcadores de año */}
          {[...Array(endYear - startYear + 1)].map((_, i) => {
            const year = endYear - i;
            const left =
              (i * 12 + extraYearsAtStart * 12) * pixelsPerMonth;
            return (
              <div
                key={year}
                className={styles.yearMarker}
                style={{ left: `${left}px` }}
              >
                {year}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
