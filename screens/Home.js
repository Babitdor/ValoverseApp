import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import HeaderTab from '../components/HeaderTab';
import AgentDisplayItem from '../components/AgentDisplayItem';
import Valoverse from './Data.json';
import {AuthContext} from '../navigation/AuthProvider';
import {FlatList} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  let {RolesNAME} = useContext(AuthContext);
  const [Agents, setAgents] = useState(Valoverse['Controllers']);
  useEffect(() => {
    switch (RolesNAME) {
      case 'Controller':
        setAgents(Valoverse['Controllers']);
        break;
      case 'Duelist':
        setAgents(Valoverse['Duelists']);
        break;
      case 'Initiator':
        setAgents(Valoverse['Initiators']);
        break;
      case 'Sentinel':
        setAgents(Valoverse['Sentinels']);
        break;
    }
  }, [RolesNAME, Valoverse]);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar backgroundColor="#181818" />
      <View style={{backgroundColor: '#181818'}}>
        <View>
          <Text style={[styles.Title, {fontFamily: 'Valorant'}]}>
            VALOVERSE
          </Text>
        </View>
        <HeaderTab />
      </View>
      <FlatList
        data={Agents}
        keyExtractor={(_, index) => String(index)}
        renderItem={agent => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AgentPage', {Agent: agent.item.AgentInfo})
              }>
              <View>
                <AgentDisplayItem Agent={agent.item} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Title: {
    alignSelf: 'center',
    fontSize: 30,
    margin: 10,
    color: '#FFFBF5',
    padding: 10,
    letterSpacing: 5,
    fontFamily: 'Valorant',
  },
});
