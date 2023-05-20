import React from 'react'

import './SideBar.css'

export default function SideBar ({ sidebar }) {
  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <li><i className='fa-solid fa-house-user' />Home</li>
      <li>Products</li>
      <li>Carrer</li>
      <li>Contact Us</li>
      <li>About Us</li>
    </div>
  )
}
