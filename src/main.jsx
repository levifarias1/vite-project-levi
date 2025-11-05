//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

//Estilos
import './CSS/general.css'

//Componemtes
import Primcipal from './componentes/primcipal'
import Objetos from './componentes/objetos'
import Header from './componentes/header'
import Pie from './componentes/pie'
import Formulario from './componentes/formulario'
import Pruebas from './componentes/pruebas'

const router = createBrowserRouter ([
    { path: '/', Component: Objetos },
    
    { path: '/formulario', Component: Formulario},

    { path: '/pruebas', Component: Pruebas},
      
    ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router = {router} />
    <Pie />
  </StrictMode>
)
