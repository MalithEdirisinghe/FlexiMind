import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null,
          })}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null,
          })}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerShown: false,
            headerLeft: null,
          })}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
