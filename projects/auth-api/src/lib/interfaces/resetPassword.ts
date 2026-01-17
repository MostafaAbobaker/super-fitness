
export interface ResetPasswordData {
    email: string,
    newPassword: string,
}

export interface ResetPasswordResponse {
    message: string;
    token:string
}