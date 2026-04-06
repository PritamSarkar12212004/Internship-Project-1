import 'react-native-gesture-handler';
import './global.css';

import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import NavigationProvider from './src/navigations/Provider';
const AppTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: '#ffffff',
  },
};
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider theme={AppTheme}>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: AppTheme.colors.background }}
            edges={['top', 'bottom']}
          >
            <StatusBar
              translucent={false}
              backgroundColor={AppTheme.colors.background}
              barStyle="dark-content"
            />
            <NavigationContainer theme={AppTheme}>
              <NavigationProvider.ROOT />
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
