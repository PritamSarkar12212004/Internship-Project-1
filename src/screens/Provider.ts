import SplashScreen from './splash/SplashScreen';
import AuthFlow from './auth/AuthFlowScreen';
import SignupFlowScreen from './auth/SignupFlowScreen';
const Provider = {
  SPLASH: {
    MAIN_SCREEN: SplashScreen,
  },
  AUTH: {
    AUTH_FLOW_SCREEN: AuthFlow,
    SIGNUP_FLOW_SCREEN: SignupFlowScreen,
  },
};
export default Provider;
