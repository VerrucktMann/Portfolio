import React from 'react';
import styles from './About.module.css';
import perfil from '../assets/perfil.png';
import witness from '../assets/witness2.jpg';
import Timeline from '../components/Timeline.jsx';
import lockedPhoto from '../assets/locked-header.png';
import craytaHeader from '../assets/crayta-header.png';
import uoc from '../assets/uoc2.png'; 

const timelineEvents = [
  {
    title: 'Locked Memories',
    description: 'Escape room narrativo en primera persona creado en Unity desde cero.',
    type: 'proyecto',
    image: lockedPhoto,
    start: '2023-03',
    end: '2025-09',
  },
  {
    title: 'Diseñador en Crayta / Meta',
    description: 'Diseño de niveles y lógica de juego para experiencias multijugador.',
    type: 'trabajo',
    image: craytaHeader,
    start: '2020-08',
    end: '2023-02',
  },
  {
    title: 'Graduado en Ingienería',
    description: 'Grado universitario con especialización en Multimedia.',
    type: 'estudio',
    image: uoc,
    start: '2016-09',
    end: '2020-06',
  },
  {
    title: 'Game Jam: “Reversed Gravity”',
    description: 'Juego de plataformas con mecánicas invertidas. Finalista.',
    type: 'proyecto',
    image: lockedPhoto,
    start: '2020-07',
    end: '2020-08',
  },
];

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.intro}>
        <img src={perfil} className={styles.perfil} alt="Perfil" />
        <div className={styles.textPerfil}>
          <p>
            I'm a level and systems designer, UX artist, programmer and storyteller with 5+ years experience making games.
          </p>
          <p>
            My work spans multiple genres and platforms, with a recent focus on VR experiences. I have professional experience in level design, systems programming, and user interface design.
            Currently, I'm developing my own game Locked Memories — a first-person escape room built entirely from scratch in Unity. It's set for release on PC with console versions under consideration.
          </p>
          <p>
            I thrive on both technical and creative experimentation. I enjoy translating ideas — whether original or inspired by other games — into playable prototypes. Exploring different genres helps me understand their inner workings and discover what makes each one unique, pushing the boundaries of my skills in the process.
            I'm always eager to learn, whether it's diving into complex programming challenges, mastering new tools and engines, or building weird and fun side projects.
            I excel at crafting small, focused builds to test the true potential of both external concepts and personal ideas. I have a strong sense of polish and coherence: I believe that sometimes less is more, and that anything not contributing to the whole should be refined or removed.
          </p>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <Timeline events={timelineEvents}/>
      </section>

      <section className={styles.tools}>
        <h2>Skills and tools:</h2>
        
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
      </section>
      
      <div className={styles.intro}>
        <div>
          <section className={styles.textPerfil}>
            <h2>Inspiration</h2>
            <p>
              I approach game development as both a craft and a passion, driven by the challenge of creating experiences that engage the mind and reward curiosity.
              Inspired by puzzle adventures, escape rooms, roguelikes, and deck-building games, I strive to design mechanics that feel elegant, challenging, 
              and endlessly replayable. Titles such as <em>The Witness</em>, <em>Slay the Spire</em>, and <em>Into the Breach</em> have shaped my perspective on how 
              simple rules can unfold into deep and meaningful player journeys. My goal is to bring that same sense of discovery and strategic experimentation into my 
              own projects, crafting worlds where players are encouraged to think differently, adapt, and uncover new possibilities. Ultimately, I see games not just 
              as entertainment, but as powerful journeys of problem-solving, creativity, and exploration.      
            </p>
          </section>
        
          <section className={styles.textPerfil}>

            <h2>Hobbies</h2>
              <p>
                Outside of development, I run a YouTube channel with over 85,000 subscribers, where I create content focused on <em>Call of Duty Zombies</em>, a game mode
                that had a big impact on me growing up. Although my personal gaming preferences have expanded toward puzzle-driven and strategy titles, I still enjoy sharing 
                Zombies content with my community and with the many friends I've made over the past 10 years through playing and covering the mode. This long-standing 
                connection not only keeps me engaged with a passionate audience but also inspires several of my projects, where I experiment with mechanics and design 
                elements reminiscent of <em>Call of Duty Zombies</em>. In this way, I'm able to bridge my professional work with my hobby, blending my skills as a developer with 
                the creative community I've built around gaming.
              </p>
          </section>
        </div>

        <img src={witness} className={styles.witness} alt="Perfil" />
      </div>


      <section className={styles.awards}>
        <h2>Recognition and Awards</h2>
        
      </section>

      <section className={styles.cta}>
        <h2>¿Hablamos?</h2>
        <p>Estoy abierto a colaboraciones, feedback o simplemente charlar sobre diseño.</p>
        <div className={styles.links}>
          <a href="mailto:tuemail@ejemplo.com" className={styles.button}>Enviar email</a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://itch.io/tuusuario" target="_blank" rel="noopener noreferrer">itch.io</a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
}
