export interface SigninData {
    email: string;
    password: string;
}

export interface SigninRespEdit {
    message: string,
    token: string,
    userName: string,
}

export interface SigninResponse {
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
