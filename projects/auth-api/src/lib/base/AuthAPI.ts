import { Observable } from "rxjs";
import { SigninData, SigninResponse } from "../interfaces/signin-payload";
import { SignupData, SignupResponse } from "../interfaces/signup";
import { ForgotPasswordData, ForgotPassworResponse } from "../interfaces/forgotPassword";
import { VerifyResetData, VerifyResetResponse } from "../interfaces/verifyReset";
import { ResetPasswordData, ResetPasswordResponse } from "../interfaces/resetPassword";
import { ChangePasswordData } from "../interfaces/changePassword";
import { LogoutResponse } from "../interfaces/logout";


export abstract class AuthAPI {
    abstract signin(data:SigninData):Observable<SigninResponse>;
    abstract signupApi(data:SignupData):Observable<SignupResponse>;
    abstract forgotPassword(data:ForgotPasswordData):Observable<ForgotPassworResponse>;
    abstract verifyReset(data:VerifyResetData):Observable<VerifyResetResponse>;
    abstract resetPassword(data:ResetPasswordData):Observable<ResetPasswordResponse>;
    abstract changePassword(data:ChangePasswordData):Observable<any>;
    abstract logout():Observable<LogoutResponse>;
}   