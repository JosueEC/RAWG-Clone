//! react-router-dom imports
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//! routes constants
import { ROUTER } from '../consts.js'

//! components import
import ToolBar from './components/ToolBar/ToolBar.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Backdrop from './components/Backdrop/Backdrop.jsx'

//! pages imports
import Landing from './pages/Landing/Landing.jsx'
import Home from './pages/Home/Home.jsx'
import Details from './pages/Details/Details.jsx'
import FormNewVideogame from './pages/FormNewVideogame/FormNewVideogame.jsx'

import './App.css'

function App () {
  const [sidebar, setSidebar] = useState(false)

  function toggleSidebar () {
    setSidebar((prevState) => !prevState)
  }
  return (
    <>
      <ToolBar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />

      <Routes>
        <Route
          path={ROUTER.LANDING}
          element={<Landing />}
        />
        <Route
          path={ROUTER.HOME}
          element={<Home />}
        />
        <Route
          path={ROUTER.DETAILS}
          element={<Details />}
        />
        <Route
          path={ROUTER.FORM}
          element={<FormNewVideogame />}
        />

      </Routes>
    </>
  )
}

export default App
