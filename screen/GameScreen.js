import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';

const GameScreen = ({ navigation, route }) => {

    const { language } = route.params;

    console.log('Language ', language);

    const [questions, setQuestions] = useState([
        { id: 1, text: "அ___மா", answer: "ம்", selectedAnswer: "" },
        { id: 2, text: "அப்___", answer: "பா", selectedAnswer: "" },
        { id: 3, text: "___க்கா", answer: "அ", selectedAnswer: "" },
        { id: 4, text: "த___பி", answer: "ம்", selectedAnswer: "" },

        { id: 5, text: "ம___ம்", answer: "ர", selectedAnswer: "" },
        { id: 6, text: "ப___டம்", answer: "ட்", selectedAnswer: "" },
        { id: 7, text: "கப்___ல்", answer: "ப", selectedAnswer: "" },
        { id: 8, text: "பக___", answer: "ல்", selectedAnswer: "" },

        { id: 9, text: "ப___ம்", answer: "ழ", selectedAnswer: "" },
        { id: 10, text: "அ___ர்வு", answer: "தி", selectedAnswer: "" },
        { id: 11, text: "ஏ___கம்", answer: "க்", selectedAnswer: "" },
        { id: 12, text: "குடும்ப___", answer: "ம்", selectedAnswer: "" },

        { id: 13, text: "வ___ணம்", answer: "ண்", selectedAnswer: "" },
        { id: 14, text: "___தவு", answer: "க", selectedAnswer: "" },
        { id: 15, text: "சக்க___ம்", answer: "ர", selectedAnswer: "" },
        { id: 16, text: "பகல___ன்", answer: "வ", selectedAnswer: "" },

        { id: 17, text: "சூரி___ன்", answer: "ய", selectedAnswer: "" },
        { id: 18, text: "___ந்திரன்", answer: "ச", selectedAnswer: "" },
        { id: 19, text: "வர___பு", answer: "ம்", selectedAnswer: "" },
        { id: 20, text: "க___ம்", answer: "ர", selectedAnswer: "" },
    ]);

    const [answersSubmitted, setAnswersSubmitted] = useState(false);
    const [points, setPoints] = useState(0);
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

    useEffect(() => {
        const allAnswered = questions.every(question => question.selectedAnswer !== "");
        setAllQuestionsAnswered(allAnswered);
    }, [questions]);

    const handleHome = () => {
        navigation.navigate('Home', { language: language });
    };

    const handleAnswerChange = (itemValue, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].selectedAnswer = itemValue;
        setQuestions(updatedQuestions);
    };

    const shuffleQuestions = () => {
        const unansweredQuestions = questions.filter(question => question.selectedAnswer === "");

        const shuffledQuestions = [...unansweredQuestions].sort(() => Math.random());

        const allQuestions = shuffledQuestions.concat(questions.filter(question => question.selectedAnswer !== ""));

        setQuestions(allQuestions.slice(0, 20));
    };

    const submitAnswers = () => {
        let earnedPoints = 0;
        const wrongAnswers = [];
        questions.forEach(question => {
            if (question.selectedAnswer === question.answer) {
                earnedPoints += 5;
            } else {
                wrongAnswers.push({
                    question: question.text,
                    selectedAnswer: question.selectedAnswer,
                    correctAnswer: question.answer
                });
            }
        });

        setPoints(earnedPoints);
        setAnswersSubmitted(true);
        if(language === 'Tamil'){
            Alert.alert(
                'முடிவுகள்',
                `மொத்த மதிப்பெண்கள்: ${earnedPoints}\n\n` +
                (wrongAnswers.length > 0 ?
                    `தவறான பதில்கள்:\n${wrongAnswers.map(wrong => `கேள்வி: ${wrong.question}\உங்கள் பதில்: ${wrong.selectedAnswer}\சரியான பதில்: ${wrong.correctAnswer}`).join('\n\n')}` :
                    'All answers are correct!'),
                [
                    {
                        text: 'சரி', onPress: () => navigation.navigate('Learn', { language: language }) }
                ],
                { cancelable: false }
            );
        }else{
            Alert.alert(
                'Results',
                `Total Marks: ${earnedPoints}\n\n` +
                (wrongAnswers.length > 0 ?
                    `Wrong Answers:\n${wrongAnswers.map(wrong => `Question: ${wrong.question}\nYour Answer: ${wrong.selectedAnswer}\nCorrect Answer: ${wrong.correctAnswer}`).join('\n\n')}` :
                    'All answers are correct!'),
                [
                    { text: 'OK', onPress: () => navigation.navigate('Learn', { language: language }) }
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTopic}>{language === 'Tamil' ? 'ஒரு விளையாட்டு \nவிளையாடலாம்' : 'LET"S PLAY A\n GAME'}</Text>
            <Image style={styles.bgImg} source={require('../assets/bg.jpg')}></Image>
            <View style={styles.overlay}></View>
            <Image style={styles.dashImg} source={require('../assets/game2.png')}></Image>

            {questions.slice(0, 4).map((question, index) => (
                <View key={question.id} style={styles.questionContainer}>
                    <Picker
                        selectedValue={question.selectedAnswer}
                        onValueChange={(itemValue) => handleAnswerChange(itemValue, index)}
                        style={styles.picker}
                        dropdownIconColor="#000"
                    >
                        <Picker.Item label="___" value="" />
                        <Picker.Item label="ம்" value="ம்" />
                        <Picker.Item label="க்" value="க்" />
                        <Picker.Item label="ய" value="ய" />
                        <Picker.Item label="பா" value="பா" />
                        <Picker.Item label="ப" value="ப" />
                        <Picker.Item label="க" value="க" />
                        <Picker.Item label="அ" value="அ" />
                        <Picker.Item label="ர" value="ர" />
                        <Picker.Item label="ட்" value="ட்" />
                        <Picker.Item label="ழ" value="ழ" />
                        <Picker.Item label="தி" value="தி" />
                        <Picker.Item label="ண்" value="ண்" />
                        <Picker.Item label="வ" value="வ" />
                        <Picker.Item label="ச" value="ச" />
                        <Picker.Item label="ல்" value="ல்" />
                    </Picker>

                    {question.selectedAnswer === "" ? (
                        <Text style={styles.quest}>{question.text}</Text>
                    ) : (
                        <Text style={styles.quest}>{question.text.replace("___", question.selectedAnswer)}</Text>
                    )}
                </View>
            ))}

            <TouchableOpacity
                style={[styles.shuffleButton, !answersSubmitted && !allQuestionsAnswered && styles.disabledButton]}
                onPress={shuffleQuestions}
                disabled={answersSubmitted || allQuestionsAnswered}
            >
                <Text style={styles.shuffleButtonText}>Shuffle Questions</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.submitButton, allQuestionsAnswered && styles.enabledButton]}
                onPress={submitAnswers}
                disabled={!allQuestionsAnswered}
            >
                <Text style={styles.submitButtonText}>Submit Answers</Text>
            </TouchableOpacity>

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
        top: '15.4%',
        width: '100%',
        height: '80%',
        borderWidth: 1,
        borderRadius: 90,
    },
    dashImg: {
        alignSelf: 'center',
        top: '-83.5%',
        width: '70%',
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
    quest: {
        paddingTop: 5,
        top: '-550%',
        textAlign: 'center',
        color: '#05056E',
        fontWeight: 'bold',
        fontSize: 50,
    },
    picker: {
        bottom: 620,
        left: '-10%',
    },
    picker1: {
        bottom: '77%',
        left: '-10%',
    },
    picker2: {
        bottom: '75%',
        left: '-10%',
    },
    picker3: {
        bottom: '72%',
        left: '-10%',
    },
    picker4: {
        bottom: '70%',
        left: '-10%',
    },
    shuffleButton: {
        bottom: 600,
        left: '8%',
        backgroundColor: '#4D86F7',
        borderRadius: 10,
        width: '35%',
        height: '5%'
    },
    shuffleButtonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFD166',
        top: '15%'
    },
    submitButton: {
        bottom: 635,
        left: '55%',
        backgroundColor: '#4D86F7',
        borderRadius: 10,
        width: '35%',
        height: '5%'
    },
    submitButtonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 15,
        color: '#FFD166',
        top: '15%'
    },
    questionContainer: {
        marginBottom: -35,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        top: '28%',
        height: '80%',
        borderRadius: 85,
    }
});

export default GameScreen;