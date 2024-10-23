
export interface AcceptedAuthenticationResponse {
    accessToken: string;
    refreshToken: string;
}

export interface AuthenticationStateResponse {
    authenticated: boolean;
    accessToken: string | null;
    refreshToken: string | null;
}