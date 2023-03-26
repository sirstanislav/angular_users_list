export interface Signup {
  _id: string
  name: string
  email: string
}

export interface Signin {
  token: string
  userId: string
}
