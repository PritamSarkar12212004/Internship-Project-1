import ConstProvider from '../../consts/Provider';
import storage from '../../storage/mmkv';

const markSplashCompleted = () => {
  storage.set(ConstProvider.KEYS.STORAGE.SPLASH_COMPLETED, true);
};

const hasCompletedSplash = () => {
  return storage.getBoolean(ConstProvider.KEYS.STORAGE.SPLASH_COMPLETED) === true;
};

export { markSplashCompleted, hasCompletedSplash };
