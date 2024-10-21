import { ReactNode, RefObject, useRef } from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import Animated, { SharedValue, useSharedValue, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";


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
        <SafeAreaView>

            <Animated.View></Animated.View>

            <TouchableOpacity onPress={() => incrementBar()}>
                <Text>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => decrementBar()}>
                <Text>Decrement</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}