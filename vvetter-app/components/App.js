import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LocationScreen from './LocationScreen';
import SettingsScreen from './SettingsScreen';

const App = () => {
    const [locations, setLocations] = useState([]);

    // Funktion, um einen neuen Ort hinzuzufügen
    const handleLocationAdded = (newLocation) => {
        const updatedLocations = [...locations, { ...newLocation, id: locations.length + 1 }];
        setLocations(updatedLocations);
    };

    // Funktion, um den Aktivstatus eines Ortes zu ändern
    const handleToggleLocation = (id, active) => {
        const updatedLocations = locations.map(loc =>
            loc.id === id ? { ...loc, active } : loc
        );
        setLocations(updatedLocations);
    };

    return (
        <View style={styles.container}>
            <LocationScreen onLocationAdded={handleLocationAdded} />
            <SettingsScreen locations={locations} onToggleLocation={handleToggleLocation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
});

export default App;
