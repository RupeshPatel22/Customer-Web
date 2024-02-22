import { environment } from "src/environments/environment";

export const postOtpRegistrationEndPoint = `${environment.baseUrl}/user/customer/auth/register/otp`;
export const postVerifyOtpRegistrationEndPoint = `${environment.baseUrl}user/customer/auth/register/verify`;
export const postOtpLoginEndPoint = `${environment.baseUrl}user/customer/auth/login/otp`;
export const postVerifyOtpLoginEndPoint = `${environment.baseUrl}user/customer/auth/login/verify`
export const getCustomerIdEndPoint = `${environment.baseUrl}user/customer`
