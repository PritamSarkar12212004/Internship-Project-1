import { createStackNavigator } from '@react-navigation/stack';
import ConstProvider from '../../consts/Provider';
import ScreenProvider from '../../screens/Provider';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ConstProvider.ROUTES.AUTH_PATH.SCREEN_PATH.AUTH_FLOW}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name={ConstProvider.ROUTES.AUTH_PATH.SCREEN_PATH.AUTH_FLOW}
        component={ScreenProvider.AUTH.AUTH_FLOW_SCREEN}
      />
      <Stack.Screen
        name={ConstProvider.ROUTES.AUTH_PATH.SCREEN_PATH.SSIGNUP_FLOW}
        component={ScreenProvider.AUTH.SIGNUP_FLOW_SCREEN}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
