import React, { useRef, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Signature from "react-native-signature-canvas";
import * as FileSystem from 'expo-file-system';

const SoundVowelScreen = ({ route }) => {
    const { category } = route.params;
    const ref = useRef();
    const [signature, setSignature] = useState(null);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const vowelLetters = [
        'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ',
        'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'
    ];

    const expectedVowelResponses = [
        'A', 'AA', 'E', 'EE', 'U', 'UU',
        'AE', 'AEE', 'I', 'O', 'OO', 'OU'
    ];

    const consonantLetters = [
        'க்', 'ங்', 'ச்', 'ஞ்', 'ட்', 'ண்', 'த்', 'ந்',
        'ப்', 'ம்', 'ய்', 'ர்', 'ல்', 'வ்', 'ழ்', 'ள்', 'ற்', 'ன்'
    ];

    const expectedConsonantResponses = [
        'k', 'ng', 'ch', 'nj', 't', 'nn', 'th', 'ndh',
        'p', 'm', 'yi', 'r', 'l', 'v', 'lll', 'll', 'tr', 'n'
    ];

    const letters = category === 'vowel' ? vowelLetters : consonantLetters;
    const expectedResponses = category === 'vowel' ? expectedVowelResponses : expectedConsonantResponses;

    const handleSignature = signature => {
        console.log(signature);
        setSignature(signature);
    };

    const handleEmpty = () => {
        console.log('Empty');
    };

    const handleClear = () => {
        ref.current.clearSignature();
        setSignature(null);
        console.log('clear success!');
    };

    const handleEnd = () => {
        ref.current.readSignature();
    };

    const handleSave = async () => {
        if (signature) {
            try {
                const base64Code = signature.split('data:image/png;base64,')[1];
                const path = `${FileSystem.documentDirectory}signature.jpg`;
                await FileSystem.writeAsStringAsync(path, base64Code, { encoding: FileSystem.EncodingType.Base64 });

                const formData = new FormData();
                formData.append("image", {
                    uri: path,
                    name: "image.jpg",
                    type: "image/jpeg",
                });

                const apiUrl = category === 'vowel'
                    ? "http://13.60.95.21/tamilLetter"
                    : "http://13.60.95.21/tamilConsonantLetter";

                const response = await fetch(apiUrl, {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    const responseJson = await response.json();
                    console.log('response: ', responseJson.defectiveness);
                    console.log('letter: ', currentLetterIndex);
                    if (responseJson.defectiveness === "No defect found") {
                        Alert.alert(
                            'Response',
                            `Answer is Incorrect`,
                            [
                                { text: 'Try Again', onPress: handleClear }
                            ]
                        );
                    } else if (responseJson.defectiveness === expectedResponses[currentLetterIndex]) {
                        Alert.alert(
                            'Response',
                            `Your answer is Correct`,
                            [
                                {
                                    text: 'Next', onPress: () => {
                                        if (currentLetterIndex < letters.length - 1) {
                                            setCurrentLetterIndex(currentLetterIndex + 1);
                                        } else {
                                            Alert.alert('Congratulations', 'You have completed all letters!');
                                        }
                                        handleClear();
                                    }
                                }
                            ]
                        );
                    } else {
                        Alert.alert(
                            'Response',
                            `Answer is Incorrect`,
                            [
                                { text: 'Try Again', onPress: handleClear }
                            ]
                        );
                    }
                } else {
                    console.log('response', response);
                    const responseText = await response.text();
                    Alert.alert('Unexpected Response', responseText);
                }
            } catch (error) {
                console.error('Error sending signature:', error);
                Alert.alert('Error', 'Failed to send the signature.');
            }
        } else {
            Alert.alert('No Signature', 'Please write a letter before submitting.');
        }
    };

    const handleSkip = () => {
        if (currentLetterIndex < letters.length - 1) {
            setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
            Alert.alert('Congratulations', 'You have completed all letters!');
        }
        handleClear();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTopic}>TAMIL LETTER{'\n'} WRITE</Text>
            {category === 'vowel' ? (
                <>
                    <Text style={styles.vowelText}>Vowel Letters</Text>
                </>
            ) : category === 'consonant' ? (
                <>
                    <Text style={styles.vowelText}>Consonant Letters</Text>
                </>
            ) : null}

            <Image style={styles.dashImg} source={require('../assets/write.png')} />

            <View style={styles.overlay}>
                {category === 'vowel' && (
                    <>
                        <Text style={styles.card1Text}><Text style={{ color: "#4D86F7", fontSize: 45, fontWeight: '600' }}>Write</Text> {letters[currentLetterIndex]}</Text>
                    </>
                )}

                {category === 'consonant' && (
                    <>
                        <Text style={styles.card1Text}><Text style={{ color: "#4D86F7", fontSize: 45, fontWeight: '600' }}>Write</Text> {letters[currentLetterIndex]}</Text>
                    </>
                )}

                <View style={styles.signatureContainer}>
                    <Signature
                        ref={ref}
                        onOK={handleSignature}
                        onEmpty={handleEmpty}
                        descriptionText="Sign"
                        clearText="Clear"
                        confirmText="Save"
                        penColor="black"
                        dotSize={5}
                        minWidth={5}
                        maxWidth={5}
                        onEnd={handleEnd}
                        backgroundColor="white"
                        webStyle={`.m-signature-pad--body {background: white;} .m-signature-pad--footer {display: none; margin: 0px;}`}
                        style={styles.signatureCanvas}
                    />
                </View>

                <TouchableOpacity onPress={handleClear} style={styles.eraseButton}>
                    <Text style={styles.eraseButtonText}>Erase</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#4D86F7',
    },
    dashImg: {
        left: '70%',
        top: '-10.6%',
        width: '25%',
        height: '22%',
    },
    textTopic: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 35,
        color: '#FFD166',
        top: '0%',
    },
    vowelText: {
        left: '5%',
        fontWeight: '600',
        fontSize: 25,
        color: '#FFD166',
        top: '5%',
    },
    card1Text: {
        fontSize: 60,
        alignSelf: 'center',
        fontWeight: '400',
        top: '0%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: '28%',
        height: 'auto',
        borderRadius: 85,
        flex: 1,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    signatureContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5,
        borderColor: '#000',
        height: 250,
        borderRadius: 10,
    },
    signatureCanvas: {
        flex: 1,
        borderRadius: 10,
    },
    eraseButton: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#FF5A5F',
        borderRadius: 10,
        alignItems: 'center',
        width: '40%'
    },
    eraseButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    saveButton: {
        marginTop: 20,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        alignItems: 'center',
        bottom: '13%',
        width: '40%',
        left: '50%'
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    skipButton: {
        padding: 10,
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        alignItems: 'center',
        width: '40%',
        alignSelf: 'center',
        bottom: '7%'
    },
    skipButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default SoundVowelScreen;
