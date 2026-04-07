import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import NavigationProvider from '../../navigations/Provider';
const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ConstProvider.ROUTES.AUTH_PATH.ROOT_PATH}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
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
    </Stack.Navigator>
  );
};

export default RootNavigation;
