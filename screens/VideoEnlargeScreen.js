import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Divider from 'react-native-divider';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';
export default VideoEnlargeScreen = () => {
  const {width, height} = Dimensions.get('screen');
  const [fullScreen, setFullScreen] = useState(false);

  const [VideoPlay, setVideoPlay] = useState(false);
  const FullScreen = () => {
    if (fullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    setFullScreen(!fullScreen);
  };
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={fullScreen ? styles.fullscreenVideo : styles.backgroundVideo}>
        <Video
          onFullscreenPlayerWillPresent={FullScreen}
          onFullscreenPlayerWillDismiss={FullScreen} // onEnd={NormalScreen}
          style={{...StyleSheet.absoluteFill}}
          controls={true}
          ref={ref => {
            this.player = ref;
          }}
          poster={
            'https://thewestnews.com/wp-content/uploads/2022/01/Valorant_Brimstone.jpg'
          }
          selectedVideoTrack={{
            type: 'resolution',
            value: 720,
          }}
          source={{
            uri: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4',
          }}
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            margin: 10,
            padding: 10,
          }}>
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
        <View style={{padding: 10}}>
          <Divider borderColor="white" orientation="center">
            <Text
              style={{
                fontSize: 20,
                color: '#fa4454',
                fontFamily: 'Valorant',
                marginTop: 10,
              }}>
              B Long Post Plant
            </Text>
          </Divider>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            padding: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Valorant',
              color: 'white',
              fontSize: 20,
              marginBottom: 10,
            }}>
            Location in Pearl
          </Text>

          <Image
            resizeMode="contain"
            source={{
              uri: 'https://static.wikia.nocookie.net/valorant/images/6/63/Pearl_minimap.png/revision/latest/scale-to-width-down/1000?cb=20220920131811',
            }}
            style={{width: 300, height: 300, alignSelf: 'center'}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Text
              style={{
                fontFamily: 'Valorant',
                color: 'white',
                fontSize: 20,
                marginTop: 30,
              }}>
              Steps to Follow
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            alignItems: 'center',
            margin: 10,
            backgroundColor: 'rgba(236,232,225,0.95)',
            padding: 8,
          }}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://staticg.sportskeeda.com/editor/2022/06/2b0bd-16564084914392-1920.jpg',
            }}
            style={{width: '100%', height: 220, borderRadius: 10}}
          />
          <Text
            style={{
              padding: 10,
              color: 'black',
              fontWeight: 'bold',
              flexWrap: 'wrap',
            }}>
            Left Image : Stand in the spot pinged
          </Text>
          <Text
            style={{
              padding: 10,
              color: 'black',
              fontWeight: 'bold',
              flexWrap: 'wrap',
            }}>
            Right Image : Align the highlighted part of the UI as follows
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            alignItems: 'center',
            margin: 10,
            backgroundColor: 'rgba(236,232,225,0.95)',
            padding: 8,
          }}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://staticg.sportskeeda.com/editor/2022/06/54438-16563329699124-1920.jpg',
            }}
            style={{width: '100%', height: 220, borderRadius: 10}}
          />
          <Text
            style={{
              padding: 10,
              color: 'black',
              fontWeight: 'bold',
              flexWrap: 'wrap',
            }}>
            Result : The molly lands in default
          </Text>
        </View>
      </ScrollView>
    </View>
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
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    aspectRatio: 16 / 9,
    elevation: 1,
  },
  backgroundVideo: {
    backgroundColor: 'black',
    aspectRatio: 16 / 9,
  },
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
});
