# PROCEDURE
- ## *in (node_modules/expo/AppEntry.js) modify (import App from '../../App' -> import App from '../../src/App')*
### **npx create-expo-app@latest -t (?)**
- typescript@5.3.3
- react-native-safe-area-context@4.10.5
- react-native-reanimated@3.10.1
- @react-native-async-storage/async-storage@1.23.1
- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) **(ALREADY HAS TYPES)** 
    - [defaultExpoEnv](https://docs.expo.dev/guides/environment-variables/)
- axios **(ALREADY HAS TYPES)**
> - [nativewind](https://blog.logrocket.com/getting-started-nativewind-tailwind-react-native/)
>    - [--save-dev tailwindcss@3.3.2](https://soulemanou-kunchiefuh-babanou.medium.com/how-install-tailwind-css-in-a-react-native-typescript-project-645a22150e53) 
>    - *VSCode extenson => TailwindCSS Intelisence*
>    - [className FIX](https://stackoverflow.com/questions/77817553/typescript-error-with-nativewind-in-react-native-no-overload-matches-this-call)
>    - [DOC TAILWIND](https://tailwindcss.com/docs/border-radius)

##### NAVIGATION
- @react-navigation/native **(COMPONENT BASED ROUTINNG LIBRARY)**
- @react-navigation/drawer **(COMPONENT BASED ROUTING EXTENSION)**
    - [DRAWER style](https://stackoverflow.com/questions/69725960/how-can-i-change-draweractivebackgroundcolor-in-react-navigation-6)
- @react-navigation/bottom-tabs **(COMPONENT BASED ROUTING EXTENSION)**
- @react-navigation/native-stack **(COMPONENT BASED ROUTING EXTENSION)**
- react-native-screens@3.31.1 **(DEPENDENCY FOR ACTUAL NAVIGATION LIBRARIES)**
- expo-router **(FILE BASED ROUTING)**

# ref
- [navigation typescript](https://medium.com/@vadymchernykh/react-native-navigation-with-typescript-3c4e6bfaf583)
- [navigation](https://reactnative.dev/docs/navigation)
- [drawer](https://reactnavigation.org/docs/drawer-based-navigation/)
- [structure](https://medium.com/@akshit5230/react-native-typescript-structuring-your-project-files-ca243ea216e9)
- [PATH ALIASES](https://docs.expo.dev/guides/typescript/)
- [jwt *(alternative)*](https://medium.com/@josiahmahachi/jwt-authentication-in-react-native-an-odyssey-of-async-storage-axios-2719aac00eaa)
- [react-native-pure-jwt *(alternative)*](https://www.npmjs.com/package/react-native-pure-jwt)

> # SET IN .ENV
> *ADDR_BD=*
> *AUTH_TOKEN_KEY=*

# TODO
- DARK/WHITE MODE TOKEN