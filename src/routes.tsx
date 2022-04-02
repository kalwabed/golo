import { ReactLocation, Router } from '@tanstack/react-location'

import HomePageRenderer from './components/home'

const AppRoutes: React.FC = ({ children }) => {
  const location = new ReactLocation()

  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <HomePageRenderer /> },
        { path: '/about', element: <div>hello world</div> }
      ]}
    >
      {children}
    </Router>
  )
}

export default AppRoutes
