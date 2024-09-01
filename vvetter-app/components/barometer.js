// components/barometer.js

import {StyleSheet, View, Text} from "react-native";
import {Stack} from "expo-router";
import { Barometer } from "expo-sensors";
import { useEffect, useState } from "react";

export default function BarometerReader() {

    const [{ pressure, relativeAltitude }, setData] = useState({ pressure: 0, relativeAltitude: 0 });
    const [subscription, setSubscription] = useState(null)

    // subscribe to sensor
    const subscribe = () => {
        setSubscription(Barometer.addListener(setData))
    }
    // unsubscribe
    const unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
    }
    useEffect(() => {
        subscribe()
        return () => unsubscribe()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Luft Druck</Text>
            <Text style={styles.text}>{pressure} hPa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 14
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }
})