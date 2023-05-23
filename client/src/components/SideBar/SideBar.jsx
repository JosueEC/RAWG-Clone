import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTER } from '../../../consts'

import './SideBar.css'

export default function SideBar ({ sidebar }) {
  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <Link to={ROUTER.LANDING}><li><i className='fa-solid fa-house-user' />Landing</li></Link>
      <Link to={ROUTER.HOME}><li>Home</li></Link>
      <label>Platforms</label>
      <li>PC</li>
      <li>PlayStation 4</li>
      <li>Xbox One</li>
      <li>Nintendo Switch</li>
      <li>IOS</li>
      <li>Android</li>
      <label>Genres</label>
      <li>Action</li>
      <li>Strategy</li>
      <li>RPG</li>
      <li>Shooter</li>
      <li>Adventure</li>
      <li>Puzzle</li>
      <li>Racing</li>
      <li>Sports</li>
    </div>
  )
}
