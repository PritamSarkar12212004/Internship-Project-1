import Apple from './auth/AppleAuthIcon';
import FirstSplash from './splash/FirstSplash';
import SecoundSplash from './splash/SecoundSplash';
import ThirdSplash from './splash/ThirdSplash';
import Google from './auth/GoogleAuthIcon';
import Facebook from './auth/FaceBookAuthIcon';
const Provider = {
  IMAGE: {
    SPLASH: {
      FIRST: FirstSplash,
      SECOUND: SecoundSplash,
      THIRD: ThirdSplash,
    },
    AUTH: {
      GOOGLE: Google,
      APPLE: Apple,
      FACEBOOK: Facebook,
    },
  },
};
export default Provider;
