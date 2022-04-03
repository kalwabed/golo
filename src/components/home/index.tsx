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
      <h1 className="text-4xl mb-4">User list</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data?.results?.map(user => (
          <Link
            to={`/${user.login.uuid}`}
            key={user.email}
            className="p-4 border border-gray-500 rounded hover:bg-yellow-500 transition"
          >
            <p>
              {user.name.first} {user.name.last}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePageRenderer
