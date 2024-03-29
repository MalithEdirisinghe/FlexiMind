import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const handleLogin = () => {

    }
    const handleCreate = () => {
        navigation.navigate('Login');
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={styles.textTopic}>Register</Text>
                <Image style={styles.bgImg} source={require('../assets/bg.jpg')}></Image>
                <View style={styles.overlay}></View>
                <Text style={styles.textWelcome}>Welcome back to FlexiMind</Text>
                <Text style={styles.textEmail}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.textEmail}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
                    {showPassword ? (
                        <Image
                            source={require('../assets/eye.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ) : (
                        <Image
                            source={require('../assets/eyeClose.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )}
                </TouchableOpacity>
                
                <Text style={styles.textEmail}>Confirm Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword1}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <TouchableOpacity style={styles.eyeIcon1} onPress={togglePasswordVisibility1}>
                    {showPassword1 ? (
                        <Image
                            source={require('../assets/eye.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ) : (
                        <Image
                            source={require('../assets/eyeClose.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginTxt}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAcc} onPress={handleCreate}>
                    <Text style={styles.createTxt}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,

    },
    container: {
        position: 'relative',
        width: 'auto',
        height: 800,
        backgroundColor: '#4D86F7',
    },
    bgImg: {
        alignSelf: 'center',
        top: '15%',
        width: '100%',
        height: '90%',
        borderWidth: 1,
        borderRadius: 90,
    },
    textTopic: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 35,
        color: '#FFD166',
        top: '12%'
    },
    textWelcome: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 25,
        color: '#4D86F7',
        bottom: '70%'
    },
    textEmail: {
        left: '11%',
        fontWeight: '900',
        fontSize: 25,
        color: '#05056E',
        bottom: '60%'
    },
    input: {
        bottom: '60%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderColor: '#05056E',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: 300,
        left: '11%',
    },

    eyeIcon: {
        position: 'absolute',
        right: '15%',
        bottom: '40%'
    },
    eyeIcon1: {
        position: 'absolute',
        right: '15%',
        bottom: '28%'
    },
    eyeIconText: {
        fontSize: 20,
    },
    loginBtn: {
        alignSelf: 'center',
        bottom: '55%',
        backgroundColor: '#4D86F7',
        width: '30%',
        height: '5%',
        padding: 10,
        borderRadius: 10
    },
    loginTxt: {
        color: '#FFD166',
        fontSize: 15,
        height: 37.5,
        textAlign: 'center',
        fontWeight: '800'
    },

    createAcc: {
        alignSelf: 'center',
        bottom: '50%',
        borderRadius: 10
    },
    createTxt: {
        color: '#4D86F7',
        fontSize: 15,
        height: 37.5,
        textAlign: 'center',
        fontWeight: '800'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: '21%',
        height: '90%',
        borderRadius: 85,
    }
});

export default RegisterScreen;
