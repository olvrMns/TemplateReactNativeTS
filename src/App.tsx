import { StatusBar } from 'expo-status-bar';
import { Component, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home.screen';
import { AboutScreen } from './screens/about.screen';
import { DemoDBScreen } from './screens/demoDB.screen';
import { LoginScreen } from './screens/login.screen';

export type DrawerParams = {
  Home: undefined;
  About: undefined;
  DemoDB: undefined;
  Login: undefined;
}

const Drawer = createDrawerNavigator<DrawerParams>();

export default class App extends Component<any, any, any> {
  
  render(): ReactNode {
      return(
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='Login' screenOptions={{
              drawerActiveBackgroundColor: "#3dad40",
              headerTintColor: "#5da6a4",
              headerStyle: {backgroundColor: "#2f7050"},
              drawerStyle: {backgroundColor: "#73a65d"}
            }}>

              <Drawer.Screen name='Home' options={{title: "Home"}} component={HomeScreen}/>
              <Drawer.Screen name='About' options={{title: "About"}} component={AboutScreen}/>
              <Drawer.Screen name='DemoDB' options={{title: "DemoDB"}} component={DemoDBScreen}/>
              <Drawer.Screen name='Login' options={{title: "Login"}} component={LoginScreen}/>
            </Drawer.Navigator>
          </NavigationContainer>
      )
  }

}