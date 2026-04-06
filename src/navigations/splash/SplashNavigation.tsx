import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import ScreenProvider from '../../screens/Provider';
const Stack = createStackNavigator();
const SplashNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={
        ConstProvider.ROUTES.SPLASH_PATH.SCREEN_PATH.MAIN_SCREEN_PATH
      }
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ConstProvider.ROUTES.SPLASH_PATH.SCREEN_PATH.MAIN_SCREEN_PATH}
        component={ScreenProvider.SPLASH.MAIN_SCREEN}
      />
    </Stack.Navigator>
  );
};

export default SplashNavigation;
