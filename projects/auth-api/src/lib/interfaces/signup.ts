export interface SignupData {
    firstName: string
  lastName: string
  email: string
  password: string
  rePassword: string
  gender: string
  height: number
  weight: number
  age: number
  goal: string
  activityLevel: string
}
export interface SignupRespEdit {
    message: string,
    token: string,
    userName: string,
}
export interface SignupResponse {
  message: string,
  token: string,
  user: {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    age: number,
    weight: number,
    height: number,
    activityLevel: string,
    goal: string,
    photo: string,
    createdAt: string,
  }
}