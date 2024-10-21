import { Component, ReactNode } from "react";
import { GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export interface LoginScreenState {
    usernameOrEmailInput: string,
    passwordInput: string
}

export class LoginScreen extends Component<any, LoginScreenState, any> {
    constructor(properties: any) {
        super(properties)
        this.state = {
            usernameOrEmailInput: "",
            passwordInput: ""
        }
    }

    private handleUsernameOrEmailInput(text: string): void {
        this.setState({usernameOrEmailInput: text});
        console.log(this.state.usernameOrEmailInput);
    }

    private handlePasswordInput(text: string): void {
        this.setState({passwordInput: text});
        console.log(this.state.passwordInput);
    }

    private async handleSend(event: GestureResponderEvent): Promise<void> {
        console.log("slt");
    }

    render(): ReactNode {
        return(
            <SafeAreaView className="flex-1 bg-green-400 items-center">
                <Text className="text-4xl text-white">LOGIN PAGE</Text>

                <View className="items-center border-solid border-2 border-white p-3 rounded-md bg-green-300">
                    <TextInput 
                    value={this.state.usernameOrEmailInput} 
                    onChangeText={(text: string) => this.handleUsernameOrEmailInput(text)}
                    className="bg-red-400 w-80 mt-4 rounded-md h-10 p-1"/>

                    <TextInput 
                    value={this.state.passwordInput} 
                    onChangeText={(text: string) => this.handlePasswordInput(text)} secureTextEntry={true}
                    className="bg-red-400 w-80 mt-4 mb-4 rounded-md h-10 p-1"/>

                    <View className="mt-20">
                        <TouchableOpacity onPress={(event: GestureResponderEvent) => this.handleSend(event)} className="bg-red-400 w-20 h-20 rounded-full items-center mt-10">
                            <Text className="text-white m-auto">Send</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </SafeAreaView>
        )
    }
}