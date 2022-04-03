import { User } from '../types/user'

interface ApiResponse {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

export async function getAllUsers(): Promise<ApiResponse | undefined> {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const data = await response.json()

    return data as ApiResponse
  } catch (error) {
    console.error(error)
  }
}
