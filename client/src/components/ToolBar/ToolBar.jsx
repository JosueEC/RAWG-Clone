import React from 'react'

import styles from './ToolBar.module.css'

export default function ToolBar ({ openSidebar }) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.burger} onClick={openSidebar}>
        <i className='fas fa-bars' />
      </div>
      <div className='title'>GAMEPEDIA</div>
    </div>
  )
}
