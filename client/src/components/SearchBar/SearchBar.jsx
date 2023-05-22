import { React } from 'react'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search 849,600 games' />
        <button name='btnSearch' className={styles.btn}>Search</button>
        <button className={styles.btn} name='btnAllRecipes'>All Recipes</button>
      </div>
    </div>
  )
}
