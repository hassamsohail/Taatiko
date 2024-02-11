import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
export default function Secondary() {
  const [indexofData, setindexofData] = useState(0);
  const [search, setsearch] = React.useState();
  const renderItem = ({item}) => (
    <Image
      source={item.imageSource}
      style={{
        width: 78,
        height: 100,
        marginHorizontal: 3,
        marginVertical: 4, // Adjust margin as needed
      }}
    />
  );
 
  const data2 = [
    {id: '1', imageSource: require('../assets/SubImg.png')},
    {id: '2', imageSource: require('../assets/SubImg.png')},

    {id: '3', imageSource: require('../assets/SubImg.png')},

    {id: '4', imageSource: require('../assets/SubImg.png')},
    {id: '5', imageSource: require('../assets/SubImg.png')},
    {id: '6', imageSource: require('../assets/SubImg.png')},

    {id: '7', imageSource: require('../assets/SubImg.png')},

    {id: '8', imageSource: require('../assets/SubImg.png')},
    {id: '9', imageSource: require('../assets/SubImg.png')},
    {id: '10', imageSource: require('../assets/SubImg.png')},

    {id: '11', imageSource: require('../assets/SubImg.png')},

   
    // Add more items as needed
  ];

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
        flexDirection: 'row',
        paddingTop: 30,
      }}>
    
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
        }}>
       
       <View
              style={{
                  alignSelf: 'center',
                // marginHorizontal: 5,
                marginTop: 10,
              }}>
              <FlatList
                data={data2}
                keyExtractor={item => item.id}
                numColumns={4}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
            </View>
     
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  flatListItem: {},
  imageStyle: {
    width: 24,
    height: 24,
  },
  flatListContainer: {
    // paddingHorizontal: 10, // Adjust padding as needed
  },
  textStyle: {
    color: '#161C1C',
    fontSize: 14,
    // marginLeft: 10, // Adjust as needed
  },
  button: {
    width: '90%',
    height: 56,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#1BBFA0',
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    marginTop: 20, // Adjust the margin as needed
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Adjust the font size as needed
    fontWeight: '600',
  },
  loginDescription: {
    fontSize: 13,
    color: '#1BBFA0',
    fontWeight: '600',
  },

  input: {
    // borderWidth: 1,
    borderColor: '#FFB800',
    borderRadius: 5,

    height: 44,

    width: '100%',
    marginLeft: 5,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    justifyContent: 'flex-end', // Modal appears at the bottom
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.3, // Adjust the height as needed
  },
});
