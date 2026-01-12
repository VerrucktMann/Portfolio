import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Diseño mundos interactivos donde las decisiones importan.</h1>
        <p>Diseñador de videojuegos centrado en experiencias inmersivas y sistemas inteligentes.</p>
        <Link to="/projects" className={styles.cta}>Ver proyectos</Link>
      </section>

      <section className={styles.skills}>
        <h2>Especialidades</h2>
        <ul>
          <li>Game Design</li>
          <li>Level Design</li>
          <li>Sistemas de IA</li>
          <li>Unity / Crayta / C#</li>
        </ul>
      </section>

      <section className={styles.featured}>
        <h2>Proyectos Destacados</h2>
        {/* Aquí puedes importar y usar tu componente de proyecto si quieres mostrar 2–3 */}
        <p>Aquí aparecerán algunos proyectos seleccionados.</p>
      </section>

      <section className={styles.contact}>
        <h2>Contáctame</h2>
        <div className={styles.links}>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://itch.io" target="_blank">itch.io</a>
          <a href="https://github.com" target="_blank">GitHub</a>
        </div>
      </section>
    </div>
  );
}

