import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import NavigationProvider from '../../navigations/Provider';
import FuncProvider from '../../functions/Provider';
import { getAuthData } from '../../functions/storage/AuthStorage';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const init = () => {
      const splashDone = FuncProvider.STORAGE.SPLASH.HAS_COMPLETED();
      const auth = getAuthData();

      if (!splashDone) {
        setInitialRoute(ConstProvider.ROUTES.SPLASH_PATH.ROOT_PATH);
      } else if (auth?.token) {
        setInitialRoute(ConstProvider.ROUTES.MAIN_PATH.ROOT_PATH);
      } else {
        setInitialRoute(ConstProvider.ROUTES.AUTH_PATH.ROOT_PATH);
      }
    };

    init();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name={ConstProvider.ROUTES.SPLASH_PATH.ROOT_PATH}
        component={NavigationProvider.Splash.Root}
      />
      <Stack.Screen
        name={ConstProvider.ROUTES.AUTH_PATH.ROOT_PATH}
        component={NavigationProvider.AUTH}
      />
      <Stack.Screen
        name={ConstProvider.ROUTES.MAIN_PATH.ROOT_PATH}
        component={NavigationProvider.MAIN}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
