import SplashWraper from './wrapers/SplashWraper';
import AuthWraper from './wrapers/AuthWraper';
import MainWraper from './wrapers/MainWraper';
const Provider = {
  WRAPERS: {
    SPLASH: SplashWraper,
    AUTH: AuthWraper,
    MAIN: MainWraper,
  },
};
export default Provider;
