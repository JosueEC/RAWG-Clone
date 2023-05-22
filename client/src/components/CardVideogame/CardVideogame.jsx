/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CardVideogame.module.css'

export default function CardVideogame ({ id, name, released, background_image, platforms, genres }) {
  return (
    <Link to={`/details/${id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={background_image} alt='game' />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>{name}</h3>
          </div>
          <div className={styles.body}>
            <p>{released}</p><br />
            <p>{platforms.join(', ')}</p><br />
            <p>{genres.join(', ')}</p>
          </div>
        </div>
        <div className={styles.button}>
          <button>
            <a>See Details</a>
          </button>
        </div>
      </div>
    </Link>
  )
}
