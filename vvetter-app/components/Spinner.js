// components/Spinner.js
// original by sandro Bürki
import {ActivityIndicator, StyleSheet} from "react-native";

export default function Spinner({style, ...props}) {
    return (
        <ActivityIndicator style={{...defaultStyles.loadDataIndicator, ...style}} {...props} size="large"
                           color="#ff5800"/>
    )
}

const defaultStyles = StyleSheet.create({
    loadDataIndicator: {
        marginTop: 32
    }
})