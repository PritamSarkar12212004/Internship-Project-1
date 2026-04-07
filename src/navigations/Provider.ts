import SplashNavigation from './splash/SplashNavigation';
import RootNavigation from './root/RootNavigation';
import AuthNavigation from './auth/AuthNavigation'
const Provider = {
  Splash: {
    Root: SplashNavigation,
  },
  ROOT: RootNavigation,
  AUTH:AuthNavigation
};
export default Provider;
