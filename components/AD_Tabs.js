import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';

export default function AD_Tab() {
  const [activeTab, setActiveTab] = useState('Attacker');
  return (
    <View style={styles.headerTabs}>
      <HeaderButton
        text={'Attacker'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={'Defender'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setActiveTab(props.text)}
      style={{
        backgroundColor: props.activeTab === props.text ? '#FD4556' : 'black',
        borderColor: props.activeTab === props.text ? '#BD3944' : 'transparent',
        borderWidth: 1,
        borderRadius: 2,
        marginHorizontal: 2,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : '#fa4454',
          fontSize: 14,
          fontFamily: 'Valorant',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerTabs: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
    alignItems: 'center',
  },
});
