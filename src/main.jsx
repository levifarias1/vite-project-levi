//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Estilos
import './CSS/general.css'
//Componemtes
import Primcipal from './componentes/primcipal'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Primcipal />
  </StrictMode>,
)
