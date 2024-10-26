import { StatusBar } from 'expo-status-bar';
import { Component, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home.screen';
import { AboutScreen } from './screens/about.screen';
import { DemoDBScreen } from './screens/demoDB.screen';
import { LoginSignupScreen } from './screens/loginSignup.screen';
import { ApplicationStorage } from './services/storage/applicationStorate';

export type DrawerParams = {
  Home: undefined;
  About: undefined;
  DemoDB: undefined;
  LoginSignup: undefined;
}

const Drawer = createDrawerNavigator<DrawerParams>();

// class CustomDrawerContent extends Component<any, any> {

//   render(): ReactNode {
//       return(
//         <DrawerContentScrollView>
//           <DrawerItemList {...this.state, this.props.navigation, this.props.descriptors}/>
//           <DrawerItem label="SignOut" onPress={async () => {
//             await ApplicationStorage.clearAuthenticationTokens();
//             this.props.navigation.navigate("LoginSignup");
//           }}/>
//         </DrawerContentScrollView>
//       )
//   }
// }

export default class App extends Component<any, any, any> {
  
  render(): ReactNode {
      return(
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='LoginSignup' screenOptions={{
              drawerActiveBackgroundColor: "#3dad40",
              headerTintColor: "#5da6a4",
              headerStyle: {backgroundColor: "#2f7050"},
              drawerStyle: {backgroundColor: "#73a65d"}
            }} drawerContent={props => {
              return (
                <DrawerContentScrollView>
                  <DrawerItemList {...props}/>
                  <DrawerItem label="SignOut" onPress={async () => {
                    await ApplicationStorage.clearAuthenticationTokens();
                    this.props.navigation.navigate("LoginSignup");
                  }}/>
                </DrawerContentScrollView>
              )
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