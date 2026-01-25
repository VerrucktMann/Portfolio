import { useEffect, useRef } from "react";
import styles from "./Home.module.css";

import heroVideo from "../assets/hero.mp4";
import heroPoster from "../assets/hero-bg.png";

export default function Home() {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // Blur dinámico según scroll (muy sutil)
      if (heroVideoRef.current) {
        const blur = Math.min(y / 300, 6);
        heroVideoRef.current.style.filter = `blur(${blur}px) brightness(0.6)`;
      }

      // Reveal básico
      document.querySelectorAll(`.${styles.reveal}`).forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <video
          ref={heroVideoRef}
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} />
        <div className={styles.filmGrain} />

        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <a href="/projects">
              <span>LOCKED</span>
              <span>MEMORIES</span>
            </a>
          </h1>
          <p className={styles.subtitle}>Escape Room game build in Unity</p>
        </div>

        <div className={styles.scanlines} />
      </section>

      {/* ABOUT */}
      <section className={`${styles.section} ${styles.reveal}`}>
        <h2 className={styles.sectionTitle}>About</h2>
        <p className={styles.text}>
          I'm Unity and XR developer specialising in the creation of modular tools and systems. Proven experience in Meta platforms, optimising workflows for content creators. Passionate about scalable software architecture and user experience in immersive environments.
        </p>
      </section>

      {/* PROJECTS */}
      <section className={`${styles.section} ${styles.projects}`}>
        <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Featured Projects</h2>

        <div className={styles.projectGrid}>
          {[1, 2, 3].map((p) => (
            <article key={p} className={`${styles.projectCard} ${styles.reveal}`}>
              <div className={styles.projectImage} />
              <h3>{p}. Nombre del proyecto</h3>
            </article>
          ))}
        </div>
      </section>
      
      {/* SKILLS */}
      <section className={`${styles.tools} ${styles.section} ${styles.reveal}`}>
        <h2 className={styles.sectionTitle}>Skills and tools:</h2>
        <div className={styles.toolsContent}>         
          <ul>
            <li><h3>Languages:</h3></li>
            <li className={styles.advanced}>C#</li>
            <li className={styles.advanced}>C++</li>
            <li className={styles.advanced}>GDScript</li>
            <li className={styles.advanced}>LUA</li>
            <li className={styles.basics}>HTML</li>
            <li className={styles.basics}>CSS</li>
            <li className={styles.basics}>JavaScript</li>
            <li className={styles.beginner}>Python</li>
            <li className={styles.beginner}>GSC</li>
          </ul>
          <ul>
            <li><h3>Engines:</h3></li>
            <li className={styles.advanced}>Unity</li>
            <li className={styles.advanced}>Godot</li>
            <li className={styles.basics}>Unreal Engine</li>
            <li className={styles.basics}>Game Maker</li>
            <li className={styles.beginner}>CryEngine</li>
            <li className={styles.beginner}>RPG Maker</li>
          </ul>
          <ul>
            <li><h3>Tools:</h3></li>
            <li className={styles.advanced}>Photoshop</li>
            <li className={styles.basics}>Blender</li>
            <li className={styles.basics}>Premiere</li>
            <li className={styles.basics}>Vite</li>
            <li className={styles.basics}>React</li>
            <li className={styles.beginner}>Audacity</li>
            <li className={styles.beginner}>Radiant</li>
          </ul>
          <ul>
            <li><h3>Focus Areas:</h3></li>
            <li className={styles.advanced}>Gameplay Programming</li>
            <li className={styles.basics}>Game Systems</li>
            <li className={styles.beginner}>Player Mechanics</li>
          </ul>
        </div>
      </section>      


      {/* FINAL CTA */}
      <section className={`${styles.finalCTA} ${styles.section} ${styles.reveal}`}>
        <h2 className={styles.ctaTitle}>
          Interested in working together?
        </h2>

        <p className={styles.ctaText}>
          I'm open to junior or mid-level game development opportunities,
          collaborations, or freelance projects.
        </p>

        <div className={styles.ctaButtons}>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Download CV
          </a>

          <a
            href="mailto:contactoverruckt@gmail.com"
            className={styles.secondaryButton}
          >
            Contact me
          </a>
        </div>
      </section>

    </main>
  );
}

