import React from 'react'

import styles from './CardVideogame.module.css'

import image from './assets/gluten-free.jpg'

export default function CardDiet () {
  return (
    <div className={styles.caja} key={1}>
      <div className={styles.containerImage}>
        <img src={image} alt='food' />
      </div>
      <h3>Tarjeta Videogame</h3>
    </div>
  )
}
