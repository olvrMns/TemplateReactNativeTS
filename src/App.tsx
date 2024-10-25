import { StatusBar } from 'expo-status-bar';
import { Component, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home.screen';
import { AboutScreen } from './screens/about.screen';
import { DemoDBScreen } from './screens/demoDB.screen';
import { LoginSignupScreen } from './screens/loginSignup.screen';

export type DrawerParams = {
  Home: undefined;
  About: undefined;
  DemoDB: undefined;
  LoginSignup: undefined;
}

const Drawer = createDrawerNavigator<DrawerParams>();

export default class App extends Component<any, any, any> {
  
  render(): ReactNode {
      return(
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='LoginSignup' screenOptions={{
              drawerActiveBackgroundColor: "#3dad40",
              headerTintColor: "#5da6a4",
              headerStyle: {backgroundColor: "#2f7050"},
              drawerStyle: {backgroundColor: "#73a65d"}
            }}>

              <Drawer.Screen name='Home' options={{title: "Home"}} component={HomeScreen}/>
              <Drawer.Screen name='About' options={{title: "About"}} component={AboutScreen}/>
              <Drawer.Screen name='DemoDB' options={{title: "DemoDB"}} component={DemoDBScreen}/>
              <Drawer.Screen name='LoginSignup' options={{title: "TEST_LoginSignup"}} component={LoginSignupScreen}/>
            </Drawer.Navigator>
          </NavigationContainer>
      )
  }

}