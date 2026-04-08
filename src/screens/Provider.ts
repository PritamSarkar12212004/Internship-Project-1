import SplashScreen from './splash/SplashScreen';
import AuthFlow from './auth/AuthFlowScreen';
import SignupFlowScreen from './auth/SignupFlowScreen';
import MainScreen from './main/MainScreen';
const Provider = {
  SPLASH: {
    MAIN_SCREEN: SplashScreen,
  },
  AUTH: {
    AUTH_FLOW_SCREEN: AuthFlow,
    SIGNUP_FLOW_SCREEN: SignupFlowScreen,
  },
  MAIN: {
    MAIN_SCREEN: MainScreen,
  },
};
export default Provider;
