
import { SigninRespEdit, SigninResponse } from "../interfaces/signin-payload";
import { SignupRespEdit, SignupResponse } from "../interfaces/signup";
import { ForgotPassworResponse } from "../interfaces/forgotPassword";
import { VerifyResetResponse } from "../interfaces/verifyReset";
import { ResetPasswordResponse } from "../interfaces/resetPassword";
import { ChangePasswordResponse } from "../interfaces/changePassword";
import { LogoutResponse } from "../interfaces/logout";



export abstract class AdapterAbstract {
    abstract adaptSignin(data:SigninResponse):SigninRespEdit;
    abstract adaptSignup(data:SignupResponse):SignupRespEdit;
    abstract adaptForgotPassword(data:ForgotPassworResponse):ForgotPassworResponse;
    abstract adaptVerifyReset(data:VerifyResetResponse):VerifyResetResponse;
    abstract adaptResetPassword(data:ResetPasswordResponse):ResetPasswordResponse;
    abstract adaptChangePassword(data:ChangePasswordResponse):ChangePasswordResponse;
    abstract adaptLogout(data:LogoutResponse):LogoutResponse;
}