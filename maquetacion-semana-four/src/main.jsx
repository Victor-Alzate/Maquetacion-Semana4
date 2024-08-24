import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import header from './Components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header />
  </StrictMode>,
)
