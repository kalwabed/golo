export type User = {
  name: {
    first: string
    last: string
    title: string
  }
  email: string
  phone: string
  cell: string
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
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: string
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
