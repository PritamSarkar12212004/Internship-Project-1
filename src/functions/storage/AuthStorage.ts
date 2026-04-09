import storage from '../../storage/mmkv';
import ConstProvider from '../../consts/Provider';

const K = ConstProvider.KEYS.STORAGE;

export const saveAuthData = (data: any) => {
  storage.set(K.AUTH_TOKEN, data.token);
  storage.set(K.USER, JSON.stringify(data.user));
  storage.set(K.ACCOUNT_PREFERENCE, JSON.stringify(data.account_preference));
  storage.set(
    K.NOTIFICATION_SETTINGS,
    JSON.stringify(data.notification_settings),
  );
  storage.set(K.IS_VERIFIED, String(data.is_verified));
};

export const getAuthData = () => {
  try {
    const token = storage.getString(K.AUTH_TOKEN);
    const user = storage.getString(K.USER);
    const accountPref = storage.getString(K.ACCOUNT_PREFERENCE);
    const notification = storage.getString(K.NOTIFICATION_SETTINGS);
    const isVerified = storage.getString(K.IS_VERIFIED);

    if (!token) return null;

    const parsedNotification = notification ? JSON.parse(notification) : null;

    if (parsedNotification?.notificationSettings) {
      parsedNotification.notificationSettings = JSON.parse(
        parsedNotification.notificationSettings,
      );
    }

    return {
      token,
      user: user ? JSON.parse(user) : null,
      account_preference: accountPref ? JSON.parse(accountPref) : null,
      notification_settings: parsedNotification,
      is_verified: isVerified === 'true',
    };
  } catch (e) {
    return null;
  }
};

export const clearAuthData = () => {
  storage.remove(K.AUTH_TOKEN);
  storage.remove(K.USER);
  storage.remove(K.ACCOUNT_PREFERENCE);
  storage.remove(K.NOTIFICATION_SETTINGS);
  storage.remove(K.IS_VERIFIED);
};
