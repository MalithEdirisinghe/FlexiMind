import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const LearnTamilScreen = ({navigation}) => {

    const handleHome = () => {
        navigation.navigate('Home');
    }

    const handleSound = () => {
        navigation.navigate('Sound1');
    }

    const handleGame = () => {
        navigation.navigate('Game');
    }

    const handleWrite = () => {
        navigation.navigate('Writing');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTopic}>LET’S LEARN{'\n'} TAMIL LETTERS</Text>
            <Image style={styles.bgImg} source={require('../assets/bg.jpg')}></Image>
            <View style={styles.overlay}></View>
            <Image style={styles.dashImg} source={require('../assets/learn.png')}></Image>

            <View style={styles.rectangle1}>
                <TouchableOpacity onPress={handleWrite}>
                <Image style={styles.writeImg} source={require('../assets/write-tamil.png')}/>
                <Text style={styles.text1}>Tamil Letter{'\n'} Writing</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rectangle2}>
            <TouchableOpacity onPress={handleSound}>
                <Image style={styles.listenImg} source={require('../assets/listen.png')} />
                <Text style={styles.text1}>Tamil Letter{'\n'} Sounds</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.rectangle3}>
                <TouchableOpacity onPress={handleGame}>
                <Image style={styles.listenImg} source={require('../assets/game.png')} />
                <Text style={styles.text1}>Tamil Letter{'\n'} Games</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomNavigate}>
                <TouchableOpacity onPress={handleHome}>
                    <Image style={styles.homeIcon} source={require('../assets/homeIcon.png')} />
                </TouchableOpacity>
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
        top: '17%',
        width: '100%',
        height: '80%',
        borderWidth: 1,
        borderRadius: 90,
    },
    dashImg: {
        alignSelf: 'center',
        top: '-73%',
        width: '40%',
        height: '25%',
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
        top: '8%'
    },
    rectangle1: {
        position: 'absolute',
        width: 320,
        height: 120,
        alignSelf: 'center',
        top: '41%',
        backgroundColor: '#4D86F7',
        borderRadius: 20,
    },
    writeImg: {
        width: 160,
        height: 90,
        left: '3%',
        top: '12%'
    },
    text1: {
        left: 150,
        fontWeight: '900',
        fontSize: 25,
        color: '#FFD166',
        bottom: '45%'
    },
    rectangle2: {
        position: 'absolute',
        width: 320,
        height: 120,
        alignSelf: 'center',
        top: '58.5%',
        backgroundColor: '#4D86F7',
        borderRadius: 20,
    },
    listenImg: {
        width: 60,
        height: 90,
        left: '5%',
        top: '10%'
    },
    rectangle3: {
        position: 'absolute',
        width: 320,
        height: 120,
        alignSelf: 'center',
        top: '76%',
        backgroundColor: '#4D86F7',
        borderRadius: 20,
    },
    bottomNavigate: {
        position: 'absolute',
        width: '100%',
        height: 40,
        top: '95.2%',
        backgroundColor: '#4D86F7',
    },
    homeIcon: {
        alignSelf: 'center',
        height: 28,
        width: 28,
        top: 8
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: '28%',
        height: '80%',
        borderRadius: 85,
    }
});

export default LearnTamilScreen;