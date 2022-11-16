import React from 'react';
import {AuthProvider} from './navigation/AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './navigation/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <BottomNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
