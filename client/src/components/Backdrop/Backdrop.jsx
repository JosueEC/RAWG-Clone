import React from 'react'

import './Backdrop.css'

export default function Backdrop ({ sidebar, closeSidebar }) {
  return (
    <div className={sidebar ? 'backdrop backdrop--open' : 'backdrop'} onClick={closeSidebar} />
  )
}
