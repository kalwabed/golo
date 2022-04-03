import { atomWithStorage } from 'jotai/utils'

import { User } from '../types/user'

export const usersState = atomWithStorage<User[]>('user-list', [])
