
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App


/*
import React from 'react'
import './index.css'
import { useEffect } from 'react'


export default function App() {
  useEffect(() => {
const onScroll = () => {
const y = window.scrollY
const hero = document.querySelector('.hero-media')
const nav = document.querySelector('.site-nav')


if (hero) {
hero.style.transform = `translateY(${y * 0.15}px)`
}


if (nav) {
nav.classList.toggle('scrolled', y > 40)
}


document.querySelectorAll('[data-reveal]').forEach(el => {
const rect = el.getBoundingClientRect()
if (rect.top < window.innerHeight * 0.85) {
el.classList.add('revealed')
}
})
}


window.addEventListener('scroll', onScroll)
onScroll()
return () => window.removeEventListener('scroll', onScroll)
}, [])

return (
<div className="page-root">
<header className="site-nav">
<div className="nav-inner">
<img src="/logo.svg" alt="logo" className="logo" />
<nav>
<a href="#work">Proyectos</a>
<a href="#about">Sobre mí</a>
<a href="#contact">Contacto</a>
</nav>
</div>
</header>


<main className="hero">
{/* Background: prefer video; si no existe, se usará la imagen poster }

<video className="hero-media" autoPlay muted loop playsInline poster="/hero-poster.jpg">
<source src="/hero.mp4" type="video/mp4" />
</video>


<div className="hero-overlay">
<div className="hero-content">
<h1 className="hero-title">Mi Nombre — <span>Game Developer</span></h1>
<p className="hero-sub">Diseño y desarrollo de experiencias interactivas, juegos y demos jugables.</p>


<div className="hero-cta">
<a className="btn primary" href="#work">Ver proyectos</a>
<button className="btn trailer" onClick={() => document.getElementById('trailer-modal').classList.add('open')}>Ver trailer</button>
</div>


<div className="hero-meta">Unreal Engine · Unity · C# · C++</div>
</div>
</div>
</main>



<section id="work" className="projects">
<h2 data-reveal>Proyectos destacados</h2>
<div className="grid">
<article className="card data-reveal">
<img src="/project1.jpg" alt="project 1" />
<h3>Proyecto 1</h3>
</article>
<article className="card">
<img src="/project2.jpg" alt="project 2" />
<h3>Proyecto 2</h3>
</article>
</div>
</section>


<footer className="site-footer">
<small>© {new Date().getFullYear()} Tu Nombre — Game Dev</small>
</footer>



<div id="trailer-modal" className="modal" onClick={(e)=>{ if(e.target.id==='trailer-modal') e.currentTarget.classList.remove('open')}}>
<div className="modal-inner">
<button className="modal-close" onClick={(e)=> e.currentTarget.closest('.modal').classList.remove('open')}>✕</button>
<video controls src="/trailer.mp4" poster="/trailer-poster.jpg"/>
</div>
</div>
</div>
)
}

*/