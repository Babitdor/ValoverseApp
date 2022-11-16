import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../navigation/AuthProvider';

const Roles = [
  {
    id: 0,
    Role: 'Controller',
    Image: require('../src/assets/Roles/Controller.png'),
  },
  {
    id: 1,
    Role: 'Initiator',
    Image: require('../src/assets/Roles/Initiator.png'),
  },
  {
    id: 2,
    Role: 'Duelist',
    Image: require('../src/assets/Roles/Duelist.png'),
  },
  {
    id: 3,
    Role: 'Sentinel',
    Image: require('../src/assets/Roles/Sentinel.png'),
  },
];

export default function HeaderTab() {
  let {setRoles} = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('Controller');
  return (
    <View style={styles.headerTabs}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Roles.map((role, id) => (
          <HeaderButton
            key={role.id}
            id ={role.id}
            text={role.Role}
            image={role.Image}
            setRoles={setRoles}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const HeaderButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? '#FD4556' : 'black',
        borderColor: '#BD3944',
        borderWidth: 1,
        marginHorizontal: 2,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => {
        props.setActiveTab(props.text)
        props.setRoles(props.text)
        
        }}>
      <Image
        style={{
          width: 20,
          height: 20,
          tintColor: props.activeTab === props.text ? 'white' : '#fa4454',
        }}
        source={props.image}
      />
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : '#fa4454',
          fontSize: 14,
          fontFamily:'Valorant',
          marginLeft: 10,
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
  },
});
