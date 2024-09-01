import React, { useState } from 'react';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal } from 'react-native';

const LocationScreen = ({ onLocationAdded }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [ort, setOrt] = useState('');
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');

    const { getItem, setItem } = useAsyncStorage('locations')

    // Handler für das Öffnen des Modals
    const handleAddLocation = () => {
        if (!ort || !lon || !lat) {
            Alert.alert('Fehler', 'Bitte füllen Sie alle Felder aus.');
        } else {
            setModalVisible(true);
        }
    };

    // Handler für das Bestätigen des Hinzufügens eines Ortes
    const confirmAddLocation = async () => {
        setModalVisible(false);

        const locationsAsJSONString = await getItem();
        const locationArray = locationsAsJSONString ? JSON.parse(locationsAsJSONString) : [];
        const newLocation = { ort, lon, lat };

        console.log(newLocation)
        locationArray.push(newLocation)

        const locationsArrayAsJSONString = JSON.stringify(locationArray)

        await setItem(locationsArrayAsJSONString)
        console.log(getItem)

        Alert.alert('Ort hinzugefügt', `Der Ort ${ort}, ${lon}, ${lat} wurde hinzugefügt.`);
        setOrt('');
        setLon('');
        setLat('');
        console.log('Ort hinzugefügt', `Der Ort ${ort}, ${lon}, ${lat} wurde hinzugefügt.`)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Neuer Ort hinzufügen</Text>
            <TextInput
                style={styles.input}
                placeholder="Ort"
                value={ort}
                onChangeText={setOrt}
            />
            <TextInput
                style={styles.input}
                placeholder="lon"
                value={lon}
                onChangeText={setLon}
            />
            <TextInput
                style={styles.input}
                placeholder="lat"
                value={lat}
                onChangeText={setLat}
            />
            <Button
                title="Ort hinzufügen"
                onPress={handleAddLocation}
            />
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text>Möchten Sie den Ort wirklich hinzufügen?</Text>
                        <View style={styles.modalButtons}>
                            <Button title="Ja" onPress={confirmAddLocation} />
                            <Button title="Nein" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
});

export default LocationScreen;
