import React from 'react'

import { useDispatch } from 'react-redux'
import { filterGamesByPlatform } from '../../redux/actions'

import { Link } from 'react-router-dom'
import { ROUTER } from '../../../consts'

import './SideBar.css'

export default function SideBar ({ sidebar }) {
  const dispatch = useDispatch()

  function handleClick (event) {
    console.info(event.target.id)
    dispatch(filterGamesByPlatform(event.target.id))
  }

  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <Link to={ROUTER.LANDING}><li><i className='fa-solid fa-house-user' />Landing</li></Link>
      <Link to={ROUTER.HOME}><li>Home</li></Link>
      <label>Platforms</label>
      <li id='pc' onClick={handleClick}>PC</li>
      <li id='macos' onClick={handleClick}>MacOS</li>
      <li id='playstation4' onClick={handleClick}>PlayStation 4</li>
      <li id='xbox-one' onClick={handleClick}>Xbox One</li>
      <li id='nintendo-switch' onClick={handleClick}>Nintendo Switch</li>
      <li id='ios' onClick={handleClick}>IOS</li>
      <li id='android' onClick={handleClick}>Android</li>
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
