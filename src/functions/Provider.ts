import IndexChanger from './auth/IndexChanger';
import InputDandler from './auth/InputDandler';
import {
  LoginSubmit,
  ForgotPassSubmit,
  VerifyOtpSubmit,
  ResetPassSubmit,
} from './auth/SubmitForm';
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
      FORGOT_PASSWORD_SUBMIT: ForgotPassSubmit,
      VERIFY_OTP_SUBMIT: VerifyOtpSubmit,
      RESET_PASSWORD_SUBMIT: ResetPassSubmit,
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
