import '@fontsource/amiko'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Outlet } from '@tanstack/react-location'

import LayoutRoot from './components/layout/layout-root'
import AppRoutes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes>
      <LayoutRoot>
        <Outlet />
      </LayoutRoot>
    </AppRoutes>
  </React.StrictMode>,
  document.getElementById('root')
)
