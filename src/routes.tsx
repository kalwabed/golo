import { ReactLocation, Router } from '@tanstack/react-location'

import HomePageRenderer from './components/home'
import UserDetail from './components/users/detail'

const location = new ReactLocation()

const AppRoutes: React.FC = ({ children }) => {
  return (
    <Router
      location={location}
      routes={[
        {
          path: '/',
          element: <HomePageRenderer />
        },
        { path: '/users/:uuid', element: <UserDetail /> },
        { path: '/about', element: <div>hello world</div> }
      ]}
    >
      {children}
    </Router>
  )
}

export default AppRoutes
