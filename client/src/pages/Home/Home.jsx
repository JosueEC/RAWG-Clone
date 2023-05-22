import React from 'react'

import ContainerCardsVideogames from '../../components/ContainerCardsVideogames/ContainerCardsVideogames'
import CardVideogame from '../../components/CardVideogame/CardVideogame'

import styles from './Home.module.css'

export default function Home () {
  return (
    <div className={styles.home}>
      <ContainerCardsVideogames>
        <CardVideogame />
      </ContainerCardsVideogames>
    </div>
  )
}
