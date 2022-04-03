import { Link } from '@tanstack/react-location'

const TopNavigation = () => {
  return (
    <div className="flex w-full max-w-screen-xl mx-auto justify-between items-center mt-0 md:mt-4 py-4">
      <Link to="/" className="font-bold text-2xl">
        GoLo
      </Link>

      <div className="flex space-x-8 text-xl font-semibold">
        <Link to="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
      </div>
    </div>
  )
}

export default TopNavigation
