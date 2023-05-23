import React from 'react'

import styles from './ListAlphabeticalOrder.module.css'

export default function ListAlphabeticalOrder () {
  return (
    <div className={styles.listAlphabetical}>
      <select name='select' className={styles.selectAlphabetical}>
        <option value='random' selected>Random</option>
        <option value='a-z'>A - Z</option>
        <option value='z-a'>Z - A</option>
      </select>
    </div>
  )
}
