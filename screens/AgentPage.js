import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Divider from 'react-native-divider';
import Video from 'react-native-video';
import * as Animatable from 'react-native-animatable';
import Maps from './Maps';

export default function AgentPage({route}) {
  const AgentData = route.params.Agent;
  const [i, seti] = useState(0);
  let [index, setindex] = useState(0);
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={2}
        source={{
          uri: 'https://i.pinimg.com/originals/ca/f0/18/caf018c47475e82da279e02101b989cb.png',
        }}
        resizeMode="stretch"
        style={styles.image}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            backgroundColor: 'rgba(0,0,0,0.2)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 900,
          }}>
          <TouchableOpacity
            style={{
              borderColor: index == 0 ? '#fa4454' : 'black',
              padding: 10,
              borderBottomWidth: index == 0 ? 2 : 0,
            }}
            onPress={() => setindex(0)}>
            <Text
              style={{
                fontFamily: 'Valorant',
                color: index == 0 ? '#fa4454' : 'white',
              }}>
              ABOUT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: index == 1 ? '#fa4454' : 'black',
              padding: 10,
              marginLeft: 10,
              borderBottomWidth: index == 1 ? 2 : 0,
            }}
            onPress={() => setindex(1)}>
            <Text
              style={{
                fontFamily: 'Valorant',
                color: index == 1 ? '#fa4454' : 'white',
              }}>
              LINEUPS
            </Text>
          </TouchableOpacity>
        </View>

        <>
          {index == 0 ? (
            <>
              <Animatable.View
                useNativeDriver
                animation="fadeInDown"
                delay={200}
                style={styles.header}>
                <Image
                  source={{uri: AgentData[0].image_splash}}
                  style={{
                    resizeMode: 'contain',
                    width: '50%',
                    height: '150%',
                    zIndex: 90,
                    marginTop: 20,
                  }}
                />
              </Animatable.View>

              <Animatable.View
                useNativeDriver
                animation="fadeInUpBig"
                style={styles.footer}>
                <ScrollView>
                  <View style={{padding: 20, margin: 25}}>
                    <Animatable.View
                      useNativeDriver
                      animation="fadeInLeft"
                      delay={200}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          marginBottom: 10,
                        }}>
                        / / ROLE
                      </Text>
                    </Animatable.View>

                    <Animatable.View
                      animation="fadeInLeft"
                      delay={400}
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: 30,
                          fontFamily: 'Valorant',
                          letterSpacing: -2,
                        }}>
                        {AgentData[0].Role}
                      </Text>
                      <Image
                        source={{uri: AgentData[0].Role_Image}}
                        style={{
                          width: 20,
                          height: 20,
                          tintColor: 'black',
                          marginLeft: 5,
                        }}
                      />
                    </Animatable.View>

                    <Animatable.View
                      useNativeDriver
                      animation="fadeInLeft"
                      delay={400}
                      style={{marginTop: 30}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        / / BIOGRAPHY
                      </Text>
                    </Animatable.View>
                    <Animatable.View
                      animation="fadeInLeft"
                      delay={400}
                      style={{marginTop: 10}}>
                      <Text
                        style={{
                          color: 'gray',
                          fontWeight: '500',
                          flexWrap: 'wrap',
                        }}>
                        {AgentData[0].Biodata}
                      </Text>
                    </Animatable.View>
                    <Divider
                      borderColor="gray"
                      color="#fff"
                      orientation="center"
                    />

                    <View
                      style={{
                        flexDirection: 'column',
                        marginTop: 20,
                      }}>
                      <Animatable.Text
                        useNativeDriver
                        animation="fadeInLeft"
                        delay={600}
                        Text
                        style={{
                          color: '#000000',
                          fontSize: 30,
                          marginBottom: 20,
                          fontFamily: 'Valorant',
                        }}>
                        SPECIAL ABILITIES
                      </Animatable.Text>

                      <Animatable.View
                        useNativeDriver
                        animation="fadeInLeft"
                        delay={600}
                        style={{position: 'relative'}}
                        key={i}>
                        <Video
                          source={{uri: AgentData[0].Video[i]}}
                          resizeMode="contain"
                          ref={ref => {
                            this.player = ref;
                          }}
                          style={{
                            width: 400,
                            height: 200,
                            aspectRatio: 16 / 9,
                            alignItems: 'center',
                            alignSelf: 'center',
                          }}
                        />
                      </Animatable.View>
                    </View>
                    <Animatable.View
                      useNativeDriver
                      animation="fadeInUp"
                      delay={500}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginTop: 20,
                      }}>
                      {AgentData[0].Abilities.map((agent, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => seti(agent.id)}>
                          <View
                            style={{
                              borderWidth: 1,
                              padding: 10,
                              borderColor: i == agent.id ? 'gray' : 'lightgray',
                            }}>
                            <Image
                              source={{uri: agent.Ab_image}}
                              style={{
                                width: 40,
                                height: 40,
                                tintColor:
                                  i == agent.id ? 'black' : 'lightgray',
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                      ))}
                    </Animatable.View>
                  </View>
                </ScrollView>
              </Animatable.View>
            </>
          ) : (
            <Maps />
          )}
        </>
      </ImageBackground>
    </View>
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
    flex: 4,
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
