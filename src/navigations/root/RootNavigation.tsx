import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import NavigationProvider from '../../navigations/Provider';
const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ConstProvider.ROUTES.SPLASH_PATH.ROOT_PATH}
        component={NavigationProvider.Splash.Root}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
