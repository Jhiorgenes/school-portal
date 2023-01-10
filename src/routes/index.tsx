import { useRoutes } from 'react-router-dom'
import Contato from '../pages/Contato'
import Curso from '../pages/Curso'
import Cursos from '../pages/Cursos'

import Home from '../pages/Home'
import Noticias from '../pages/Noticias'

export const Routes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/cursos', element: <Cursos /> },
    { path: '/cursos/:slug', element: <Curso /> },
    { path: '/noticias', element: <Noticias /> },
    { path: '/contato', element: <Contato /> },
  ])
}
