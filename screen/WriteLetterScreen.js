import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Audio } from 'expo-av';

const SoundVowelScreen = ({ route }) => {
    const { category } = route.params;
    console.log("Screen ", category);


    return (
        <View style={styles.container}>
            <Text style={styles.textTopic}>TAMIL LETTER{'\n'} WRITE</Text>
            {category === 'vowel' ? (
                <>
                    <Text style={styles.vowelText}>Vowel Letters</Text>
                </>
            ) : category === 'consonant' ? (
                <>
                    <Text style={styles.vowelText}>consonant Letters</Text>
                </>
            ) : null}

            <Image style={styles.dashImg} source={require('../assets/music.png')}></Image>
            <ScrollView style={styles.overlay}>
                {category === 'vowel' && (
                    <>
                        <Text style={styles.card1Text}><Text style={{ color: "#4D86F7", fontSize: 45, fontWeight: '600' }}>Write</Text> அ</Text>                   
                    </>
                )}

                {category === 'consonant' && (
                    <>
                            <Text style={styles.card1Text}>க்</Text>
                    </>
                )}

            </ScrollView>
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
        backgroundColor: 'rgba(255, 209, 102, 0.3)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card1Text: {
        fontSize: 95,
        alignSelf: 'center',
        fontWeight: '400',
        height: '100%',
        top: '0%'
    },
    card2: {
        alignSelf: 'center',
        marginTop: 50,
        width: 305,
        height: 132,
        backgroundColor: 'rgba(255, 209, 102, 0.5)',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
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
});
export default SoundVowelScreen;
