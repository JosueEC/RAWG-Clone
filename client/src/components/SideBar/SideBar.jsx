import React from 'react'

import { useDispatch } from 'react-redux'
import { filterGamesByPlatform, filterGamesByGenre, filterGamesByOrigin } from '../../redux/actions'

import { Link } from 'react-router-dom'
import { ROUTER } from '../../../consts'

import './SideBar.css'

export default function SideBar ({ sidebar }) {
  const dispatch = useDispatch()

  function handleClickPlatform (event) {
    console.info(event.target.id)
    dispatch(filterGamesByPlatform(event.target.id))
  }

  function handleClickGenre (event) {
    console.info(event.target.id)
    dispatch(filterGamesByGenre(event.target.id))
  }

  function handleClickOrigin (event) {
    console.info(event.target.id)
    dispatch(filterGamesByOrigin(event.target.id))
  }

  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
      <Link to={ROUTER.LANDING}><li><i className='fa-solid fa-house-user' />Landing</li></Link>
      <Link to={ROUTER.HOME}><li>Home</li></Link>
      <Link to={ROUTER.FORM}><li>New Videogame</li></Link>
      <br />
      <label>Platforms</label>
      <li id='pc' onClick={handleClickPlatform}>PC</li>
      <li id='macos' onClick={handleClickPlatform}>MacOS</li>
      <li id='playstation4' onClick={handleClickPlatform}>PlayStation 4</li>
      <li id='xbox-one' onClick={handleClickPlatform}>Xbox One</li>
      <li id='nintendo-switch' onClick={handleClickPlatform}>Nintendo Switch</li>
      <li id='ios' onClick={handleClickPlatform}>IOS</li>
      <li id='android' onClick={handleClickPlatform}>Android</li>
      <br />
      <label>Genres</label>
      <li id='action' onClick={handleClickGenre}>Action</li>
      <li id='strategy' onClick={handleClickGenre}>Strategy</li>
      <li id='rpg' onClick={handleClickGenre}>RPG</li>
      <li id='shooter' onClick={handleClickGenre}>Shooter</li>
      <li id='adventure' onClick={handleClickGenre}>Adventure</li>
      <li id='puzzle' onClick={handleClickGenre}>Puzzle</li>
      <li id='racing' onClick={handleClickGenre}>Racing</li>
      <li id='sports' onClick={handleClickGenre}>Sports</li>
      <br />
      <label>Origin</label>
      <li id='database' onClick={handleClickOrigin}>Database</li>
      <li id='rawg' onClick={handleClickOrigin}>RAWG</li>
    </div>
  )
}
