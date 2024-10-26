import { Component, ReactNode } from "react";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fetcher } from "../services/axios/absAxios";
import { UserInformation } from "../interfaces/userInformation.interface";
import { Endpoints } from "../services/axios/endpoints";
import { LabelInputField } from "../components/labelInputField.component";
import { AcceptedAuthenticationResponse } from "../interfaces/acceptedAuthenticationResponse.interface";
import { ApplicationStorage } from "../services/storage/applicationStorate";


export interface LoginScreenState {
    usernameOrEmailInput: string,
    passwordInput: string,
    feedbackMessage: string,
    inLoginBehavior: boolean
}

const fetcher: Fetcher<AcceptedAuthenticationResponse> = new Fetcher<AcceptedAuthenticationResponse>();

export class LoginSignupScreen extends Component<any, LoginScreenState, any> {
    constructor(properties: any) {
        super(properties);
        this.state = {
            usernameOrEmailInput: "",
            passwordInput: "",
            feedbackMessage: "",
            inLoginBehavior: true
        }
    }

    private handleUsernameOrEmailInput(text: string): void {
        //...
        this.setState({usernameOrEmailInput: text});
    }

    private handlePasswordInput(text: string): void {
        //...
        this.setState({passwordInput: text});
    }

    private resetInputFieldValues() {
        this.setState({usernameOrEmailInput: "", passwordInput: ""});
    }

    private setFeedbackMessage(message: string) {
        this.setState({feedbackMessage: message});
    }

    private async handleLoginRequest(event: GestureResponderEvent): Promise<void> {
        try {
            let response: AcceptedAuthenticationResponse | null = await fetcher.getOne({endpoint: Endpoints.LOGIN, body: { username: this.state.usernameOrEmailInput, pwd: this.state.passwordInput}});
            if (response) await ApplicationStorage.setAuthenticationTokens(response);
            else this.setFeedbackMessage("Something went wrong...try again");
            this.resetInputFieldValues();
        } catch (error: unknown) {
            console.log("???? : " + String(error));
        }
    }

    private async handleSignupRequest(event: GestureResponderEvent): Promise<void> {
        console.log("signup")
    }

    render(): ReactNode {
        return(
            <SafeAreaView className="flex-1 bg-green-400 items-center">
                <Text className="text-4xl text-white">
                    {this.state.inLoginBehavior ? "Login" : "SignUp"}
                </Text>

                <View className="items-center border-solid border-2 border-white p-3 rounded-md bg-green-300">
                    <LabelInputField labelName="Username or Email: " value={this.state.usernameOrEmailInput} onChangeTextCallback={(text: string) => this.handleUsernameOrEmailInput(text)}/>
                    <LabelInputField labelName="Password: " value={this.state.passwordInput} onChangeTextCallback={(text: string) => this.handlePasswordInput(text)} secured={true}/>

                    <View>
                        <Text>{this.state.feedbackMessage}</Text>
                    </View>

                    <View className="mt-10">
                        <TouchableOpacity 
                        onPress={(event: GestureResponderEvent) => this.state.inLoginBehavior ? this.handleLoginRequest(event) : this.handleSignupRequest(event)} 
                        className="bg-red-400 w-20 h-20 rounded-full items-center mt-10">
                            <Text className="text-white m-auto">{this.state.inLoginBehavior ? "Login" : "SignUp"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}