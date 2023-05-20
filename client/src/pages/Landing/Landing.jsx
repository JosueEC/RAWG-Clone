//! react imports
import React from 'react'

//! react-router-dom imports
import { Link } from 'react-router-dom'
import { ROUTER } from '../../../consts'

//! components imports
import inicio from './assets/logo-landing.png'
import styles from './Landing.module.css'

//! component
export default function Landing () {
  return (
    <section className={styles.containerLanding}>
      <div className={styles.content}>
        <h3><span className={styles.marked}>GAME</span>PEDIA</h3>
        <span>all your games.<br /> <span className={styles.marked}>one place.</span></span>
        <p>Explore more than 5,000 videogames of all kinds.<br /> Filter by name, rating, genre, platform and even <br /> create your own card game.</p>
        <Link to={ROUTER.HOME}><button className={styles.buttonStart}>LET'S START</button></Link>
      </div>
      <div className={styles.image}>
        <img src={inicio} alt='Fondo de Inicio' />
      </div>
    </section>
  )
}
