import { ReactElement } from "react";
import { Text, TextInput, View } from "react-native";

interface LabelInputFiledProperties {
    labelName: string,
    value: string,
    onChangeTextCallback: (text: string) => void,
    secured?: boolean
}

export const LabelInputField = (properties: LabelInputFiledProperties): ReactElement => {
    return(
        <View>
            <Text>{properties.labelName}</Text>
            <TextInput 
            value={properties.value} 
            onChangeText={(text: string) => properties.onChangeTextCallback(text)}
            className="bg-red-400 w-80 rounded-md h-10 p-1"
            secureTextEntry={properties.secured ? properties.secured : false}/>
        </View>
    )
}