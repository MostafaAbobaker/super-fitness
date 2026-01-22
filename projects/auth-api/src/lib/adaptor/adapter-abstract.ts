
import { SigninRespEdit, SigninResponse } from "../interfaces/signin-payload";
import { SignupRespEdit, SignupResponse } from "../interfaces/signup";
import { ForgotPasswordResponse } from "../interfaces/forgotPassword";
import { VerifyResetResponse } from "../interfaces/verifyReset";
import { ResetPasswordResponse } from "../interfaces/resetPassword";
import { LogoutResponse } from "../interfaces/logout";



export abstract class AdapterAbstract {
    abstract adaptSignin(data:SigninResponse):SigninRespEdit;
    abstract adaptSignup(data:SignupResponse):SignupRespEdit;
    abstract adaptForgotPassword(data:ForgotPasswordResponse):ForgotPasswordResponse;
    abstract adaptVerifyReset(data:VerifyResetResponse):VerifyResetResponse;
    abstract adaptResetPassword(data:ResetPasswordResponse):ResetPasswordResponse;
    abstract adaptLogout(data:LogoutResponse):LogoutResponse;
}
