# PROCEDURE
### **npx create-expo-app@latest -t (?)**
- npm install typescript@5.3.3
- npm install react-native-safe-area-context@4.10.5
- npm install mysql2 **(?)**
- npm install react-native-reanimated@3.10.1
- npm install react-native-dotenv **(ALREADY HAS TYPES)**

##### NAVIGATION
- npm install @react-navigation/native **(COMPONENT BASED ROUTINNG LIBRARY)**
- npm install @react-navigation/drawer **(COMPONENT BASED ROUTING EXTENSION)**
- npm install @react-navigation/bottom-tabs **(COMPONENT BASED ROUTING EXTENSION)**
- npm install @react-navigation/native-stack **(COMPONENT BASED ROUTING EXTENSION)**
- npm install react-native-screens@3.31.1 **(DEPENDENCY FOR ACTUAL NAVIGATION LIBRARIES)**
- npm install expo-router **(FILE BASED ROUTING)**


- in (node_modules/expo/AppEntry.js) modify (import App from '../../App' -> import App from '../../src/App') 

# ref
- *https://medium.com/@vadymchernykh/react-native-navigation-with-typescript-3c4e6bfaf583*
- *https://reactnative.dev/docs/navigation*
- *https://medium.com/@akshit5230/react-native-typescript-structuring-your-project-files-ca243ea216e9*
- *https://reactnavigation.org/docs/drawer-based-navigation/*
- *https://docs.expo.dev/guides/typescript/* **(PATH ALIASES)**