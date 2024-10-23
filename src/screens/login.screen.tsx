import { Component, ReactNode } from "react";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fetcher } from "../axios/absAxios";
import { UserInformation } from "../entities/userInformation.entity";
import { Endpoints } from "../axios/endpoints";
import { LabelInputField } from "../components/labelInputField.component";


export interface LoginScreenState {
    usernameOrEmailInput: string,
    passwordInput: string,
    feedbackMessage: string
}

export class LoginScreen extends Component<any, LoginScreenState, any> {
    constructor(properties: any) {
        super(properties)
        this.state = {
            usernameOrEmailInput: "",
            passwordInput: "",
            feedbackMessage: ""
        }
    }

    private handleUsernameOrEmailInput(text: string): void {
        this.setState({usernameOrEmailInput: text});
    }

    private handlePasswordInput(text: string): void {
        this.setState({passwordInput: text});
    }

    private async handleSend(event: GestureResponderEvent): Promise<void> {
        let res: UserInformation | null = await new Fetcher<UserInformation>().getOne({
            endpoint: Endpoints.LOGIN,
            body: {
                username: this.state.usernameOrEmailInput,
                pwd: this.state.passwordInput
            }
        })
    }

    render(): ReactNode {
        return(
            <SafeAreaView className="flex-1 bg-green-400 items-center">
                <Text className="text-4xl text-white">LOGIN</Text>

                <View className="items-center border-solid border-2 border-white p-3 rounded-md bg-green-300">

                    <LabelInputField labelName="Username: " value={this.state.usernameOrEmailInput} onChangeTextCallback={(text: string) => this.handleUsernameOrEmailInput(text)}/>
                    <LabelInputField labelName="Password: " value={this.state.passwordInput} onChangeTextCallback={(text: string) => this.handlePasswordInput(text)} secured={true}/>

                    <View className="mt-10">
                        <TouchableOpacity onPress={(event: GestureResponderEvent) => this.handleSend(event)} className="bg-red-400 w-20 h-20 rounded-full items-center mt-10">
                            <Text className="text-white m-auto">Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </SafeAreaView>
        )
    }
}