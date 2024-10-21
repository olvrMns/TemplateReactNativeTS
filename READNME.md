# PROCEDURE
- ## *in (node_modules/expo/AppEntry.js) modify (import App from '../../App' -> import App from '../../src/App')*
### **npx create-expo-app@latest -t (?)**
- npm install typescript@5.3.3
- npm install react-native-safe-area-context@4.10.5
- npm install react-native-reanimated@3.10.1
- [npm install react-native-pure-jwt @react-native-async-storage/async-storage@1.23.1](https://www.npmjs.com/package/react-native-pure-jwt)
> - [npm install react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) **(ALREADY HAS TYPES)** 
>    - [defaultExpoEnv](https://docs.expo.dev/guides/environment-variables/)
- nom install axios **(ALREADY HAS TYPES)**

> - [npm install nativewind](https://blog.logrocket.com/getting-started-nativewind-tailwind-react-native/)
>    - [*npm install --save-dev tailwindcss@3.3.2*](https://soulemanou-kunchiefuh-babanou.medium.com/ how-install-tailwind-css-in-a-react-native-typescript-project-645a22150e53) 
>    - *VSCode extenson => TailwindCSS Intelisence*
>    - [className FIX](https://stackoverflow.com/questions/77817553/typescript-error-with-nativewind-in-react-native-no-overload-matches-this-call)
>    - [DOC TAILWIND](https://tailwindcss.com/docs/border-radius)

##### NAVIGATION
- npm install @react-navigation/native **(COMPONENT BASED ROUTINNG LIBRARY)**
- npm install @react-navigation/drawer **(COMPONENT BASED ROUTING EXTENSION)**
    - [style](https://stackoverflow.com/questions/69725960/how-can-i-change-draweractivebackgroundcolor-in-react-navigation-6)
- npm install @react-navigation/bottom-tabs **(COMPONENT BASED ROUTING EXTENSION)**
- npm install @react-navigation/native-stack **(COMPONENT BASED ROUTING EXTENSION)**
- npm install react-native-screens@3.31.1 **(DEPENDENCY FOR ACTUAL NAVIGATION LIBRARIES)**
- npm install expo-router **(FILE BASED ROUTING)**

# ref
- [navigation typescript](https://medium.com/@vadymchernykh/react-native-navigation-with-typescript-3c4e6bfaf583)
- [navigation](https://reactnative.dev/docs/navigation)
- [drawer](https://reactnavigation.org/docs/drawer-based-navigation/)
- [structure](https://medium.com/@akshit5230/react-native-typescript-structuring-your-project-files-ca243ea216e9)
- [PATH ALIASES](https://docs.expo.dev/guides/typescript/)
- [jwt](https://medium.com/@josiahmahachi/jwt-authentication-in-react-native-an-odyssey-of-async-storage-axios-2719aac00eaa)
