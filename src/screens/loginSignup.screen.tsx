import { Component, ReactNode } from "react";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fetcher } from "../service/axios/absAxios";
import { UserInformation } from "../interfaces/userInformation.interface";
import { Endpoints } from "../service/axios/endpoints";
import { LabelInputField } from "../components/labelInputField.component";
import { AcceptedAuthenticationResponse } from "../service/axios/authResponses";
import { ApplicationStorage } from "../service/storage/applicationStorate";


export interface LoginScreenState {
    usernameOrEmailInput: string,
    passwordInput: string,
    feedbackMessage: string,
    loginBehavior: boolean
}

export class LoginSignupScreen extends Component<any, LoginScreenState, any> {
    constructor(properties: any) {
        super(properties);
        this.state = {
            usernameOrEmailInput: "",
            passwordInput: "",
            feedbackMessage: "",
            loginBehavior: true
        }
    }

    private handleUsernameOrEmailInput(text: string): void {
        this.setState({usernameOrEmailInput: text});
    }

    private handlePasswordInput(text: string): void {
        this.setState({passwordInput: text});
    }

    private async handleLoginRequest(event: GestureResponderEvent): Promise<void> {
        try {
            let response: AcceptedAuthenticationResponse | null = await new Fetcher<AcceptedAuthenticationResponse>().getOne(
                {
                    endpoint: Endpoints.LOGIN, 
                    body: { username: this.state.usernameOrEmailInput, pwd: this.state.passwordInput}
                }
            );
            if (response) await ApplicationStorage.setAuthenticationToken(response);
            else this.setState({feedbackMessage: "Something went wrong...try again"});
        } catch (error: unknown) {
            console.log("???? : " + String(error));
        }
    }

    private async handleSignupRequest(event: GestureResponderEvent): Promise<void> {

    }

    render(): ReactNode {
        return(
            <SafeAreaView className="flex-1 bg-green-400 items-center">
                <Text className="text-4xl text-white">
                    {this.state.loginBehavior ? "Login" : "SignUp"}
                </Text>

                <View className="items-center border-solid border-2 border-white p-3 rounded-md bg-green-300">
                    <LabelInputField labelName="Username or Email: " value={this.state.usernameOrEmailInput} onChangeTextCallback={(text: string) => this.handleUsernameOrEmailInput(text)}/>
                    <LabelInputField labelName="Password: " value={this.state.passwordInput} onChangeTextCallback={(text: string) => this.handlePasswordInput(text)} secured={true}/>

                    <View>
                        <Text>{this.state.feedbackMessage}</Text>
                    </View>

                    <View className="mt-10">
                        <TouchableOpacity onPress={(event: GestureResponderEvent) => this.handleLoginRequest(event)} className="bg-red-400 w-20 h-20 rounded-full items-center mt-10">
                            <Text className="text-white m-auto">Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}