import React from 'react'
import '@fontsource/alata'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import LayoutRoot from './components/layout/layout-root'

ReactDOM.render(
  <React.StrictMode>
    <LayoutRoot>
      <App />
    </LayoutRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
