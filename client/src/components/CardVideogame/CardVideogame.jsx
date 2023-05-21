/* eslint-disable camelcase */
import React from 'react'

import styles from './CardVideogame.module.css'

export default function CardDiet ({ id, slug, name, origin, released, background_image, rating, rating_top, platforms, genres, tags }) {
  return (
    <div className={styles.caja} key={id}>
      <div className={styles.containerImage}>
        <img src={background_image} alt='game' />
      </div>
      <h3>{name}</h3>
    </div>
  )
}
