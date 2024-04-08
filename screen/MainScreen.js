import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Loader from '../component/Loader';
// Import CodePush


export default function Mainscreen() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [reloadInterval, setReloadInterval] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if (reloadInterval) {
        const intervalId = setInterval(() => {
          // Reload logic goes here
          console.log('Reloading...');
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
  
          // Restart the app using CodePush after a delay
          setTimeout(() => {
            // CodePush.restartApp();
          }, 2000);
        }, reloadInterval * 1000);
  
        // Store the interval ID in state
        return () => clearInterval(intervalId);
      }
    }, [reloadInterval]);
  
    const handleReloadInterval = (interval) => {
      setReloadInterval(interval);
      setModalVisible(false);
    };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#F0F0F0',
      }}>
      {/* <StatusBar style="dark" /> */}

      <ImageBackground
        style={{
          height: 197,
          width: '100%',
        }}
        source={require('../assets/bg.png')}
        resizeMode="contain">
        <Image
          source={require('../assets/Menu.png')}
          style={{
            width: 22,
            position: 'absolute',
            left: 10,
            top: 15,
            height: 22,
          }}
          resizeMode="contain"></Image>
        <View style={{ height: 60 }} />
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#fff',
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Thank you for using our app
        </Text>
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <Pressable
          style={{
            width: 155,
            height: 117,
          }}
          onPress={() => setModalVisible(true)}>
          <Image
            source={require('../assets/AutoReload.png')}
            style={styles.imageButton}
          />
        </Pressable>
        <Image
          source={require('../assets/ChangeNotification.png')}
          style={styles.imageButton}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Image
          source={require('../assets/Alwayskeepon.png')}
          style={styles.imageButton}
        />
        <Image
          source={require('../assets/Coming.png')}
          style={styles.imageButton}
        />
      </View>

      <View style={{ height: 15 }} />

      <View style={styles.pricingContainer}>
        <Text style={styles.pricingText}>Pricing</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Auto Reloading</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => handleReloadInterval(3)}>
                <Text>3 sec</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => handleReloadInterval(5)}>
                <Text>5 sec</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => handleReloadInterval(60)}>
                <Text>1 min</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {loading && <Loader text="Loading..." />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imageButton: {
    width: 155,
    height: 117,
  },
  pricingContainer: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 43,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  pricingText: {
    fontSize: 22,
    color: '#363636',
    fontWeight: '500',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
