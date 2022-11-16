import React from 'react';
import {StatusBar, Easing} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import AgentPage from '../screens/AgentPage';
import LineUpsScreen from '../screens/LineUpsScreen';
import VideoEnlargeScreen from '../screens/VideoEnlargeScreen';

export default function HomeStack() {
  const Stack = createStackNavigator();

  const config = {
    animation: 'Spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const closeConfig = {
    animation: 'Timing',
    config: {
      duration: 500,
      easing: Easing.linear,
    },
  };

  const screenOptions = {
    headerShown: false,
    CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: config,
      close: closeConfig,
    },
  };

  const forFade = ({current, closing}) => ({
    cardStyle: {
      backgroundColor: 'black',
      opacity: current.progress,
      presentaion: 'modal',
    },
  });
  return (
    <>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="AgentPage"
          component={AgentPage}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="LineUps"
          component={LineUpsScreen}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoEnlargeScreen}
          options={{cardStyleInterpolator: forFade}}
        />
      </Stack.Navigator>
    </>
  );
}
