// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const GameSelectScreen = ({ navigation, route }) => {
//     const { language } = route.params;

//     const handleLevelSelect = (screen, level) => {
//         if (level) {
//             navigation.navigate(screen, { language: language, level: level });
//         } else {
//             navigation.navigate(screen, { language: language });
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>{language === 'Tamil' ? 'விளையாட்டின் அளவைத் தேர்ந்தெடுக்கவும்' : 'Select Game Level'}</Text>
//             <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('Game', 'Basic')}>
//                 <Text style={styles.buttonText}>{language === 'Tamil' ? 'அடிப்படை நிலை' : 'Basic Level'}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('Game', 'Medium')}>
//                 <Text style={styles.buttonText}>{language === 'Tamil' ? 'நடுத்தர நிலை' : 'Medium Level'}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('Game', 'Hard')}>
//                 <Text style={styles.buttonText}>{language === 'Tamil' ? 'கடினமான நிலை' : 'Hard Level'}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('FirstLetterGame')}>
//                 <Text style={styles.buttonText}>{language === 'Tamil' ? 'முதல் எழுத்து விளையாட்டு' : 'First Letter Game'}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('MatchingLettersGameScreen')}>
//                 <Text style={styles.buttonText}>{language === 'Tamil' ? 'இணைக்கும் எழுத்துகள் விளையாட்டு' : 'Matching Letters Game'}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
//                 <Text style={styles.closeButtonText}>{language === 'Tamil' ? 'நெருக்கமான' : 'Close'}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#4D86F7',
//     },
//     title: {
//         fontSize: 20,
//         marginBottom: 15,
//         textAlign: 'center',
//         color: '#FFD166',
//         fontWeight: 'bold',
//     },
//     button: {
//         backgroundColor: '#FFD166',
//         borderRadius: 10,
//         padding: 10,
//         marginVertical: 5,
//         width: '80%',
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#4D86F7',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     closeButton: {
//         marginTop: 20,
//     },
//     closeButtonText: {
//         color: 'red',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default GameSelectScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameSelectScreen = ({ navigation, route }) => {
    const { language } = route.params;

    const handleLevelSelect = (screen, level) => {
        if (level) {
            navigation.navigate(screen, { language: language, level: level });
        } else {
            navigation.navigate(screen, { language: language });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{language === 'Tamil' ? 'விளையாட்டின் அளவைத் தேர்ந்தெடுக்கவும்' : 'Select Game Level'}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('Game', 'Basic')}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'அடிப்படை நிலை' : 'Basic Level'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('Game', 'Medium')}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'நடுத்தர நிலை' : 'Medium Level'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleLevelSelect('Game', 'Hard')}>
                <Text style={styles.buttonText}>{language === 'Tamil' ? 'கடினமான நிலை' : 'Hard Level'}</Text>
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
                <Text style={styles.closeButtonText}>{language === 'Tamil' ? 'நெருக்கமான' : 'Close'}</Text>
            </TouchableOpacity>
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
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
        color: '#FFD166',
        fontWeight: 'bold',
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
});

export default GameSelectScreen;
