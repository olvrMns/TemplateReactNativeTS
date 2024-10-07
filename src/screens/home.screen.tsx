import { Component, ReactNode } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export class HomeScreen extends Component<any, any, any> {

    public onPress() {
        console.log("salut");
        this.props.navigation.navigate("About");
    }

    render(): ReactNode {
        return(
            <SafeAreaView>
                <Text>HOME</Text>

                <TouchableOpacity onPress={() => this.onPress()}>
                    <Text>TO ABOUT</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}