import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterVideogamesOrder } from '../../redux/actions'

import styles from './ListAlphabeticalOrder.module.css'

export default function ListAlphabeticalOrder () {
  const games = useSelector((state) => state.videogames)
  const dispatch = useDispatch()

  function handleChange (event) {
    const selectOption = event.target.value
    dispatch(filterVideogamesOrder(selectOption))
  }

  return (
    <div className={styles.listAlphabetical}>
      <select name='selectAlphabeth' onChange={handleChange} className={styles.selectAlphabetical}>
        <option value='random' selected>Random</option>
        <option value='a-z'>A - Z</option>
        <option value='z-a'>Z - A</option>
      </select>
      <button onClick={console.log(games)}>State Games</button>
    </div>
  )
}
