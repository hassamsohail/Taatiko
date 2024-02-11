import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-paper';


export default function ForgetPassword({navigation}) {
  const [Email, setEmail] = React.useState('');
 

  return (
    <ScrollView>
      <View
        style={{
          height: Dimensions.get('window').height,
          backgroundColor: '#111111',
        }}>
        <View
          style={{
            width: 327,
            alignSelf: 'center',
          }}>
          <View style={{height: 20}} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              height: 40,
            }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 12,
                  backgroundColor: 'rgba(58, 58, 77, 0.3)',
                }}>
                <Image
                  source={require('../assets/Left.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            </Pressable>
          </View>
          <View style={{height: 20}} />
          <Text
            style={{
              fontSize: 32,
              fontWeight: '400',
              color: '#fff',
            }}>
          Forgot Password
          </Text>
          <View style={{height: 5}} />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#A1A1AC',
            }}>
        Enter your email and we will send OTP code to recovery the password
          </Text>

          <View style={{height: 60}} />
         
       
          <TextInput
            label="Email Address"
            value={Email}
            onChangeText={Email => setEmail(Email)}
            style={{
              backgroundColor: 'rgba(58, 58, 77, 0.3)',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderRadius: 10,
            }}
            underlineColor="transparent" // Active border color
            underlineColorAndroid="rgba(58, 58, 77, 0.3)"
            selectionColor="#BD1515" // Set selection color
            activeUnderlineColor="#BD1515"
            outlineColor="rgba(58, 58, 77, 0.3)"
            textColor="#fff"
          />
          <View style={{height: 15}} />
        
          <View style={{height: 60}} />
          <Pressable
            style={{
              width: 327,
            }}
            onPress={() => {
              navigation.navigate('OtpVerification');
            }}>
            <ImageBackground
              source={require('../assets/btn.png')}
              style={{
                width: '100%',
                height: 56,

                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
              Send Link
              </Text>
            </ImageBackground>
          </Pressable>
          

          
        </View>
      </View>
    </ScrollView>
  );
}
