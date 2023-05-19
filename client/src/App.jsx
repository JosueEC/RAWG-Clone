//! react-router-dom imports
import { Routes, Route } from 'react-router-dom'

//! routes constants
import { ROUTER } from '../consts.js'

//! pages imports
import Landing from './pages/Landing/Landing.jsx'

import './App.css'

function App () {
  return (
    <>
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
