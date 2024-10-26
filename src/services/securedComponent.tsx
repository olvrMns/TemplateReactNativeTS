import { Component, ReactElement, ReactNode } from "react";
import { ApplicationStorage } from "./storage/applicationStorate";
import { Fetcher } from "./axios/absAxios";
import { AuthenticationStateResponse } from "../interfaces/authenticationStateResponse.interface";
import { Endpoints } from "./axios/endpoints";
import { AcceptedAuthenticationResponse } from "../interfaces/acceptedAuthenticationResponse.interface";
import { UserInformation } from "../interfaces/userInformation.interface";
import {} from 'react-native'

const fetcher: Fetcher<AuthenticationStateResponse> = new Fetcher<AuthenticationStateResponse>();

export interface SecuredComponentProperties {
    navigation: any;
}

export interface SecuredComponentState {
    userInformation: UserInformation | undefined;
}

export abstract class SecuredComponent<P extends SecuredComponentProperties, S extends SecuredComponentState> extends Component<P, S> {
    constructor(properties: P) {
        super(properties);
    }

    public async componentDidMount(): Promise<void> {
        this.setFocusEvent();
    }

    private async setFocusEvent() {
        this.props.navigation.addListener('focus', async () => {
            await this.refreshAuth();
        });
    }

    private toLoginSignupScreen() {
        this.props.navigation.navigate("LoginSignup");
    }

    private async refreshAuth() {
        try {
            let authTokens: AcceptedAuthenticationResponse | null = await ApplicationStorage.getAuthenticationTokens();
            if (authTokens != null) {
                let response: AuthenticationStateResponse | null = await fetcher.getOne({endpoint: Endpoints.GET_AUTHENTICATION_STATE, body: authTokens});
                if (response?.authenticated === true && response.acceptedAuthenticationResponse) {
                    await ApplicationStorage.setAuthenticationTokens(response.acceptedAuthenticationResponse);
                    this.setState({userInformation: response.userInformation as UserInformation});
                } else this.toLoginSignupScreen();
            } else this.toLoginSignupScreen();
        } catch (err: unknown) {
            console.log(String(err));
        }
    }
}