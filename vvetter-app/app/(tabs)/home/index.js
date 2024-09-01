import React from 'react';
import { useState, useCallback } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { View, 
    Text, 
    StyleSheet, 
    ScrollView } from 'react-native';
import { useFocusEffect } from "expo-router";
import Data from '../../../components/data';
import BarometerReader from '../../../components/barometer';
import Spinner from '../../../components/Spinner';

export default function HomeScreen() {
    
    const [currentLocation, setCurrentLocation] = useState(null);
    const { getItem: getCurrentLocation } = useAsyncStorage('currentLocation');

    //load current location
    useFocusEffect(
        useCallback(() => {
            const loadCurrentLocation = async () => {
                const storedCurrentLocation = await getCurrentLocation();
                if (storedCurrentLocation) {
                    setCurrentLocation(JSON.parse(storedCurrentLocation));
                } else {
                    setCurrentLocation(defaultLocation);
                }
            }
            loadCurrentLocation()
        }, [])
)

    if (!currentLocation) {
        return <Spinner/>;
    }

    const stadt = currentLocation.ort || "Default Ort";
    const cord = currentLocation.cord || "lon=48&lat=7.4";



    console.log("location:",currentLocation.ort)
    console.log("location:",currentLocation.cord)

    // const lon = 46.9
    // const lat = 7.4
    // const stadt = "Bern"

    return (
        <View>
        <ScrollView>
            <Text style={styles.location}>{stadt}</Text>
            <BarometerReader/>
            
            <Data cord={cord}/>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    location: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
