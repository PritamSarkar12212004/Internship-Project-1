import IndexChanger from './auth/IndexChanger';
import InputDandler from './auth/InputDandler';
import { LoginSubmit } from './auth/SubmitForm';
import { hasCompletedSplash, markSplashCompleted } from './storage/SplashStorage';
const Provider = {
  AUTH: {
    INPUT_HANDLER: InputDandler,
    INDEX_CHANGER: IndexChanger,
    FORM_SUBMIT: {
      LOGIN_SUBMIT: LoginSubmit,
    },
  },
  STORAGE: {
    SPLASH: {
      MARK_COMPLETE: markSplashCompleted,
      HAS_COMPLETED: hasCompletedSplash,
    },
  },
};
export default Provider;
