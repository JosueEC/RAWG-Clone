import React from 'react'
import { useDispatch } from 'react-redux'
import { orderGamesByRatingAsc, orderGamesByRatingDesc, orderGamesRandom } from '../../redux/actions'

import styles from './ListRatingOrder.module.css'

export default function ListRatingOrder () {
  const dispatch = useDispatch()

  function handleChange (event) {
    const orderSelected = event.target.value
    switch (orderSelected) {
      case 'rating+':
        dispatch(orderGamesByRatingAsc())
        break
      case 'rating-':
        dispatch(orderGamesByRatingDesc())
        break
      default:
        dispatch(orderGamesRandom())
        break
    }
  }

  return (
    <select name='selectAlphabeth' onChange={handleChange} className={styles.selectAlphabetical} defaultValue='random'>
      <option value='random'>Random</option>
      <option value='rating+'>Rating +</option>
      <option value='rating-'>Rating -</option>
    </select>
  )
}
