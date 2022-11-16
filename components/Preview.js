import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import * as Animatable from 'react-native-animatable';
export default Player = () => {
  const {width, height} = Dimensions.get('screen');
  const [VideoPlay, setVideoPlay] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          backgroundColor: '#181818',
          width: '100%',
          padding: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 9,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          onLongPress={() => setVideoPlay(!VideoPlay)}
          onPress={() => navigation.navigate('VideoPlayer')}
          activeOpacity={0.2}>
          <View style={styles.backgroundVideo}>
            <Video
              style={[{...StyleSheet.absoluteFill}, {borderRadius: 8}]}
              ref={ref => {
                this.player = ref;
              }}
              paused={VideoPlay}
              poster={
                'https://thewestnews.com/wp-content/uploads/2022/01/Valorant_Brimstone.jpg'
              }
              selectedVideoTrack={{
                type: 'resolution',
                value: 480,
              }}
              source={{
                uri: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4',
              }}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 25,
              paddingVertical: 15,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row',marginBottom:10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontFamily: 'Valorant',
                  backgroundColor: '#fa4454',
                  padding: 10,
                  borderRadius: 20,
                }}>
                Bind
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontFamily: 'Valorant',
                  backgroundColor: '#fa4454',
                  padding: 10,
                  marginLeft: 10,
                  borderRadius: 20,
                }}>
                ATTACKER
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontFamily: 'Valorant',
                  backgroundColor: '#fa4454',
                  padding: 10,
                  marginLeft: 10,
                  borderRadius: 20,
                }}>
                Easy
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: '#fa4454',
                fontFamily: 'Valorant',
                marginTop: 10,
              }}>
              B Long Post Plant
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainPlayerView: {
    flex: 1,
    alignItems: 'center',
  },
  videoView: {
    width: '100%',
    backgroundColor: 'gray',
  },
  postTitle: {
    fontSize: 32,
    marginTop: 20,
    color: '#646464',
    fontFamily: 'Valorant',
  },
  postartist: {
    fontSize: 14,
    color: '#646464',
    marginTop: 10,
    fontFamily: 'Valorant',
  },
  backgroundVideo: {
    borderRadius: 10,
    aspectRatio: 16 / 9,
  },
});
