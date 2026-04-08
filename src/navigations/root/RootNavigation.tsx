import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import NavigationProvider from '../../navigations/Provider';
import FuncProvider from '../../functions/Provider';
const Stack = createStackNavigator();
const RootNavigation = () => {
  const initialRoute = FuncProvider.STORAGE.SPLASH.HAS_COMPLETED()
    ? ConstProvider.ROUTES.AUTH_PATH.ROOT_PATH
    : ConstProvider.ROUTES.SPLASH_PATH.ROOT_PATH;

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
