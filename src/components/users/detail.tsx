import { useMemo } from 'react'
import { useMatch } from '@tanstack/react-location'
import { useAtomValue } from 'jotai'
import {
  HiCalendar,
  HiLocationMarker,
  HiMap,
  HiOutlineCalendar,
  HiOutlineFlag,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineMap,
  HiOutlinePhone,
  HiOutlineUser
} from 'react-icons/hi'

import { usersState } from '../../store/user'
import Card from './card'

const UserDetail = () => {
  const users = useAtomValue(usersState)
  const {
    params: { uuid }
  } = useMatch()

  const currentUser = useMemo(() => users.find(user => user.login.uuid === uuid), [uuid])

  return (
    <>
      <Card className="mt-8">
        <span className="-mt-24">
          <img
            src={currentUser.picture?.large}
            height={170}
            width={170}
            alt={`${currentUser.name.first} pic`}
            loading="lazy"
            decoding="async"
            className="rounded-full mx-auto border-8 border-yellow-400"
          />
        </span>

        <address className="max-w-full lg:max-w-xl self-center text-center my-8 px-4 lg:p-0">
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
      </Card>

      <Card className="mt-6">
        <div className="flex flex-col space-y-3 p-8 max-w-full lg:max-w-2xl w-full lg:ml-20">
          <h1 className="text-4xl font-bold">About</h1>
          <div className="inline-flex space-x-2">
            <HiOutlineUser className="h-5 w-5" />
            <p>
              Full Name: {currentUser.name.first} {currentUser.name.last}
            </p>
          </div>

          <div className="inline-flex space-x-2">
            <HiOutlineCalendar className="h-5 w-5" /> <p>Age: {currentUser.dob.age}</p>
          </div>
          <div className="inline-flex space-x-2">
            <HiOutlineFlag className="h-5 w-6" />
            <span>Nationality:</span>
            <img
              src={`https://countryflagsapi.com/svg/${currentUser.nat}`}
              height={25}
              width={30}
              alt={currentUser.nat}
              title={currentUser.nat}
              decoding="async"
              loading="lazy"
            />
          </div>

          <address className="inline-flex space-x-2">
            <HiOutlineLocationMarker className="h-5 w-5" />{' '}
            <p>
              {currentUser.location.street.number} {currentUser.location.street.name}
              {currentUser.location.city}, {currentUser.location.state}, {currentUser.location.postcode},{' '}
              {currentUser.location.country}
            </p>
          </address>
          <div className="inline-flex space-x-2">
            <HiOutlinePhone className="h-5 w-5" />
            <p>Phone: {currentUser.phone}</p>
          </div>
          <div className="inline-flex space-x-2">
            <HiOutlineMail className="h-5 w-5" />
            <p>Email: {currentUser.email}</p>
          </div>
        </div>
      </Card>
    </>
  )
}

export default UserDetail
