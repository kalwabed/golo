import { Link } from '@tanstack/react-location'

const TopNavigation = () => {
  return (
    <div className="flex w-full max-w-screen-xl mx-auto justify-between items-center mt-4 py-4">
      <b className="font-bold text-2xl">Logo</b>

      <div className="flex space-x-4 text-xl">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900">
          About
        </Link>
      </div>
    </div>
  )
}

export default TopNavigation
