import { Component, ReactNode } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export class DemoDBScreen extends Component<any, any, any> {
    
    public async testDB() {
        console.log("salut")
    }

    render(): ReactNode {
        return(
            <SafeAreaView>
                <Text>DEMO DB</Text>

            </SafeAreaView>
        )
    }
}