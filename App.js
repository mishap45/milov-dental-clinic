import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigation from './src/screens/AppNavigation/AppNavigation'

const App = () => {
  return (
      <NavigationContainer>
          <AppNavigation/>
          <StatusBar style="auto"/>
      </NavigationContainer>
  );
};

export default App
