import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const SettingsScreen = ({ onToggleLocation }) => {
    const [items, setItems] = useState([]);
    const [selectedId, setSelectedId] = useState();
    const { getItem: getLocations, setItem: setLocations } = useAsyncStorage('locations');
    const { getItem: getCurrentLocation, setItem: setCurrentLocation } = useAsyncStorage('currentLocation');
    const [currentLocationLabel, setCurrentLocationLabel] = useState("Default Location");

    // Fetch stored locations on focus
    useFocusEffect(
        useCallback(() => {
            const loadItems = async () => {
                const storedItems = await getLocations();
                if (storedItems) {
                    setItems(JSON.parse(storedItems));
                }
            };
            loadItems();
        }, [])
    );

    // Map items for radio buttons
    const mappedItems = items.map(location => ({
        id: `lon=${location.lon}&lat=${location.lat}`,
        label: location.ort,
        value: location.ort
    }));

    useEffect(() => {
        const setSelected = async () => {
            if (selectedId) {
                const selectedLocation = mappedItems.find(item => item.id === selectedId);
                if (selectedLocation) {
                    const currentLocation = {
                        ort: selectedLocation.label,
                        cord: selectedId
                    };
                    await setCurrentLocation(JSON.stringify(currentLocation));
                    setCurrentLocationLabel(selectedLocation.label); // Update current location label
                }
            }
        };
        setSelected();
    }, [selectedId]);

    const handleLocationSelect = (id) => {
        setSelectedId(id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ortseinstellungen</Text>
            <View style={styles.locationList}>
                {mappedItems.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.locationItem,
                            selectedId === item.id && styles.selectedLocationItem
                        ]}
                        onPress={() => handleLocationSelect(item.id)}
                    >
                        <Text style={styles.locationText}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    locationList: {
        width: '100%',
    },
    locationItem: {
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    selectedLocationItem: {
        backgroundColor: '#007bff',
    },
    locationText: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
   
});

export default SettingsScreen;
