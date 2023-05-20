import React from 'react'

import styles from './ContainerCardsVideogames.module.css'
import CardVideogame from '../CardVideogame/CardVideogame'

export default function ContainerCardsDiet () {
  return (
    <section className={styles.detalles} id='detalles'>
      <h1 className={styles.heading}>RECIPES</h1>
      <div className={styles.cajaContenedor}>
        <CardVideogame />
      </div>
    </section>
  )
}
