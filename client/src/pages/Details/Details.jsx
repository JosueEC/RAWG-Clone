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
    <section className={styles.container}>
      {
        videogame
          ? (
            <div className={styles.box}>
              <div className={styles.images}>
                <div className={styles.imgHolder}>
                  <img src={videogame.background_image} alt='recipe' />
                </div>
                <div className={styles.containerSummary}>
                  <span className={styles.heading}>About</span>
                  <p>{videogame.description_raw}</p>
                </div>
              </div>
              <div className={styles.basicInfo}>
                <span className={styles.heading}>{videogame.name}</span>
              </div>
              <div className={styles.description}>
                <ul className={styles.features}>
                  <li><i className='fa-solid fa-circle-check' />Released: {videogame.released}</li>
                  <li><i className='fa-solid fa-circle-check' />WebSite: {videogame.website}</li>
                  <li><i className='fa-solid fa-circle-check' />Rating: {videogame.rating}</li>
                  <li><i className='fa-solid fa-circle-check' />Rating Top: {videogame.rating_top}</li>
                  <li><i className='fa-solid fa-circle-check' />Platforms: {videogame.platforms.join(', ')}</li>
                  <li><i className='fa-solid fa-circle-check' />Genres: {videogame.genres.join(', ')}</li>
                  <li><i className='fa-solid fa-circle-check' />Tags: {videogame.tags.join(', ')}</li>
                </ul>
                {/* <span className={styles.heading}>Instructions:</span>
                <p dangerouslySetInnerHTML={{ __html: videogame.instructions }} /> */}
              </div>
            </div>
            )
          : (
            <h3>Loading...</h3>
            )
      }
    </section>
  )
}
