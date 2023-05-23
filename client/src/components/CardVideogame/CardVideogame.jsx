/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CardVideogame.module.css'

export default function CardVideogame ({ id, name, released, background_image, rating_top, platforms, genres }) {
  return (
    <Link to={`/details/${id}`} className={styles.linkCard}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={background_image} alt='game' />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>{name}</h3>
          </div>
          <div className={styles.body}>
            <p><span>Released Date:</span> {released}</p><br />
            <p><span>Rating Top:</span>{rating_top}</p><br />
            <p><span>Genres:</span>{`${genres[0]}, ${genres[1] || '...'}, ${genres[2] || '...'}`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
