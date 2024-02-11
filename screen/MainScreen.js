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
export default function MainScreen() {
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
  const data1 = [
    {id: '1', imageSource: require('../assets/SubImg.png')},
    {id: '2', imageSource: require('../assets/SubImg.png')},

    {id: '3', imageSource: require('../assets/SubImg.png')},

    {id: '4', imageSource: require('../assets/SubImg.png')},

    // Add more items as needed
  ];
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

    {id: '12', imageSource: require('../assets/SubImg.png')},
    {id: '13', imageSource: require('../assets/SubImg.png')},
    {id: '14', imageSource: require('../assets/SubImg.png')},
    {id: '15', imageSource: require('../assets/SubImg.png')},

    // Add more items as needed
  ];
  const data = [
    {id: '1', label: 'All'},
    {id: '2', label: 'English'},
    {id: '3', label: 'Somali'},
    {id: '4', label: 'Arabic'},
    {id: '5', label: 'Computer'},
    {id: '6', label: 'Math'},
    {id: '7', label: 'Chemistry'},
    {id: '8', label: 'Biology'},
    {id: '9', label: 'Social'},
    // Add more data items as needed
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
          width: '25%',
          //   alignSelf: 'center',
          height: '100%',
          backgroundColor: '#111111',
        }}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setindexofData(index)}
              style={
                {
                  // justifyContent: 'center',
                }
              }>
              <View
                style={{
                  width: '100%',
                  paddingVertical: 5,
                  height: 34,
                  backgroundColor: indexofData == index ? '#000000' : '#111111',
                  justifyContent: 'center',
                  paddingLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    textDecorationLine:
                      indexofData == index ? 'underline' : null,
                    color: '#fff',
                  }}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          width: '75%',
          //   alignSelf: 'center',
          height: '100%',
          backgroundColor: '#000000',
        }}>
        <View
          style={{
            height: 10,
          }}
        />
        <View
          style={{
            width: '100%',
            // alignSelf: 'center',
            // marginTop: 20,

            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginLeft: 10,
              width: '78%',
              borderWidth: 1,
              borderColor: '#222222',
              height: 40,
              // backgroundColor: '#fff',
              backgroundColor: '#222222',

              borderRadius: 10,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/Search.png')}
              style={{
                width: 14,
                height: 14,
              }}></Image>
            <TextInput
              style={styles.input}
              onChangeText={text => setsearch(text)}
              placeholderTextColor="#9AA0B4"
              value={search}
              placeholder="Search items"
              autocorrect={false}
              autoCapitalize="none"
            />
          </View>

          <Image
            source={require('../assets/AV.png')}
            style={{
              width: 36,
              height: 36,
            }}></Image>
        </View>
        {indexofData == 0 ? (
          <ScrollView>

          <View
          style={{
            marginVertical:10
          }}
          >
         

            <View
              style={{
                alignSelf: 'center',
                width: '90%',
                marginTop: 10,
              }}>
              <Image
                source={require('../assets/MainImg.png')}
                style={{
                  width: '100%',
                  height: 159,
                }}></Image>

              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#fff',
                  }}>
                  Popular on nasiye
                </Text>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#fff',
                  }}>
                  View All
                </Text>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />
              <FlatList
                data={data1}
                keyExtractor={item => item.id}
                horizontal
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#fff',
                  }}>
                  Trending Now
                </Text>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#fff',
                  }}>
                  View All
                </Text>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />
              <FlatList
                data={data1}
                keyExtractor={item => item.id}
                horizontal
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#fff',
                  }}>
                  Recommended
                </Text>
                <Text
                  style={{
                    fontSize: 13,

                    color: '#fff',
                  }}>
                  View All
                </Text>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />
              <FlatList
                data={data1}
                keyExtractor={item => item.id}
                horizontal
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
            </View>
          </View>
          </ScrollView>

        ) : indexofData == 1 ? (
          <View>
            <View
              style={{
                marginHorizontal: 5,
                marginTop: 10,
              }}>
              <FlatList
                data={data2}
                keyExtractor={item => item.id}
                numColumns={3}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
            </View>
          </View>
        ) : indexofData == 2 ? (
          <View>
            <View
              style={{
                marginHorizontal: 5,
                marginTop: 10,
              }}>
              <FlatList
                data={data2}
                keyExtractor={item => item.id}
                numColumns={3}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
            </View>
          </View>
        ) : null}
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
