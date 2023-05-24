import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API } from '../../../consts'

import styles from './Details.module.css'

export default function Details () {
  const [videogame, setVideogame] = useState()
  const { videogameID } = useParams()

  useEffect(() => {
    fetch(`${API.DOMAIN}/videogames/${videogameID}`)
      .then((response) => response.json())
      .then((results) => {
        console.info('fetching-details-videogame')
        setVideogame(results.data)
      })
  }, [])

  return (
    <section className={styles.containerDetails}>
      {
        (videogame)
          ? (
            <div className={styles.content}>
              <div className={styles.columnInfo}>
                <h2 className={styles.name}>{videogame.name}</h2>
                <label className={styles.about}>About</label>
                <p className={styles.description}>{videogame.description_raw}</p>
                <div className={styles.properties}>
                  <div className={styles.columnProperties}>
                    <div className={styles.itemProperty}>
                      <label>Platforms</label>
                      <p>{videogame.platforms.join(', ')}</p>
                    </div>
                    <div className={styles.itemProperty}>
                      <label>Genres</label>
                      <p>{videogame.genres.join(', ')}</p>
                    </div>
                  </div>
                  <div className={styles.columnProperties}>
                    <div className={styles.itemProperty}>
                      <label>Release Date</label>
                      <p>{videogame.released}</p>
                    </div>
                    <div className={styles.itemProperty}>
                      <label>Rating</label>
                      <p>{videogame.rating}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.itemProperty}>
                  <label>Tags</label>
                  <p>{videogame.tags.join(', ')}</p>
                </div>
                <div className={styles.itemProperty}>
                  <label>Website</label>
                  <p>{videogame.website}</p>
                </div>
              </div>
              <div className={styles.columnImages}>
                <div className={styles.containerImage}>
                  <img src={videogame.background_image} alt='game' />
                </div>
              </div>
            </div>
            )
          : (
            <h2>Loading...</h2>
            )
      }
    </section>
  )
}
