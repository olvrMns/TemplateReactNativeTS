import { Component, ReactNode } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SecuredComponent } from "../services/securedComponent";

export class HomeScreen extends SecuredComponent<any, any> {

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