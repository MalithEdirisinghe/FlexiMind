// import React, { useState } from "react";
// import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";

// const LearnTamilScreen = ({ navigation, route }) => {
//     const { language } = route.params;

//     const [modalVisible, setModalVisible] = useState(false);

//     const selectedStyles = language === 'Tamil' ? stylesTamil : stylesEnglish;

//     const handleHome = () => {
//         navigation.navigate('Home', { language: language });
//     };

//     const handleSound = () => {
//         navigation.navigate('Sound1', { language: language });
//     };

//     const handleGame = () => {
//         setModalVisible(true);
//     };

//     const handleWrite = () => {
//         navigation.navigate('Writing', { language: language });
//     };

//     const handleLevelSelect = (level) => {
//         setModalVisible(false);
//         navigation.navigate('Game', { language: language, level: level });
//     };

//     return (
//         <View style={selectedStyles.container}>
//             <Text style={selectedStyles.textTopic}>
//                 {language === 'Tamil' ? 'தமிழ் எழுத்துக்களை கற்போம்' : 'LET’S LEARN\nTAMIL LETTERS'}
//             </Text>
//             <Image style={selectedStyles.bgImg} source={require('../assets/bg.jpg')} />
//             <View style={selectedStyles.overlay}></View>
//             <Image style={selectedStyles.dashImg} source={require('../assets/learn.png')} />

//             <View style={selectedStyles.rectangle1}>
//                 <TouchableOpacity onPress={handleWrite}>
//                     <Image style={selectedStyles.writeImg} source={require('../assets/write-tamil.png')} />
//                     <Text style={selectedStyles.text1}>
//                         {language === 'Tamil' ? 'தமிழ் எழுத்து \nஎழுதுதல்' : 'Tamil Letter\nWriting'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={selectedStyles.rectangle2}>
//                 <TouchableOpacity onPress={handleSound}>
//                     <Image style={selectedStyles.listenImg} source={require('../assets/listen.png')} />
//                     <Text style={selectedStyles.text1}>
//                         {language === 'Tamil' ? 'தமிழ் எழுத்து \nஒலிகள்' : 'Tamil Letter\nSounds'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={selectedStyles.rectangle3}>
//                 <TouchableOpacity onPress={handleGame}>
//                     <Image style={selectedStyles.listenImg} source={require('../assets/game.png')} />
//                     <Text style={selectedStyles.text1}>
//                         {language === 'Tamil' ? 'தமிழ் எழுத்து\n  விளையாட்டு' : 'Tamil Letter\nGames'}
//                     </Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={selectedStyles.bottomNavigate}>
//                 <TouchableOpacity onPress={handleHome}>
//                     <Image style={selectedStyles.homeIcon} source={require('../assets/homeIcon.png')} />
//                 </TouchableOpacity>
//             </View>

//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={selectedStyles.modalContainer}>
//                     <View style={selectedStyles.modalView}>
//                         <Text style={selectedStyles.modalTitle}>{language === 'Tamil' ? 'விளையாட்டின் அளவைத் தேர்ந்தெடுக்கவும்' : 'Select Game Level'}</Text>
//                         <TouchableOpacity style={selectedStyles.modalButton} onPress={() => handleLevelSelect('Basic')}>
//                             <Text style={selectedStyles.modalButtonText}>{language === 'Tamil' ? 'அடிப்படை நிலை' : 'Basic Level'}</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={selectedStyles.modalButton} onPress={() => handleLevelSelect('Medium')}>
//                             <Text style={selectedStyles.modalButtonText}>{language === 'Tamil' ? 'நடுத்தர நிலை' : 'Medium Level'}</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={selectedStyles.modalButton} onPress={() => handleLevelSelect('Hard')}>
//                             <Text style={selectedStyles.modalButtonText}>{language === 'Tamil' ? 'கடினமான நிலை' : 'Hard Level'}</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={selectedStyles.closeButton} onPress={() => setModalVisible(false)}>
//                             <Text style={selectedStyles.closeButtonText}>{language === 'Tamil' ? 'நெருக்கமான' : 'Close'}</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const stylesEnglish = StyleSheet.create({
//     container: {
//         position: 'relative',
//         width: 'auto',
//         height: '100%',
//         backgroundColor: '#4D86F7',
//     },
//     textTopic: {
//         textAlign: 'center',
//         fontWeight: '900',
//         fontSize: 35,
//         color: '#FFD166',
//         top: '8%'
//     },
//     bgImg: {
//         alignSelf: 'center',
//         top: '17%',
//         width: '100%',
//         height: '80%',
//         borderWidth: 1,
//         borderRadius: 90,
//     },
//     dashImg: {
//         alignSelf: 'center',
//         top: '-73%',
//         width: '40%',
//         height: '25%',
//     },
//     text1: {
//         left: 150,
//         fontWeight: '900',
//         fontSize: 25,
//         color: '#FFD166',
//         bottom: '45%'
//     },
//     rectangle1: {
//         position: 'absolute',
//         width: 320,
//         height: 120,
//         alignSelf: 'center',
//         top: '41%',
//         backgroundColor: '#4D86F7',
//         borderRadius: 20,
//     },
//     writeImg: {
//         width: 160,
//         height: 90,
//         left: '3%',
//         top: '12%'
//     },
//     rectangle2: {
//         position: 'absolute',
//         width: 320,
//         height: 120,
//         alignSelf: 'center',
//         top: '58.5%',
//         backgroundColor: '#4D86F7',
//         borderRadius: 20,
//     },
//     listenImg: {
//         width: 60,
//         height: 90,
//         left: '5%',
//         top: '10%'
//     },
//     rectangle3: {
//         position: 'absolute',
//         width: 320,
//         height: 120,
//         alignSelf: 'center',
//         top: '76%',
//         backgroundColor: '#4D86F7',
//         borderRadius: 20,
//     },
//     bottomNavigate: {
//         position: 'absolute',
//         width: '100%',
//         height: 40,
//         top: '95.2%',
//         backgroundColor: '#4D86F7',
//     },
//     homeIcon: {
//         alignSelf: 'center',
//         height: 28,
//         width: 28,
//         top: 8
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(255, 255, 255, 0.7)',
//         top: '28%',
//         height: '80%',
//         borderRadius: 85,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalView: {
//         width: 300,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalTitle: {
//         fontSize: 20,
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     modalButton: {
//         backgroundColor: '#4D86F7',
//         borderRadius: 10,
//         padding: 10,
//         marginVertical: 5,
//         width: '100%',
//         alignItems: 'center',
//     },
//     modalButtonText: {
//         color: '#FFD166',
//         fontSize: 18,
//         fontWeight: '500'
//     },
//     closeButton: {
//         marginTop: 10,
//     },
//     closeButtonText: {
//         color: 'red',
//         fontSize: 18,
//     },
// });

// const stylesTamil = StyleSheet.create({
//     container: {
//         position: 'relative',
//         width: 'auto',
//         height: '100%',
//         backgroundColor: '#4D86F7',
//     },
//     textTopic: {
//         textAlign: 'center',
//         fontWeight: '900',
//         fontSize: 35,
//         color: '#FFD166',
//         top: '8%'
//     },
//     bgImg: {
//         alignSelf: 'center',
//         top: '17%',
//         width: '100%',
//         height: '80%',
//         borderWidth: 1,
//         borderRadius: 90,
//     },
//     dashImg: {
//         alignSelf: 'center',
//         top: '-73%',
//         width: '40%',
//         height: '25%',
//     },
//     text1: {
//         left: 122,
//         fontWeight: '900',
//         fontSize: 23,
//         color: '#FFD166',
//         bottom: '45%'
//     },
//     rectangle1: {
//         position: 'absolute',
//         width: 320,
//         height: 120,
//         alignSelf: 'center',
//         top: '41%',
//         backgroundColor: '#4D86F7',
//         borderRadius: 20,
//     },
//     writeImg: {
//         width: 160,
//         height: 90,
//         left: '3%',
//         top: '12%'
//     },
//     rectangle2: {
//         position: 'absolute',
//         width: 320,
//         height: 120,
//         alignSelf: 'center',
//         top: '58.5%',
//         backgroundColor: '#4D86F7',
//         borderRadius: 20,
//     },
//     listenImg: {
//         width: 60,
//         height: 90,
//         left: '5%',
//         top: '10%'
//     },
//     rectangle3: {
//         position: 'absolute',
//         width: 320,
//         height: 120,
//         alignSelf: 'center',
//         top: '76%',
//         backgroundColor: '#4D86F7',
//         borderRadius: 20,
//     },
//     bottomNavigate: {
//         position: 'absolute',
//         width: '100%',
//         height: 40,
//         top: '95.2%',
//         backgroundColor: '#4D86F7',
//     },
//     homeIcon: {
//         alignSelf: 'center',
//         height: 28,
//         width: 28,
//         top: 8
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(255, 255, 255, 0.7)',
//         top: '28%',
//         height: '80%',
//         borderRadius: 85,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalView: {
//         width: 300,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalTitle: {
//         fontSize: 20,
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     modalButton: {
//         backgroundColor: '#4D86F7',
//         borderRadius: 10,
//         padding: 10,
//         marginVertical: 5,
//         width: '100%',
//         alignItems: 'center',
//     },
//     modalButtonText: {
//         color: 'white',
//         fontSize: 18,
//     },
//     closeButton: {
//         marginTop: 10,
//     },
//     closeButtonText: {
//         color: 'red',
//         fontSize: 18,
//     },
// });

// export default LearnTamilScreen;

import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";

const LearnTamilScreen = ({ navigation, route }) => {
    const { language } = route.params;

    const selectedStyles = language === 'Tamil' ? stylesTamil : stylesEnglish;

    const handleHome = () => {
        navigation.navigate('Home', { language: language });
    };

    const handleSound = () => {
        navigation.navigate('Sound1', { language: language });
    };

    const handleGame = () => {
        navigation.navigate('GameSelect', { language: language });
    };

    const handleWrite = () => {
        navigation.navigate('Writing', { language: language });
    };

    return (
        <View style={selectedStyles.container}>
            <Text style={selectedStyles.textTopic}>
                {language === 'Tamil' ? 'தமிழ் எழுத்துக்களை கற்போம்' : 'LET’S LEARN\nTAMIL LETTERS'}
            </Text>
            <Image style={selectedStyles.bgImg} source={require('../assets/bg.jpg')} />
            <View style={selectedStyles.overlay}></View>
            <Image style={selectedStyles.dashImg} source={require('../assets/learn.png')} />

            <View style={selectedStyles.rectangle1}>
                <TouchableOpacity onPress={handleWrite}>
                    <Image style={selectedStyles.writeImg} source={require('../assets/write-tamil.png')} />
                    <Text style={selectedStyles.text1}>
                        {language === 'Tamil' ? 'தமிழ் எழுத்து \nஎழுதுதல்' : 'Tamil Letter\nWriting'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={selectedStyles.rectangle2}>
                <TouchableOpacity onPress={handleSound}>
                    <Image style={selectedStyles.listenImg} source={require('../assets/listen.png')} />
                    <Text style={selectedStyles.text1}>
                        {language === 'Tamil' ? 'தமிழ் எழுத்து \nஒலிகள்' : 'Tamil Letter\nSounds'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={selectedStyles.rectangle3}>
                <TouchableOpacity onPress={handleGame}>
                    <Image style={selectedStyles.listenImg} source={require('../assets/game.png')} />
                    <Text style={selectedStyles.text1}>
                        {language === 'Tamil' ? 'தமிழ் எழுத்து\n  விளையாட்டு' : 'Tamil Letter\nGames'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={selectedStyles.bottomNavigate}>
                <TouchableOpacity onPress={handleHome}>
                    <Image style={selectedStyles.homeIcon} source={require('../assets/homeIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const stylesEnglish = StyleSheet.create({
    container: {
        position: 'relative',
        width: 'auto',
        height: '100%',
        backgroundColor: '#4D86F7',
    },
    textTopic: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 35,
        color: '#FFD166',
        top: '8%'
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
    text1: {
        left: 150,
        fontWeight: '900',
        fontSize: 25,
        color: '#FFD166',
        bottom: '45%'
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
    },
});

const stylesTamil = StyleSheet.create({
    container: {
        position: 'relative',
        width: 'auto',
        height: '100%',
        backgroundColor: '#4D86F7',
    },
    textTopic: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 35,
        color: '#FFD166',
        top: '8%'
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
    text1: {
        left: 122,
        fontWeight: '900',
        fontSize: 23,
        color: '#FFD166',
        bottom: '45%'
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
    },
});

export default LearnTamilScreen;
