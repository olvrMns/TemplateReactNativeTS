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
import { DemoDBScreen } from './screens/demoDB.scren';
import { config } from 'dotenv';

export type DrawerParams = {
  Home: undefined;
  About: undefined;
  DemoDB: undefined;
}

const Drawer = createDrawerNavigator<DrawerParams>();
config();

export default class App extends Component<any, any, any> {
  
  render(): ReactNode {
      return(
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
              <Drawer.Screen name='Home' options={{title: "Home"}} component={HomeScreen}/>
              <Drawer.Screen name='About' options={{title: "About"}} component={AboutScreen}/>
              <Drawer.Screen name='DemoDB' options={{title: "DemoDB"}} component={DemoDBScreen}/>
            </Drawer.Navigator>
          </NavigationContainer>
      )
  }

}