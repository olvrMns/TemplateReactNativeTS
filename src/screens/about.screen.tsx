import { Component, ReactNode } from "react";
import { SafeAreaView, Text, View } from "react-native";

export class AboutScreen extends Component<any, any, any> {

    render(): ReactNode {
        return(
            <SafeAreaView>
                <Text>ABOUT</Text>
            </SafeAreaView>
        )
    }
}