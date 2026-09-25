import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Inicio } from './pages/inicio.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Inicio />}/>
        <Route path='/test-app' element={<App />} />
        <Route path='/test' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
