import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideogamesByName, getVideogames } from '../../redux/actions'

import ListRatingOrder from '../ListRatingOrder/ListRatingOrder'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  function handleChange (event) {
    const queryText = event.target.value
    setQuery(queryText)
  }

  function handleClick (event) {
    const nameButton = event.target.name
    if (nameButton === 'btnSearch') {
      dispatch(getVideogamesByName(query))
    } else {
      dispatch(getVideogames())
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search 849,600 games' onChange={handleChange} />
        <button name='btnSearch' className={styles.button} onClick={handleClick}>Search</button>
        <button name='btnAllVideogames' className={styles.button} onClick={handleClick}>All Videogames</button>
      </div>
      <div className={styles.filterLists}>
        <ListRatingOrder />
      </div>
    </div>
  )
}
