import { Link } from '@tanstack/react-location'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import useSWR from 'swr'

import { getAllUsers } from '../../lib/randomUser'
import { usersState } from '../../store/user'

const HomePageRenderer = () => {
  const setUsers = useSetAtom(usersState)
  const { data } = useSWR('/users', getAllUsers, { revalidateOnFocus: false })

  useEffect(() => {
    setUsers(data?.results)
  }, [data])

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mb-4">User List</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {!data?.results &&
          [1, 2, 3, 4].map(i => (
            // loading skeleton
            <div key={i} className="bg-yellow-500 p-4 rounded h-20 animate-pulse flex items-center space-x-2">
              <span className="w-10 h-10 bg-yellow-600 animate-pulse rounded-full"></span>
              <span className="w-2/3 h-6 bg-yellow-600 animate-pulse rounded"></span>
            </div>
          ))}

        {data?.results?.map(user => (
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
    </div>
  )
}

export default HomePageRenderer
