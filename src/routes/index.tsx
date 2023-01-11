import { useRoutes } from 'react-router-dom'
import Contato from '../pages/Contato'
import Curso from '../pages/Curso'
import Cursos from '../pages/Cursos'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Noticias from '../pages/Noticias'
import Vagas from '../pages/Vagas'

export const Routes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/cursos', element: <Cursos /> },
    { path: '/cursos/:slug', element: <Curso /> },
    { path: '/noticias', element: <Noticias /> },
    { path: '/contato', element: <Contato /> },
    { path: '/vagas', element: <Vagas /> },
    { path: '*', element: <NotFound /> },
  ])
}
