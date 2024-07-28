import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';

const SelectWordGameScreen = ({ navigation, route }) => {
    const { language } = route.params;
    const [selectedWord, setSelectedWord] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCompletionModal, setShowCompletionModal] = useState(false);

    const questions = [
        { prompt: 'ல் / ப / க', options: ['பகல்', 'இவபா', 'கபல்'], answer: 'பகல்' },
        { prompt: 'ர / ச / ட', options: ['ரதம்', 'சபா', 'கட்ட'], answer: 'ரதம்' },
        { prompt: 'த / ந / ச', options: ['பூசம்', 'நபா', 'சமயம்'], answer: 'சமயம்' },
    ];

    const handleWordPress = (word) => {
        setSelectedWord(word);
        setIsCorrect(word === questions[currentIndex].answer);
    };

    const handleNextPress = () => {
        if (isCorrect) {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setSelectedWord(null);
                setIsCorrect(null);
            } else {
                setShowCompletionModal(true);
            }
        } else {
            alert('Please select the correct word before proceeding.');
        }
    };

    const handleHomePress = () => {
        navigation.navigate('Home', { language: language });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Select the Correct{'\n'}Word</Text>
            <Text style={styles.promptText}>{questions[currentIndex].prompt}</Text>
            <View style={styles.optionsContainer}>
                {questions[currentIndex].options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedWord === option && {
                                backgroundColor: isCorrect ? 'green' : 'red',
                            },
                        ]}
                        onPress={() => handleWordPress(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
                <Image style={styles.homeIcon} source={require('../assets/homeIcon.png')} />
            </TouchableOpacity>
            <Modal
                visible={showCompletionModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowCompletionModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Congratulations, you have completed this game!</Text>
                        <TouchableOpacity style={styles.doneButton} onPress={handleHomePress}>
                            <Text style={styles.doneButtonText}>Done</Text>
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
        backgroundColor: '#4D86F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 30,
        color: '#FFD166',
        top: '5%',
    },
    promptText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#2d2d2d',
        marginTop: 20,
    },
    optionsContainer: {
        marginTop: 50,
    },
    optionButton: {
        backgroundColor: '#FFD166',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    nextButton: {
        backgroundColor: '#0275d8',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
    },
    nextButtonText: {
        fontSize: 20,
        color: '#FFD166',
        fontWeight: 'bold',
    },
    homeButton: {
        position: 'absolute',
        bottom: 20,
    },
    homeIcon: {
        width: 50,
        height: 50,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        backgroundColor: '#FFD166',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    doneButton: {
        backgroundColor: '#0275d8',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
    },
    doneButtonText: {
        color: '#FFD166',
        fontSize: 18,
        fontWeight: '500',
    },
});

export default SelectWordGameScreen;
