import SplashNavigation from './splash/SplashNavigation';
import RootNavigation from './root/RootNavigation';
import AuthNavigation from './auth/AuthNavigation';
import MainNavigation from './main/MainNavigation';
const Provider = {
  Splash: {
    Root: SplashNavigation,
  },
  ROOT: RootNavigation,
  AUTH: AuthNavigation,
  MAIN: MainNavigation,
};
export default Provider;
