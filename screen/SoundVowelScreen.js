import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const SoundVowelScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.textTopic}>TAMIL LETTER{'\n'} SOUNDS</Text>
            <Text style={styles.vowelText}>Vowel Letters</Text>
            <Image style={styles.dashImg} source={require('../assets/music.png')}></Image>
            <View style={styles.overlay}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.card1}>
                        <Text style={styles.card1Text}>அ</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 'auto',
        height: '100%',
        backgroundColor: '#4D86F7',
    },
    bgImg: {
        alignSelf: 'center',
        top: '15.5%',
        width: '100%',
        height: '80%',
        borderWidth: 1,
        borderRadius: 90,
    },
    dashImg: {
        left: '55%',
        top: '-6.6%',
        width: '40%',
        height: '20%',
    },
    textImg: {
        alignSelf: 'center',
        top: '-95%',
        width: '90%',
        height: '7%',
    },
    textTopic: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 35,
        color: '#FFD166',
        top: '0%'
    },

    bottomNavigate: {
        position: 'absolute',
        width: '100%',
        height: 40,
        top: '94.5%',
        backgroundColor: '#4D86F7',
    },

    homeIcon: {
        alignSelf: 'center',
        height: 28,
        width: 28,
        top: 8
    },
    vowelText: {
        left: '5%',
        fontWeight: '600',
        fontSize: 25,
        color: '#FFD166',
        top: '5%'
    },
    card1: {
        alignSelf: 'center',
        marginTop: 50,
        width: 305,
        height: 132,
        backgroundColor: 'rgba(255, 209, 102, 0.5)',
        borderRadius: 50,
    },
    card1Text: {
        fontSize: 100,
        left: '20%',
        bottom: '15%',
        fontWeight: '400'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        top: '28%',
        height: '80%',
        borderRadius: 85,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
});
export default SoundVowelScreen;
