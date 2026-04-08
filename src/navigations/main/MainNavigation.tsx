import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import ScreenProvider from '../../screens/Provider';
const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ConstProvider.ROUTES.MAIN_PATH.SCREEN_PATH.MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ConstProvider.ROUTES.MAIN_PATH.SCREEN_PATH.MAIN_SCREEN}
        component={ScreenProvider.MAIN.MAIN_SCREEN}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
