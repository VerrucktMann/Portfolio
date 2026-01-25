import React from 'react';
import styles from './Projects.module.css';
import Project from '../components/Project.jsx';
import HeroCarousel from '../components/HeroCarousel';

import lockedHeader from '../assets/locked-header.png';
import locked1 from '../assets/locked1.png';
import locked2 from '../assets/locked2.png';
import locked3 from '../assets/locked3.png';
import locked4 from '../assets/locked4.png';
import locked5 from '../assets/locked5.png';

import alphaHeader from '../assets/alpha-header.png';
import alpha1 from '../assets/alpha1.png';
import alpha2 from '../assets/alpha2.png';
import alpha3 from '../assets/alpha3.png';
import alpha4 from '../assets/alpha4.png';
import alpha5 from '../assets/alpha5.png';
import alpha6 from '../assets/alpha6.png';
import alpha7 from '../assets/alpha7.png';
import alpha8 from '../assets/alpha8.png';

import betaHeader from '../assets/beta-header.png';
import beta1 from '../assets/beta1.png';
import beta2 from '../assets/beta2.png';
import beta3 from '../assets/beta3.png';
import beta4 from '../assets/beta4.png';
import beta5 from '../assets/beta5.png';
import beta6 from '../assets/beta6.png';
import beta7 from '../assets/beta7.png';

import craytacityHeader from '../assets/craytacity-header.png';
import craytacityBanner1 from '../assets/craytacityBanner1.png';
import craytacityBanner2 from '../assets/craytacityBanner2.png';
import craytacityBanner3 from '../assets/craytacityBanner3.png';
import craytacityBanner4 from '../assets/craytacityBanner4.png';
import craytacity1 from '../assets/craytacity1.png';
import craytacity2 from '../assets/craytacity2.jpg';
import craytacity3 from '../assets/craytacity3.png';
import craytacity4 from '../assets/craytacity4.jpg';
import craytacity5 from '../assets/craytacity5.jpg';

import coreHeader from '../assets/core-header.png';
import core1 from '../assets/core3.png';
import core2 from '../assets/core2.png';
import core3 from '../assets/core4.png';
import core4 from '../assets/core5.png';
import core5 from '../assets/core1.png';

import dbd1 from '../assets/dbd1.png';
import dbd2 from '../assets/dbd2.png';
import dbd3 from '../assets/dbd3.png';
import dbd4 from '../assets/dbd4.png';
import dbd6 from '../assets/dbd6.png';
import dbd7 from '../assets/dbd7.png';
import dbdBanner1 from '../assets/dbdBanner1.png';
import dbdBanner2 from '../assets/dbdBanner2.png';
import dbdHeader from '../assets/dbd-header.png';

import deck1 from '../assets/deck1.png';
import deck2 from '../assets/deck2.png';
import deck3 from '../assets/deck3.png';
import deck4 from '../assets/deck4.png';
import deck5 from '../assets/deck5.png';
import deck6 from '../assets/deck6.png';
import deckHeader from '../assets/deck-header2.png';

import miniCover from '../assets/mini-cover.png';
import mini1 from '../assets/mini1.png';
import mini2 from '../assets/mini2.png';
import mini3 from '../assets/mini3.png';
import mini4 from '../assets/mini4.png';
import mini5 from '../assets/mini5.png';

import bathCover from '../assets/bathCover.png';
import bath1 from '../assets/bath1.png';
import bath2 from '../assets/bath2.png';
import bath3 from '../assets/bath3.png';
import bath4 from '../assets/bath4.png';
import bath5 from '../assets/bath5.png';
import bath6 from '../assets/bath6.png';
import bath7 from '../assets/bath7.png';
import bath8 from '../assets/bath8.png';
import bath9 from '../assets/bath9.png';

import avangeCover from '../assets/avange3.png';
import avange1 from '../assets/avange4.png'
import avange2 from '../assets/avange2.png'
import avange4 from '../assets/avange5.png'

import mistCover from '../assets/mistCover.png';
import mist1 from '../assets/mist1.png'
import mist2 from '../assets/mist2.png'
import mist3 from '../assets/mist3.png'
import mist4 from '../assets/mist4.png'

import dream0 from '../assets/dream0.png';
import dream1 from '../assets/dream1.png'
import dream2 from '../assets/dream2.png'
import dream3 from '../assets/dream3.png'
import dream4 from '../assets/dream4.png'

import golf1 from '../assets/golf1.png'
import golf2 from '../assets/golf2.png'
import golf3 from '../assets/golf3.png'
import golf4 from '../assets/golf4.png'

const demoProjects = [
  {
    id: 1,
    title: 'Locked Memories: Escape Room',
    description:
      'A psychological escape room developed in Unity where the player must solve clues to recover lost memories.',
    videos: [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ],
    images: [locked1, locked2, locked3, locked4, locked5],
    bannerImages: [locked1, locked2, locked3, locked4, locked5],
    coverImage: lockedHeader,
    tags: ['Escape Room', 'Puzzle', 'Single-player', 'Storytelling'],
    role: 'Game Designer, Programmer, Level Design',
    language: 'Unity, C#, Blender, Photoshop, Audacity',
    fullWidth: true,
  },
  {
    id: 2,
    title: 'ALPHA',
    description: 'A cooperative game based on endless rounds of enemy waves that increase in speed. Eliminate them to earn points, which you’ll need to unlock new paths, acquire weapons and perks, and find a way to survive while uncovering a mission hidden within a facility full of secrets.',
    videoUrl: '',
    images: [alpha2, alpha3, alpha4, alpha5, alpha6, alpha7, alpha8],
    bannerImages: [alpha2, alpha4, alpha5, alpha6],
    coverImage: alphaHeader,
    tags: ['TPS', 'Round-Based', 'Co-op', 'Multiplayer', 'Online'],
    role: 'Game Designer, Level Design, AI Systems, Programmer',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: true,
  },
  {
    id: 3,
    title: 'Craytacity',
    description: 'Inspired by the classic board game that consists of buying properties, Craytacity is an adaptation of this game to Crayta.',
    videoUrl: '',
    images: [craytacity1, craytacity2, craytacity3, craytacity4, craytacity5],
    bannerImages: [craytacityBanner1, craytacityBanner2, craytacityBanner3, craytacityBanner4],
    coverImage: craytacityHeader,
    tags: ['Board Game','Turn-Based Strategy','Multiplayer', 'AI'],
    role: 'Lead Developer, AI Systems, Network Programming',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: true,
  },
  {
    id: 4,
    title: 'BETA',
    description: 'A cooperative tower defense shooter. Loot buildings to get weapons and resources and use them to build and upgrade turrets. At night defend the tesla tower from the enemies.',
    videoUrl: '',
    images: [beta3, beta4, beta5, beta2, beta7, beta6],
    bannerImages: [beta4, beta2, beta6],
    coverImage: betaHeader,
    tags: ['TPS', 'Tower Defense', 'Co-op', 'AI', 'PvE', 'Online'],
    role: 'Lead Developer, Game Designer, AI Systems, UX Lead',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: true,
  },
  {
    id: 5,
    title: 'Deck Dungeon',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
    ],
    images: [deck1, deck2, deck3, deck4, deck5, deck6],
    bannerImages: [deck1, deck2, deck3, deck4, deck5],
    coverImage: deckHeader,
    tags: ['Dungeon Exploration', 'Board Game', 'Roguelite', 'Rol'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: true,
  },
  /*
  {
    id: 6,
    title: 'Escape Room - Dream Vacation',
    description: 'An action-adventure RPG post-apocalyptic zombie shooter sandbox. Clean the planet of zombies using weapons and a vehicle you can upgrade with resources looted on this unknown planet.',
    videos: [],
    images: [dream0, dream1, dream2, dream3, dream4],
    bannerImages: [dream1],
    coverImage: coreHeader,
    tags: ['TPS', 'Sandbox', 'Racing', 'AI', 'PvE', 'Game Jam'],
    role: 'Game Designer, UX Lead, Game Trailer Producer',
    language: 'LUA, Photoshop, Adobe Premiere',
    fullWidth: false,
  },
  {
    id: 7,
    title: 'Escape Room - The Bathroom',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
    ],
    images: [bathCover, bath2, bath3, bath4, bath5, bath6, bath7, bath8, bath9],
    bannerImages: [bath1],
    coverImage: bathCover,
    tags: ['Asymmetric Multiplayer', 'Survival', 'Stealth', 'Team Based'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: false,
  },
  {
    id: 8,
    title: 'Minimalist Puzzle',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
    ],
    images: [miniCover, mini1, mini2, mini3, mini4, mini5],
    bannerImages: [mini1, mini2, mini3, mini4, mini5],
    coverImage: miniCover,
    tags: ['Asymmetric Multiplayer', 'Survival', 'Stealth', 'Team Based'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: false,
  },
  {
    id: 9,
    title: 'Avenge Your Hero',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
    ],
    images: [avangeCover, avange2, avange4, avange1,],
    bannerImages: [dbdBanner1, dbdBanner2],
    coverImage: avangeCover,
    tags: ['Asymmetric Multiplayer', 'Survival', 'Stealth', 'Team Based'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: false,
  },
  {
    id: 10,
    title: 'Chronicles from Beyond',
    description: 'An action-adventure RPG post-apocalyptic zombie shooter sandbox. Clean the planet of zombies using weapons and a vehicle you can upgrade with resources looted on this unknown planet.',
    videos: [
    "https://www.youtube.com/embed/V5sxJU-1iks",
    "https://www.youtube.com/embed/m2maswQ0L9Y"
    ],
    images: [core1, core2, core3, core4, core5],
    bannerImages: [core1, core2, core3, core4],
    coverImage: coreHeader,
    tags: ['TPS', 'Sandbox', 'Racing', 'AI', 'PvE', 'Game Jam'],
    role: 'Game Designer, UX Lead, Game Trailer Producer',
    language: 'LUA, Photoshop, Adobe Premiere',
    fullWidth: false,
  },
   {
    id: 11,
    title: 'Into the Mist',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
    ],
    images: [mist2, mist1, mist3, mist4,],
    bannerImages: [mist3, mist4],
    coverImage: mistCover,
    tags: ['Asymmetric Multiplayer', 'Survival', 'Stealth', 'Team Based'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: false,
  },
  {
    id: 12,
    title: 'The Chased',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
    ],
    images: [dbd1, dbd3, dbd4, dbd7, dbd6],
    bannerImages: [dbdBanner1, dbdBanner2],
    coverImage: dbdHeader,
    tags: ['Asymmetric Multiplayer', 'Survival', 'Stealth', 'Team Based'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: false,
  },
  {
    id: 13,
    title: 'Mini Golf',
    description: 'An online asymmetric multiplayer survival horror video game. One-versus-four game in which one player takes on the role of a Killer and the other four play as Survivors',
    videos: [
      "https://www.youtube.com/embed/wwW0jUyIRHA",
    ],
    images: [golf1, golf2, golf3, golf4],
    bannerImages: [dbdBanner1, dbdBanner2],
    coverImage: dbdHeader,
    tags: ['Asymmetric Multiplayer', 'Survival', 'Stealth', 'Team Based'],
    role: 'Game Designer, UX Lead, Level Design',
    language: 'LUA, HTML, CSS, JS, Photoshop',
    fullWidth: false,
  }
  */
  
];

export default function Projects() {
  return (
    <section className={styles.container}>
      <HeroCarousel projects={demoProjects} />
      <div className={styles.projectContainer}>    
            {demoProjects.map((p) => (
              <Project key={p.id} project={p} />
            ))}
      </div>
    </section>
  );
}


