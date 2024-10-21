import { Component, ReactNode } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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

    render(): ReactNode {
        return(
            <SafeAreaView>
                <Text>LOGIN PAGE</Text>

                <View>
                    <TextInput value={this.state.usernameOrEmailInput}/>

                    <TextInput value={this.state.passwordInput} secureTextEntry={true}/>

                    <TouchableOpacity>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}