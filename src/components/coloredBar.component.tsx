import { ReactNode, RefObject, useRef } from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import Animated, { SharedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../styles/coloredBar.style";


interface ColoredBarProperties {
    duration: number
}

export const ColoredBar = (properties: ColoredBarProperties): ReactNode => {
    const barWidth: SharedValue<number> = useSharedValue<number>(0);

    const incrementBar = () => {
        if (barWidth.value < getWindowWidth())
            barWidth.value = withTiming(barWidth.value + (getWindowWidth() * 0.10), {duration: properties.duration}, () => {console.log(barWidth.value)});
    }

    const decrementBar = () => {
        if (barWidth.value > 0)
            barWidth.value = withTiming(barWidth.value - (getWindowWidth() * 0.10), {duration: properties.duration}, () => {console.log(barWidth.value)});
    }

    const getWindowWidth = (): number => {
        return Dimensions.get('window').width;
    }

    return(
        <SafeAreaView style={style.safeAreaViewStyle}>

            <Animated.View style={[style.barStyle, {width: barWidth}]}></Animated.View>

            <TouchableOpacity style={style.buttonStyle} onPress={() => incrementBar()}>
                <Text style={style.buttonStyleText}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonStyle} onPress={() => decrementBar()}>
                <Text style={style.buttonStyleText}>Decrement</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}