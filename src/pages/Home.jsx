import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      {/* HERO */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`${styles.hero} ${styles.fadeIn}`}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Game Developer</h1>

          <h2 className={styles.subtitle}>
            Gameplay & Systems Programmer
          </h2>

          <p className={styles.description}>
            Focused on creating solid gameplay mechanics, interactive systems
            and engaging player experiences.
          </p>

          <div className={styles.ctaContainer}>
            <a href="/projects" className={styles.primaryButton}>
              View Games
            </a>

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`${styles.featuredProjects} ${styles.fadeIn}`}
      >
        <h2 className={styles.sectionTitle}>Featured Projects</h2>

        <div className={styles.projectsGrid}>
          <article className={styles.projectCard}>
            <div className={styles.projectImage} />

            <div className={styles.projectContent}>
              <h3>Project Title</h3>
              <p className={styles.projectRole}>
                Gameplay Programmer — Unity / C#
              </p>
              <p className={styles.projectDescription}>
                Short description of the project focusing on gameplay mechanics
                or systems you worked on.
              </p>
              <a href="/games" className={styles.projectLink}>
                View project →
              </a>
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>Project Title</h3>
              <p className={styles.projectRole}>
                Game Developer — Godot / GDScript
              </p>
              <p className={styles.projectDescription}>
                Short description of the main mechanics or systems implemented.
              </p>
              <a href="/games" className={styles.projectLink}>
                View project →
              </a>
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>Project Title</h3>
              <p className={styles.projectRole}>
                Systems Programmer — Unreal / C++
              </p>
              <p className={styles.projectDescription}>
                Description focused on systems, performance or architecture.
              </p>
              <a href="/games" className={styles.projectLink}>
                View project →
              </a>
            </div>
          </article>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`${styles.tools} ${styles.fadeIn}`}
      >
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
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`${styles.finalCTA} ${styles.fadeIn}`}
      >
        <h2 className={styles.ctaTitle}>
          Interested in working together?
        </h2>

        <p className={styles.ctaText}>
          I’m open to junior or mid-level game development opportunities,
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
    </div>
  );
}
