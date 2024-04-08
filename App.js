import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import Login from './screen/Login';
import Mainscreen from './screen/MainScreen';

const Stack = createNativeStackNavigator();
// const SplashScreenComponent = () => {
//   return (
//     <ImageBackground
   
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         resizeMode: 'cover',
//       }}
//       source={require('./assets/Splash.jpg')}
//       >
      
      
//     </ImageBackground>
//   );
// };

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator >
          {/* {showSplash ? (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreenComponent}
              options={{
                headerShown: false,
              }}
            />
          ) : null} */}
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Mainscreen"
            component={Mainscreen}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  splashImage: {
    width:302,
    alignSelf: 'center',
    height: 216,
  },
  LGText: {
    width:120,
    alignSelf: 'center',
    height: 39,
    marginTop:6
  },
});

export default App;
