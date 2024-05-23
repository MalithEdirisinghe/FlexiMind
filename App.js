import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import LetterSoundScreen from './screen/LetterSoundScreen';
import RegisterScreen from './screen/RegisterScreen';
import LearnTamilScreen from './screen/LearnTamilScreen';
import SoundVowelScreen from './screen/SoundVowelScreen';
import GameScreen from './screen/GameScreen';
import LetterWritingScreen from './screen/LetterWritingScreen';
import WriteLetterScreen from './screen/WriteLetterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn"
          component={LearnTamilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Writing"
          component={LetterWritingScreen}
          options={{ title: 'Tamil Letter Writing', headerTitleAlign: 'center', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
        <Stack.Screen
          name="Sound1"
          component={LetterSoundScreen}
          options={{ title: 'Tamil Letter Sounds', headerTitleAlign: 'center', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
        <Stack.Screen
          name="WritingLetter"
          component={WriteLetterScreen}
          options={{ title: 'Write Letter', headerTitleAlign: 'center', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
        <Stack.Screen
          name="Vowel"
          component={SoundVowelScreen}
          options={{ title: 'LISTEN SOUND', headerTitleAlign: 'center', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: 'PLAY GAME',headerTitleAlign: 'center', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;