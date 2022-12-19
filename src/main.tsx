import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faClock, faCloud, faCompass, faMapMarkedAlt, faMoon, faRoad, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faMapMarkedAlt, faCompass, faSun, faMoon, faCloud, faClock, faRoad, faGitAlt)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
