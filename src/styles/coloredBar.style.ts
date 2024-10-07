import { StyleSheet } from "react-native"

export const style: StyleSheet.NamedStyles<any> =  StyleSheet.create({
    safeAreaViewStyle: {
        minHeight: "25%",
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        width: "100%"
    },
    barStyle: {
        minHeight: "5%",
        backgroundColor: "red",
        borderRadius: 25
    },
    buttonStyle: {
        backgroundColor: "green",
        width: "30%",
        height: 50,
        borderRadius: 25,
        padding: 5
    },
    buttonStyleText: {
        margin: "auto",
        color: "white"
    }
})