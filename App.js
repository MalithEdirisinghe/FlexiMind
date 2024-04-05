import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import LetterSoundScreen from './screen/LetterSoundScreen';
import RegisterScreen from './screen/RegisterScreen';
import LearnTamilScreen from './screen/LearnTamilScreen';
import SoundVowelScreen from './screen/SoundVowelScreen';

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
          name="Sound1"
          component={LetterSoundScreen}
          options={{ title: '', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
        <Stack.Screen
          name="Vowel"
          component={SoundVowelScreen}
          options={{ title: '', headerTintColor: '#FFD166', headerStyle: { backgroundColor: '#4D86F7' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;