import { useRoutes } from 'react-router-dom'

import Home from '../pages/Home'
import Noticias from '../pages/Noticias'

export const Routes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/noticias', element: <Noticias /> },
  ])
}
