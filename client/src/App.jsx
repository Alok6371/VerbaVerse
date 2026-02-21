import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from "./pages/Layout"


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Layout />} />

      </Routes>
    </>
  )
}

export default App