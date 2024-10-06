import { StatusBar } from 'expo-status-bar';
import { Component, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { style } from './styles/app.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home.screen';
import { AboutScreen } from './screens/about.screen';

const Stack = createNativeStackNavigator();

export default class App extends Component<any, any, any> {
  

  render(): ReactNode {
      return(
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Home' options={{title: "Home"}} component={HomeScreen}/>
              <Stack.Screen name='About' options={{title: "About"}} component={AboutScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
      )
  }

}