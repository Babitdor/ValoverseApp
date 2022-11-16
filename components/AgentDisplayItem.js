import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

export default function AgentDisplayItem(props) {
  return (
    <Animatable.View
      animation="fadeInUp"
      style={{
        backgroundColor: '#181818',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 8,
      }}>
      <AgentAvatar Image={props.Agent.image} />
      <AgentName Name={props.Agent.agent} />
    </Animatable.View>
  );
}

const AgentAvatar = props => (
  <Image
    resizeMode="contain"
    style={{
      width: '100%',
      height: 200,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      resizeMode: 'contain',
    }}
    source={{
      uri: props.Image,
    }}
  />
);

const AgentName = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    }}>
    <Text
      style={{
        color: 'white',
        fontSize: 20,
        letterSpacing: 5,
        fontFamily: 'Valorant',
      }}>
      {props.Name}
    </Text>
  </View>
);
