type User = {
  name: {
    first: string
    last: string
    title: string
  }
  email: string
  phone: string
  gender: string
  nat: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  id: {
    name?: string
    value?: string
  }
  dob: {
    date: string
    age: number
  }
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  location: {
    city: string
    state: string
    country: string
    coordinates: {
      latitude: number
      longitude: number
    }
    timezone: {
      offset: string
      description: string
    }
  }
}

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
