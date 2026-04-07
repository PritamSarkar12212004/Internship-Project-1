import MainButton from './buttons/splash/MainButton';
import AuthMainButton from './buttons/auth/MainButton';
import SubButton from './buttons/splash/SubButton';
import Tost from './global/Tost';
import Icon from './global/Icon';
const Provider = {
  BUTTONS: {
    SPLASH: {
      MAIN_BUTTON: MainButton,
      SUB_BUTTON: SubButton,
    },
    AUTH: {
      MAIN_BUTTON: AuthMainButton,
    },
  },

  GLOBAL: {
    ICON: Icon,
    TOST: Tost,
  },
};
export default Provider;
