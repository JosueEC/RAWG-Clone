/* eslint-disable no-undef */
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postVideogame } from '../../redux/actions'

import styles from './FormNewVideogame.module.css'

function validateDataForm (state, errorsState) {
  const errors = { ...errorsState }

  // const regexText = /[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
  const regexURL = /^(https?:\/\/)/
  const regexReleased = /^\d{4}-\d{2}-\d{2}$/

  if (state.name === '') {
    errors.name = ''
  } else if (state.name.length < 2 || state.name.length > 50) {
    errors.name = 'The summary should be between 2 and 500 characters in length'
  } else {
    errors.name = ''
  }

  if (state.released === '') {
    errors.released = ''
  } else if (!regexReleased.test(state.released)) {
    errors.released = 'The date format should be YYYY-MM-DD'
  } else {
    errors.released = ''
  }

  if (state.background_image === '') {
    errors.background_image = ''
  } else if (!regexURL.test(state.background_image)) {
    errors.background_image = 'Enter a valid URL'
  } else {
    errors.background_image = ''
  }

  if (state.website === '') {
    errors.website = ''
  } else if (!regexURL.test(state.website)) {
    errors.website = 'Enter a valid URL'
  } else {
    errors.website = ''
  }

  if (state.platforms.length === 0) {
    errors.platforms = 'You should select at least one platform'
  } else {
    errors.platforms = ''
  }

  if (state.genres.length === 0) {
    errors.genres = 'You should select at least one genre'
  } else {
    errors.genres = ''
  }

  if (state.description_raw === '') {
    errors.description_raw = ''
  } else if (state.description_raw.length < 10 || state.description_raw.length > 500) {
    errors.description_raw = 'The summary should be between 10 and 500 characters in length'
  } else {
    errors.description_raw = ''
  }

  return errors
}

export default function FormRecipe () {
  const dispatch = useDispatch()
  const [platforms, setPlatforms] = useState([])
  const [genres, setGenres] = useState([])
  const [tags, setTags] = useState([])
  const [dataForm, setDataForm] = useState({
    name: '',
    released: '',
    background_image: '',
    website: '',
    platforms: [],
    genres: [],
    tags: [],
    description_raw: ''
  })
  const [dataFormErrors, setDataFormErrors] = useState({
    name: '',
    released: '',
    background_image: '',
    website: '',
    platforms: [],
    genres: [],
    description_raw: ''
  })

  function handleChange (event) {
    const { name, value } = event.target

    setDataForm({
      ...dataForm,
      platforms,
      genres,
      tags,
      [name]: value
    })
    setDataFormErrors(validateDataForm({ ...dataForm, [name]: value }, dataFormErrors))
  }

  function handleCheckPlatform (event) {
    const { value, checked } = event.target

    if (checked) {
      setPlatforms((previousState) => [...previousState, value])
    } else {
      setPlatforms((previousState) => previousState.filter((platformID) => platformID !== value))
    }
  }

  function handleCheckGenre (event) {
    const { value, checked } = event.target

    if (checked) {
      setGenres((previousState) => [...previousState, value])
    } else {
      setGenres((previousState) => {
        return previousState.filter((genreID) => genreID !== value)
      })
    }
  }

  function handleCheckTag (event) {
    const { value, checked } = event.target

    if (checked) {
      setTags((previousState) => [...previousState, value])
    } else {
      setTags((previousState) => {
        return previousState.filter((tagID) => tagID !== value)
      })
    }
  }

  function handleSubmit (event) {
    event.preventDefault()

    if (dataFormErrors.name !== '' ||
    dataFormErrors.released !== '' ||
    dataFormErrors.background_image !== '' ||
    dataFormErrors.website !== '' ||
    dataFormErrors.platforms !== '' ||
    dataFormErrors.genres !== '' ||
    dataFormErrors.description_raw !== '') {
      alert('There are incorrect fields')
    } else {
      dispatch(postVideogame(dataForm))
      setDataForm({
        name: '',
        released: '',
        background_image: '',
        website: '',
        platforms: [],
        genres: [],
        tags: [],
        description_raw: ''
      })
    }
  }

  return (
    <section className={styles.formVideogame}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerInputs}>
          <div className={styles.inputcaja}>
            <input type='text' name='name' id='name' onBlur={handleChange} required />
            <label htmlFor='name'>Name Videogame</label>
          </div>
          {
            (dataFormErrors.name)
              ? (<label className={styles.errorLabel}>{dataFormErrors.name}</label>)
              : (<></>)
          }
          <div className={styles.inputcaja}>
            <input type='text' name='background_image' id='background_image' onBlur={handleChange} required />
            <label htmlFor='background_image'>Image</label>
          </div>
          {
            (dataFormErrors.background_image)
              ? (<label className={styles.errorLabel}>{dataFormErrors.background_image}</label>)
              : (<></>)
          }
          <div className={styles.inputcaja}>
            <input type='text' name='website' id='website' onBlur={handleChange} required />
            <label htmlFor='website'>Website</label>
          </div>
          {
          (dataFormErrors.website)
            ? (<label className={styles.errorLabel}>{dataFormErrors.website}</label>)
            : (<></>)
        }
          <div className={styles.inputcaja}>
            <input type='text' name='released' id='released' onBlur={handleChange} required />
            <label htmlFor='released'>Released</label>
          </div>
          {
          (dataFormErrors.released)
            ? (<label className={styles.errorLabel}>{dataFormErrors.released}</label>)
            : (<></>)
        }
          <div className={styles.inputcaja}>
            <textarea required name='description_raw' id='description_raw' cols={30} rows={10} onBlur={handleChange} />
            <label htmlFor='description_raw'>About the Game</label>
          </div>
          {
          (dataFormErrors.description_raw)
            ? (<label className={styles.errorLabel}>{dataFormErrors.description_raw}</label>)
            : (<></>)
        }
        </div>
        <br />
        <label className={styles.labelCheckbox}>Platforms</label>
        <div className={styles.containerCheckbox}>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='pc' value={4} onBlur={handleCheckPlatform} />
              <label htmlFor='pc' className={styles.labelCheck}>PC</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='playStation5' value={187} onBlur={handleCheckPlatform} />
              <label htmlFor='playStation5' className={styles.labelCheck}>Play Station 5</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='playStation4' value={18} onChange={handleCheckPlatform} />
              <label htmlFor='playStation4' className={styles.labelCheck}>Play Station 4</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='xboxOne' value={1} onChange={handleCheckPlatform} />
              <label htmlFor='xboxOne' className={styles.labelCheck}>Xbox One</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='xboxSeriesSX' value={186} onChange={handleCheckPlatform} />
              <label htmlFor='xboxSeriesSX' className={styles.labelCheck}>Xbox Series S/X</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='nintendoSwitch' value={7} onChange={handleCheckPlatform} />
              <label htmlFor='nintendoSwitch' className={styles.labelCheck}>Nintendo Switch</label>
            </div>
          </div>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='ios' value={3} onChange={handleCheckPlatform} />
              <label htmlFor='ios' className={styles.labelCheck}>IOS</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='android' value={21} onChange={handleCheckPlatform} />
              <label htmlFor='android' className={styles.labelCheck}>Android</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='nintendo3DS' value={8} onChange={handleCheckPlatform} />
              <label htmlFor='nintendo3DS' className={styles.labelCheck}>Nintendo 3DS</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='psVita' value={19} onChange={handleCheckPlatform} />
              <label htmlFor='psVita' className={styles.labelCheck}>PS Vita</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='wiiU' value={10} onChange={handleCheckPlatform} />
              <label htmlFor='wiiU' className={styles.labelCheck}>Wii U</label>
            </div>
          </div>
        </div>
        {
          (dataFormErrors.platforms)
            ? (<label className={styles.errorLabel}>{dataFormErrors.platforms}</label>)
            : (<></>)
        }

        <br />
        <label className={styles.labelCheckbox}>Genres</label>
        <div className={styles.containerCheckbox}>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='action' value={4} onChange={handleCheckGenre} />
              <label htmlFor='action' className={styles.labelCheck}>Action</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='adventure' value={3} onChange={handleCheckGenre} />
              <label htmlFor='adventure' className={styles.labelCheck}>Adventure</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='rpg' value={5} onChange={handleCheckGenre} />
              <label htmlFor='rpg' className={styles.labelCheck}>RPG</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='strategy' value={10} onChange={handleCheckGenre} />
              <label htmlFor='strategy' className={styles.labelCheck}>Strategy</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='shooter' value={2} onChange={handleCheckGenre} />
              <label htmlFor='shooter' className={styles.labelCheck}>Shooter</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='simulation' value={14} onChange={handleCheckGenre} />
              <label htmlFor='simulation' className={styles.labelCheck}>Simulation</label>
            </div>
          </div>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='puzzle' value={7} onChange={handleCheckGenre} />
              <label htmlFor='puzzle' className={styles.labelCheck}>Puzzle</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='arcade' value={11} onChange={handleCheckGenre} />
              <label htmlFor='arcade' className={styles.labelCheck}>Arcade</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='racing' value={1} onChange={handleCheckGenre} />
              <label htmlFor='racing' className={styles.labelCheck}>Racing</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='sports' value={15} onChange={handleCheckGenre} />
              <label htmlFor='sports' className={styles.labelCheck}>Sports</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='fighting' value={6} onChange={handleCheckGenre} />
              <label htmlFor='fighting' className={styles.labelCheck}>Fighting</label>
            </div>
          </div>
        </div>
        {
          (dataFormErrors.genres)
            ? (<label className={styles.errorLabel}>{dataFormErrors.genres}</label>)
            : (<></>)
        }

        <br />
        <label className={styles.labelCheckbox}>Tags</label>
        <div className={styles.containerCheckbox}>
          <div className={styles.containerColumn}>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='singlePlayer' value={31} onChange={handleCheckTag} />
              <label htmlFor='singlePlayer' className={styles.labelCheck}>Single Player</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='steamAchievements' value={40847} onChange={handleCheckTag} />
              <label htmlFor='steamAchievements' className={styles.labelCheck}>Steam Achievements</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='multiplayer' value={7} onChange={handleCheckTag} />
              <label htmlFor='multiplayer' className={styles.labelCheck}>Multiplayer</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='fullControllerSupport' value={40836} onChange={handleCheckTag} />
              <label htmlFor='fullControllerSupport' className={styles.labelCheck}>Full Controller Support</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='atmospheric' value={13} onChange={handleCheckTag} />
              <label htmlFor='atmospheric' className={styles.labelCheck}>Atmospheric</label>
            </div>
            <div className={styles.itemCheck}>
              <input type='checkbox' id='steamCloud' value={40849} onChange={handleCheckTag} />
              <label htmlFor='steamCloud' className={styles.labelCheck}>Steam Cloud</label>
            </div>
          </div>
        </div>
        <button type='submit' className={styles.btn}>Create Videogame</button>
      </form>
    </section>
  )
}
