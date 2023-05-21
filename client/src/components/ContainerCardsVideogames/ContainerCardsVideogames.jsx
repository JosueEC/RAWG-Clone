/* eslint-disable camelcase */
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from '../../redux/actions'

import styles from './ContainerCardsVideogames.module.css'
import CardVideogame from '../CardVideogame/CardVideogame'

export default function ContainerCardsDiet () {
  const dispatch = useDispatch()
  const videogames = useSelector((state) => state.videogames)

  useEffect(() => {
    dispatch(getVideogames())
  }, [])

  return (
    <section className={styles.detalles} id='detalles'>
      <h1 className={styles.heading}>Videogames</h1>
      <div className={styles.cajaContenedor}>
        {
          videogames
            ? (
                videogames.map(({ id, slug, name, origin, released, background_image, rating, rating_top, platforms, genres, tags }) => {
                  return (
                    <CardVideogame
                      key={id}
                      id={id}
                      slug={slug}
                      name={name}
                      origin={origin}
                      released={released}
                      background_image={background_image}
                      rating={rating}
                      rating_top={rating_top}
                      platforms={platforms}
                      genres={genres}
                      tags={tags}
                    />
                  )
                })
              )
            : (
              <h2>LOADING...</h2>
              )
        }
      </div>
    </section>
  )
}
