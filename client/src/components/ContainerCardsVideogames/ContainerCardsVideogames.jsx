/* eslint-disable camelcase */
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from '../../redux/actions'

import styles from './ContainerCardsVideogames.module.css'
import SearchBar from '../SearchBar/SearchBar'
import CardVideogame from '../CardVideogame/CardVideogame'

export default function ContainerCardsDiet () {
  const dispatch = useDispatch()
  const videogames = useSelector((state) => state.videogames)

  useEffect(() => {
    dispatch(getVideogames())
    console.info(videogames)
  }, [])

  return (
    <section className={styles.videogames}>
      <SearchBar />
      <div className={styles.content}>
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
