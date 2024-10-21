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

    private handleUsernameOrEmailInput(text: string) {
        this.setState({usernameOrEmailInput: text});
        console.log(this.state.usernameOrEmailInput);
    }

    private handlePasswordInput(text: string) {
        this.setState({passwordInput: text});
        console.log(this.state.passwordInput);
    }

    private handleSend(event: GestureResponderEvent) {
        console.log("slt");
    }

    render(): ReactNode {
        return(
            <SafeAreaView className="flex-1 bg-green-300">
                <Text>LOGIN PAGE</Text>

                <View>
                    <TextInput 
                    value={this.state.usernameOrEmailInput} 
                    onChangeText={(text: string) => this.handleUsernameOrEmailInput(text)}/>

                    <TextInput 
                    value={this.state.passwordInput} 
                    onChangeText={(text: string) => this.handlePasswordInput(text)} secureTextEntry={true}/>

                    <TouchableOpacity onPress={(event: GestureResponderEvent) => this.handleSend(event)}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}