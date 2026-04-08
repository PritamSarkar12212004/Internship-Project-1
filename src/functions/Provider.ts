import IndexChanger from './auth/IndexChanger';
import InputDandler from './auth/InputDandler';
import { LoginSubmit } from './auth/SubmitForm';
import PayloadFormater from './auth/PayloadFormater';
import {
  hasCompletedSplash,
  markSplashCompleted,
} from './storage/SplashStorage';
const Provider = {
  AUTH: {
    INPUT_HANDLER: InputDandler,
    INDEX_CHANGER: IndexChanger,
    FORM_SUBMIT: {
      LOGIN_SUBMIT: LoginSubmit,
    },
    DATA_FORMATER: {
      SIGNUP_FORMATE: PayloadFormater,
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
