import 'react-native-gesture-handler';
import './global.css';
import ConfigProvider from './src/configs/Provider';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

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
          <NavigationContainer theme={AppTheme}>
            <NavigationProvider.ROOT />
            <Toast />
          </NavigationContainer>
        </PaperProvider>
        <Toast
          config={ConfigProvider.TOST_CONFIG}
          position="top"
          visibilityTime={1800}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
