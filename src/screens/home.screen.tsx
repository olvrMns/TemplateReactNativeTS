import { Component, ReactNode } from "react";
import { SafeAreaView, Text, View } from "react-native";

export class HomeScreen extends Component<any, any, any> {

    render(): ReactNode {
        return(
            <SafeAreaView>
                <Text>HOME</Text>
            </SafeAreaView>
        )
    }
}