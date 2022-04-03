import { useMemo } from 'react'
import { useMatch } from '@tanstack/react-location'
import { useAtomValue } from 'jotai'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

import { usersState } from '../../store/user'

const UserDetail = () => {
  const users = useAtomValue(usersState)
  const {
    params: { uuid }
  } = useMatch()

  const currentUser = useMemo(() => users.find(user => user.login.uuid === uuid), [uuid])

  return (
    <div className="flex flex-col w-full max-w-screen-2xl border border-gray-300 rounded-md py-4 bg-gray-200 shadow-lg">
      <span className="-mt-24">
        <img
          src={currentUser.picture.large}
          height={170}
          width={170}
          alt={`${currentUser.name.first} pic`}
          loading="lazy"
          decoding="async"
          className="rounded-full mx-auto border-8 border-yellow-400"
        />
      </span>

      <address className="max-w-xl self-center text-center my-8">
        Hi, my name is{' '}
        <b>
          {currentUser.name.first} {currentUser.name.last}
        </b>
        . People used to call me <b>{currentUser.name.first}</b>. I live in{' '}
        <b>
          {currentUser.location.city}, {currentUser.location.country}
        </b>
        . You can contact me via{' '}
        <a className="underline text-blue-700" href={`mailto:${currentUser.email}`}>
          email
        </a>{' '}
        or {''}
        <a className="underline text-blue-700" href={`tel:${currentUser.phone}`}>
          phone
        </a>
        .
      </address>

      <div className="border-t border-gray-400">
        <div className="flex flex-col space-y-3 p-8 max-w-xl w-full ml-20">
          <p>
            Full Name: {currentUser.name.first} {currentUser.name.last}
          </p>
          <p>Age: {currentUser.dob.age}</p>
          <p>Gender: {currentUser.gender}</p>
          <div className="inline-flex space-x-2">
            <span>Nationality:</span>
            <img
              src={`https://countryflagsapi.com/svg/${currentUser.nat}`}
              height={25}
              width={25}
              alt={currentUser.nat}
              title={currentUser.nat}
              decoding="async"
              loading="lazy"
            />
          </div>
          <p>Timezone: GMT{currentUser.location.timezone.offset}</p>
          <p>
            Street Address: {currentUser.location.street.number} {currentUser.location.street.name}
          </p>
          <p>Post Code: {currentUser.location.postcode}</p>
          <p>City: {currentUser.location.city}</p>
          <p>State: {currentUser.location.state}</p>
          <p>Country: {currentUser.location.country}</p>
          <p>Cell: {currentUser.cell}</p>
          <p>Phone: {currentUser.phone}</p>
          <p>Email: {currentUser.email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
