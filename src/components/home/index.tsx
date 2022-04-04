import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import useSWR from 'swr'

import { getAllUsers } from '../../lib/randomUser'
import { usersState } from '../../store/user'
import SearchBar from './search-bar'
import UserList from './user-list'

const HomePageRenderer = () => {
  const setUsers = useSetAtom(usersState)
  const { data } = useSWR('/users', getAllUsers, { revalidateOnFocus: false, refreshInterval: 10000 })

  useEffect(() => {
    setUsers(data?.results)
  }, [data])

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl mb-4">User List</h1>
      <SearchBar />

      <UserList users={data?.results} />
    </div>
  )
}

export default HomePageRenderer
