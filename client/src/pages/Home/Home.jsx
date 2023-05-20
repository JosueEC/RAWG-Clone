import React from 'react'

import ContainerCardsVideogames from '../../components/ContainerCardsVideogames/ContainerCardsVideogames'
import CardVideogame from '../../components/CardVideogame/CardVideogame'

import styles from './Home.module.css'

export default function Home () {
  return (
    <section className={styles.home}>
      <h2 className={styles.titulo}>Vista del Home</h2>
      <ContainerCardsVideogames>
        <CardVideogame />
      </ContainerCardsVideogames>
    </section>
  )
}
