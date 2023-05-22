/* eslint-disable no-undef */
import { React, useState } from 'react'

import styles from './FormNewVideogame.module.css'
import imgFormKratos from './assets/logo-form.png'

export default function FormRecipe () {
  const [dataForm, setDataForm] = useState({
    name: '',
    slug: '',
    released: '',
    background_image: '',
    website: '',
    rating: 0,
    rating_top: 0,
    movies_count: 0,
    ratings_count: 0,
    platforms: [],
    genres: [],
    tags: [],
    description_raw: ''
  })

  function handleChange (event) {
    const { key, value } = event.target

    setDataForm({
      ...dataForm,
      [key]: value
    })
    console.log(dataForm)
  }

  return (
    <section className={styles.formRecipe}>
      <div className={styles.image}>
        <img src={imgFormKratos} alt='Kratos' />
      </div>
      <form>
        <h1 className={styles.heading}>New Videogame</h1>
        <div className={styles.inputcaja}>
          <input type='text' name='name' id='name' onChange={handleChange} required />
          <label htmlFor='name'>Name Videogame</label>
        </div>
        <div className={styles.inputcaja}>
          <input type='text' name='background_image' id='background_image' onChange={handleChange} required />
          <label htmlFor='background_image'>Image</label>
        </div>
        <div className={styles.inputcaja}>
          <input type='text' name='website' id='website' onChange={handleChange} required />
          <label htmlFor='website'>Website</label>
        </div>
        <div className={styles.inputcaja}>
          <input type='text' name='released' id='released' onChange={handleChange} required />
          <label htmlFor='released'>Released</label>
        </div>

        <div className={styles.containerCheckbox}>
          <h3>Platforms</h3>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='pc' value={4} />
              <label htmlFor='pc' className={styles.labelCheck}>PC</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='playStation5' value={187} />
              <label htmlFor='playStation5' className={styles.labelCheck}>Play Station 5</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='playStation4' value={18} />
              <label htmlFor='playStation4' className={styles.labelCheck}>Play Station 4</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='xboxOne' value={1} />
              <label htmlFor='xboxOne' className={styles.labelCheck}>Xbox One</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='xboxSeriesSX' value={186} />
              <label htmlFor='xboxSeriesSX' className={styles.labelCheck}>Xbox Series S/X</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='nintendoSwitch' value={7} />
              <label htmlFor='nintendoSwitch' className={styles.labelCheck}>Nintendo Switch</label>
            </div>
          </div>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='ios' value={3} />
              <label htmlFor='ios' className={styles.labelCheck}>IOS</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='android' value={21} />
              <label htmlFor='android' className={styles.labelCheck}>Android</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='nintendo3DS' value={8} />
              <label htmlFor='nintendo3DS' className={styles.labelCheck}>Nintendo 3DS</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='psVita' value={19} />
              <label htmlFor='psVita' className={styles.labelCheck}>PS Vita</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='wiiU' value={10} />
              <label htmlFor='wiiU' className={styles.labelCheck}>Wii U</label>
            </div>
          </div>
        </div>

        <div className={styles.containerCheckbox}>
          <h3>Genres</h3>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='action' value={4} />
              <label htmlFor='action' className={styles.labelCheck}>Action</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='adventure' value={3} />
              <label htmlFor='adventure' className={styles.labelCheck}>Adventure</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='rpg' value={5} />
              <label htmlFor='rpg' className={styles.labelCheck}>RPG</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='strategy' value={10} />
              <label htmlFor='strategy' className={styles.labelCheck}>Strategy</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='shooter' value={2} />
              <label htmlFor='shooter' className={styles.labelCheck}>Shooter</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='simulation' value={14} />
              <label htmlFor='simulation' className={styles.labelCheck}>Simulation</label>
            </div>
          </div>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='puzzle' value={7} />
              <label htmlFor='puzzle' className={styles.labelCheck}>Puzzle</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='arcade' value={11} />
              <label htmlFor='arcade' className={styles.labelCheck}>Arcade</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='racing' value={1} />
              <label htmlFor='racing' className={styles.labelCheck}>Racing</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='sports' value={15} />
              <label htmlFor='sports' className={styles.labelCheck}>Sports</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='fighting' value={6} />
              <label htmlFor='fighting' className={styles.labelCheck}>Fighting</label>
            </div>
          </div>
        </div>

        <div className={styles.containerCheckbox}>
          <h3>Tags</h3>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='singlePlayer' value={31} />
              <label htmlFor='singlePlayer' className={styles.labelCheck}>Single Player</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='steamAchievements' value={40847} />
              <label htmlFor='steamAchievements' className={styles.labelCheck}>Steam Achievements</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='multiplayer' value={7} />
              <label htmlFor='multiplayer' className={styles.labelCheck}>Multiplayer</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='fullControllerSupport' value={4836} />
              <label htmlFor='fullControllerSupport' className={styles.labelCheck}>Full Controller Support</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='atmospheric' value={13} />
              <label htmlFor='atmospheric' className={styles.labelCheck}>Atmospheric</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='steamCloud' value={4849} />
              <label htmlFor='steamCloud' className={styles.labelCheck}>Steam Cloud</label>
            </div>
          </div>
        </div>

        <div className={styles.inputcaja}>
          <textarea required name='about' id='about' cols={30} rows={10} onChange={handleChange} />
          <label htmlFor='about'>About the Game</label>
        </div>

        <button type='submit' className={styles.btn}>Create Videogame</button>
      </form>
    </section>
  )
}
