import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Divider from 'react-native-divider';
import React, {useRef} from 'react';
import * as Animatable from 'react-native-animatable';
import {GameMaps} from './Maps.json';
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('window').width;
export default function Maps() {
  const navigation = useNavigation();
  return (
    <>
      <Animatable.View
        useNativeDriver
        animation="fadeInDown"
        delay={200}
        style={styles.header}
      />

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Animatable.View
          useNativeDriver
          animation="fadeInLeft"
          delay={600}
          style={{
            flexDirection: 'column',
            marginTop: 30,
            paddingHorizontal: 10,
            marginHorizontal: 30,
          }}>
          <Text
            Text
            style={{
              color: '#000000',
              fontSize: 35,
              fontFamily: 'Valorant',
            }}>
            // MAPS
          </Text>
          <Divider borderColor="gray" color="#fff" orientation="left" />
        </Animatable.View>

        <Animated.FlatList
          data={GameMaps}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          renderItem={({item, index}) => {
            return (
              <View
                useNativeDriver
                animation="fadeInUp"
                delay={500}
                style={{
                  width,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Animatable.View
                  animation="fadeInRight"
                  delay={600}
                  style={{
                    flex: 0.7,
                    padding: 20,
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Valorant',
                      fontSize: 25,
                      flexWrap: 'wrap',
                    }}>
                    {item.Name}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '500',
                      fontSize: 15,
                      flexWrap: 'wrap',
                    }}>
                    {item.Description}
                  </Text>
                </Animatable.View>

                <Animatable.View
                  useNativeDriver
                  animation="fadeInUp"
                  delay={600}
                  style={{padding: 30}}>
                  <Image
                    style={{
                      width: width * 0.9,
                      height: 210,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                    source={{
                      uri: item.image,
                    }}
                  />
                </Animatable.View>
                <Animatable.View
                  useNativeDriver
                  animation="fadeInRight"
                  delay={800}
                  style={{
                    alignSelf: 'flex-start',
                    paddingHorizontal: 20,
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    LineUps Available
                  </Text>
                </Animatable.View>
                <Animatable.View
                  useNativeDriver
                  animation="fadeInLeft"
                  delay={800}
                  style={{
                    alignSelf: 'flex-start',
                    paddingHorizontal: 20,
                    marginHorizontal: 15,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                    }}>
                    Attacker : 5
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                    }}>
                    Defender : 5
                  </Text>
                </Animatable.View>
                <Animatable.View
                  useNativeDriver
                  animation="fadeInUp"
                  delay={800}
                  style={{
                    backgroundColor: '#fa4454',
                    width: '87%',
                    padding: 16,
                    margin: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,

                    elevation: 9,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LineUps')}
                    activeOpacity={0.7}>
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 25,
                          fontFamily: 'Valorant',
                        }}>
                        Proceed
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Animatable.View>
              </View>
            );
          }}
        />
      </Animatable.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  header: {
    zIndex: 1,
    flex: 1,
    alignItems: 'flex-end',
  },
  footer: {
    flex: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(236,232,225,0.95)',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
