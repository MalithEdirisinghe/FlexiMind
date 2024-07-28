import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const GameSelectScreen = ({ navigation, route }) => {
    const { language } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    const handleLevelSelect = (screen, level) => {
        setModalVisible(false);
        if (level) {
            navigation.navigate(screen, { language: language, level: level });
        } else {
            navigation.navigate(screen, { language: language });
        }
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{language === 'Tamil' ? 'விளையாட்டின் அளவைத் தேர்ந்தெடுக்கவும்' : 'Select Game Level'}</Text>

            <TouchableOpacity style={styles.button} onPress={openModal}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'எழுத்து விளையாட்டை தேர்ந்தெடு' : 'Select Letter Game'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('FirstLetterGame')}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'முதல் எழுத்து விளையாட்டு' : 'First Letter Game'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('MatchingLettersGameScreen')}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'இணைக்கும் எழுத்துகள் விளையாட்டு' : 'Matching Letters Game'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('SelectWordGameScreen')}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'சரியான வார்த்தையை தேர்ந்தெடு' : 'Select the Correct Word Game'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Text style={styles.closeButtonText}>{language === 'Tamil' ? 'நெருக்கமான' : 'BACK'}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{language === 'Tamil' ? 'நிலையைத் தேர்ந்தெடுக்கவும்' : 'Select Level'}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => handleLevelSelect('Game', 'Basic')}>
                            <Text style={styles.modalButtonText}>{language === 'Tamil' ? 'அடிப்படை நிலை' : 'Basic Level'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => handleLevelSelect('Game', 'Medium')}>
                            <Text style={styles.modalButtonText}>{language === 'Tamil' ? 'நடுத்தர நிலை' : 'Medium Level'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => handleLevelSelect('Game', 'Hard')}>
                            <Text style={styles.modalButtonText}>{language === 'Tamil' ? 'கடினமான நிலை' : 'Hard Level'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeButtonText}>{language === 'Tamil' ? 'நெருக்கமான' : 'Close'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D86F7',
    },
    title: {
        fontSize: 30,
        marginBottom: 15,
        textAlign: 'center',
        color: '#FFD166',
        fontWeight: 'bold',
        bottom: '15%'
    },
    button: {
        backgroundColor: '#FFD166',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#4D86F7',
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 20,
    },
    closeButtonText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#FFD166',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#4D86F7',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default GameSelectScreen;
