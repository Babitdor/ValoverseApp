import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../screens/News';
import StatTracker from '../screens/StatTracker';
import Store from '../screens/Store';
import Icon, {Icons} from '../Icons/Icons';
import * as Animatable from 'react-native-animatable';
import AgentPage from '../screens/AgentPage';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'HomeStack',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: HomeStack,
  },
  {
    route: 'News',
    label: 'News',
    type: Icons.Ionicons,
    activeIcon: 'newspaper',
    inActiveIcon: 'newspaper-outline',
    component: News,
  },
  {
    route: 'Stats',
    label: 'Stats',
    type: Icons.Ionicons,
    activeIcon: 'stats-chart',
    inActiveIcon: 'stats-chart-outline',
    component: StatTracker,
  },
  {
    route: 'Store',
    label: 'Store',
    type: Icons.AntDesign,
    activeIcon: 'appstore1',
    inActiveIcon: 'appstore-o',
    component: Store,
  },
];

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          height: 50,
          justifyContent: 'center',
          ...styles.shadow,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            label={item.label}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 1.1}});
    } else {
      viewRef.current.animate({0: {scale: 1.1}, 1: {scale: 1}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={600} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? '#FD4556' : 'white'}
        />
        <Text
          style={{
            color: focused ? '#FD4556' : 'white',
            fontSize: 10,
          }}>
          {item.label}
        </Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
