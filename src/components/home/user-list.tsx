import { Link } from '@tanstack/react-location'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

import { searchState } from '../../store/search'
import { User } from '../../types/user'

const UserList = ({ users }: { users: User[] }) => {
  const searchAtom = useAtomValue(searchState)

  const filteredUsers = useMemo(() => {
    if (searchAtom === '') return users

    return users.filter(
      user =>
        user.name.first.toLowerCase().includes(searchAtom.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchAtom.toLowerCase())
    )
  }, [searchAtom, users])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {!users &&
        [1, 2, 3, 4].map(i => (
          // loading skeleton
          <div key={i} className="bg-yellow-500 p-4 rounded h-20 animate-pulse flex items-center space-x-2">
            <span className="w-10 h-10 bg-yellow-600 animate-pulse rounded-full"></span>
            <span className="w-2/3 h-6 bg-yellow-600 animate-pulse rounded"></span>
          </div>
        ))}

      {!filteredUsers.length && (
        <div className="text-center col-span-full">
          <h2 className="text-2xl">No users found</h2>
          <p className="text-gray-600">Try searching for another name</p>
        </div>
      )}

      {filteredUsers?.map(user => (
        <Link
          to={`/users/${user.login.uuid}`}
          key={user.email}
          className="p-4 border border-yellow-700 rounded bg-yellow-500 transition hover:-translate-y-2 hover:shadow-lg hover:bg-yellow-300 transform flex items-center space-x-2"
        >
          <img
            src={user.picture.thumbnail}
            alt={`${user.name.first} picture`}
            loading="lazy"
            decoding="async"
            className="rounded-full"
          />
          <p className="font-semibold">
            {user.name.first} {user.name.last}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default UserList
