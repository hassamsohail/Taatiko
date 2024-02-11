import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from './screen/Login';
import CreateAccount from './screen/CreateAccount';
import ForgetPassword from './screen/ForgetPassword';
import MainScreen from './screen/MainScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Primary from './screen/Primary';
import Secondary from './screen/Secondary';
import Favorite from './screen/Favorite';
import Downloads from './screen/Downloads';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SplashScreenComponent = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
      }}
      source={require('./assets/Splash.png')}></ImageBackground>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {showSplash ? (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreenComponent}
              options={{
                headerShown: false,
              }}
            />
          ) : null}

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
            name="CreateAccount"
            component={CreateAccount}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ForgetPassword"
            component={ForgetPassword}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Tab"
            component={TabNavi}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const TabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 65, backgroundColor: '#111111'},
        // Adjust the height as needed
      }}
      initialRouteName="MainScreen">
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', marginTop: -3}}>
              <Image
                source={
                  focused
                    ? require('./assets/HomeRed.png')
                    : require('./assets/HomeM.png')
                }
                style={{width: 24, height: 24, marginTop: 5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#BD1515', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
                Home
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
      <Tab.Screen
        name="Primary"
        component={Primary}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', marginTop: -3}}>
              <Image
                source={
                  focused
                    ? require('./assets/VedioRed.png')
                    : require('./assets/VedioM.png')
                }
                style={{width: 24, height: 24, marginTop: 5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#BD1515', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
                Primary
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
      <Tab.Screen
        name="Secondary"
        component={Secondary}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', marginTop: -3}}>
              <Image
                source={
                  focused
                    ? require('./assets/VedioRed.png')
                    : require('./assets/VedioM.png')
                }
                style={{width: 24, height: 24, marginTop: 5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#BD1515', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
                Secondary
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', marginTop: -3}}>
              <Image
                source={
                  focused
                    ? require('./assets/HeartRed.png')
                    : require('./assets/HeartM.png')
                }
                style={{width: 24, height: 24, marginTop: 5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#BD1515', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
                Favorite
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center', marginTop: -3}}>
              <Image
                source={
                  focused
                    ? require('./assets/DownloadRed.png')
                    : require('./assets/DownloadM.png')
                }
                style={{width: 24, height: 24, marginTop: 5}}
              />
              <Text
                style={
                  focused
                    ? {marginTop: 2, color: '#BD1515', fontSize: 12}
                    : {marginTop: 2, color: '#9B9B9B', fontSize: 12}
                }>
                Downloads
              </Text>
            </View>
          ),
          tabBarLabel: () => null, // Disable the default icon name
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  splashImage: {
    width: 302,
    alignSelf: 'center',
    height: 216,
  },
  LGText: {
    width: 120,
    alignSelf: 'center',
    height: 39,
    marginTop: 6,
  },
});

export default App;
