import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const DashboardHome = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.textTopic}>FlexiMind</Text>
            <Image style={styles.bgImg} source={require('../assets/bg.jpg')}></Image>
            <View style={styles.overlay}></View>
            <Image style={styles.dashImg} source={require('../assets/dashboard.png')}></Image>
            {/* <Image style={styles.textImg} source={require('../assets/FlexiMind.png')}></Image> */}
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
        top: '22%',
        width: '100%',
        height: '80%',
        borderWidth: 1,
        borderRadius: 90,
    },
    dashImg: {
        alignSelf: 'center',
        top: '-65%',
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
        top: '12%'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: '28%',
        height: '80%',
        borderRadius: 85,
    }
});

export default DashboardHome;
