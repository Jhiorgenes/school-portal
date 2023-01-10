import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { ScrollToTopEffect } from './helpers/scrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopEffect />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
