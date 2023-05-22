import { React, useState } from 'react'
import { getVideogamesByName } from '../../redux/actions'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  const [query, setQuery] = useState('')

  function handleChange (event) {
    const textQuery = event.target.value
    setQuery(textQuery)
  }

  function handleClick (event) {
    getVideogamesByName(query)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search 849,600 games' onChange={handleChange} />
        <button name='btnSearch' className={styles.button} onClick={handleClick}>Search</button>
        <button className={styles.button} name='btnAllRecipes'>All Recipes</button>
      </div>
    </div>
  )
}
