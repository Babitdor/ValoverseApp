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
import React from 'react';
import * as Animatable from 'react-native-animatable';
import AD_Tab from '../components/AD_Tabs';
import Preview from '../components/Preview';
const width = Dimensions.get('window').width;
export default function LineUpsScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={1}
        source={{
          uri: 'https://i.pinimg.com/originals/ca/f0/18/caf018c47475e82da279e02101b989cb.png',
        }}
        resizeMode="cover"
        style={styles.image}>
        <Animatable.View
          delay={400}
          useNativeDriver
          animation="fadeInUp"
          style={styles.header}>
          <Image
            style={{width: '100%', height: 160}}
            resizeMode="cover"
            source={{
              uri: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd0a2437fb09ebde4/62a2805b58931557ed9f7c9e/PearlLoadingScreen_MapFeaturedImage_930x522.png',
            }}
          />
          <Text
            style={{
              zIndex: 2,
              fontSize: 40,
              color: 'white',
              position: 'absolute',
              fontFamily: 'Valorant',
              top: '40%',
            }}>
            PEARL
          </Text>
        </Animatable.View>
        <Animatable.View
          useNativeDriver
          animation="fadeInUpBig"
          style={styles.footer}>
          <View style={{marginHorizontal: 20}}>
            <View style={{padding: 10, alignSelf: 'center'}}>
              <AD_Tab />
            </View>
            <View>
              <Divider borderColor="gray" orientation="center">
                <Text
                  style={{
                    fontSize: 20,
                    color: '#FD4556',
                    textAlign: 'center',
                    fontFamily: 'Valorant',
                    shadowColor: '#000',
                    textShadowColor: 'rgba(0, 0, 0, 0.3)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 5,
                  }}>
                  ATTACKER
                </Text>
              </Divider>
            </View>
          </View>
          <ScrollView
            style={{paddingHorizontal: 8, paddingVertical: 20}}
            showsVerticalScrollIndicator={false}>
            <Preview />
            <Divider borderColor="gray" orientation="center" />
            <Preview />
            <Divider borderColor="gray" orientation="center" />
            <Preview />
            <Divider borderColor="gray" orientation="center" />
            <Preview />
            <Divider borderColor="gray" orientation="center" />
          </ScrollView>
        </Animatable.View>
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
    alignItems: 'center',
  },
  footer: {
    flex: 6,
    zIndex: 999,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
    backgroundColor: 'rgba(236,232,225,0.95)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
