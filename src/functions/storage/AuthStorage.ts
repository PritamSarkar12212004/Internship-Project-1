import storage from '../../storage/mmkv';
import ConstProvider from '../../consts/Provider';

export const saveAuthData = (data: any) => {
  storage.set(ConstProvider.KEYS.STORAGE.AUTH_TOKEN, data.token);
  storage.set(ConstProvider.KEYS.STORAGE.USER, JSON.stringify(data.user));
  storage.set(
    ConstProvider.KEYS.STORAGE.ACCOUNT_PREFERENCE,
    JSON.stringify(data.account_preference),
  );
  storage.set(
    ConstProvider.KEYS.STORAGE.NOTIFICATION_SETTINGS,
    JSON.stringify(data.notification_settings),
  );
  storage.set(ConstProvider.KEYS.STORAGE.IS_VERIFIED, String(data.is_verified));
};

export const clearAuthData = () => {
  storage.remove(ConstProvider.KEYS.STORAGE.AUTH_TOKEN);
  storage.remove(ConstProvider.KEYS.STORAGE.USER);
  storage.remove(ConstProvider.KEYS.STORAGE.ACCOUNT_PREFERENCE);
  storage.remove(ConstProvider.KEYS.STORAGE.NOTIFICATION_SETTINGS);
  storage.remove(ConstProvider.KEYS.STORAGE.IS_VERIFIED);
};
