import { Observable } from "rxjs";
import { SigninData, SigninRespEdit } from "../interfaces/signin-payload";
import { SignupData, SignupRespEdit } from "../interfaces/signup";
import { ForgotPasswordData, ForgotPasswordResponse } from "../interfaces/forgotPassword";
import { VerifyResetData, VerifyResetResponse } from "../interfaces/verifyReset";
import { ResetPasswordData, ResetPasswordResponse } from "../interfaces/resetPassword";
import { LogoutResponse } from "../interfaces/logout";


export abstract class AuthAPI {
    abstract signin(data:SigninData):Observable<SigninRespEdit>;
    abstract signupApi(data:SignupData):Observable<SignupRespEdit>;
    abstract forgotPassword(data:ForgotPasswordData):Observable<ForgotPasswordResponse>;
    abstract verifyReset(data:VerifyResetData):Observable<VerifyResetResponse>;
    abstract resetPassword(data:ResetPasswordData):Observable<ResetPasswordResponse>;
    abstract logout():Observable<LogoutResponse>;
}
