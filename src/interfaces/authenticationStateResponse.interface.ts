import { AcceptedAuthenticationResponse } from "./acceptedAuthenticationResponse.interface";
import { UserInformation } from "./userInformation.interface";


export interface AuthenticationStateResponse {
    authenticated: boolean;
    acceptedAuthenticationResponse: AcceptedAuthenticationResponse | null;
    userInformation: UserInformation | null;
}