//! react-router-dom imports
import { Routes, Route } from 'react-router-dom'

//! routes constants
import { ROUTER } from '../consts.js'

//! components import
import ToolBar from './components/ToolBar/ToolBar.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Backdrop from './components/Backdrop/Backdrop.jsx'

//! pages imports
import Landing from './pages/Landing/Landing.jsx'

import './App.css'
import { useState } from 'react'

function App () {
  const [sidebar, setSidebar] = useState(false)

  function toggleSidebar () {
    setSidebar((prevState) => !prevState)
  }
  return (
    <>
      <ToolBar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <SideBar sidebar={sidebar} />
      <Routes>
        <Route
          path={ROUTER.LANDING}
          element={<Landing />}
        />
        <Route
          path={ROUTER.HOME}
          element={<h2>Home</h2>}
        />
        <Route
          path={ROUTER.DETAILS}
          element={<h2>Details</h2>}
        />
        <Route
          path={ROUTER.FORM}
          element={<h2>Form</h2>}
        />

      </Routes>
    </>
  )
}

export default App
