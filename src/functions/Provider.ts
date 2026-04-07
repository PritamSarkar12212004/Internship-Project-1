import IndexChanger from './auth/IndexChanger';
import InputDandler from './auth/InputDandler';
import { LoginSubmit } from './auth/SubmitForm';
const Provider = {
  AUTH: {
    INPUT_HANDLER: InputDandler,
    INDEX_CHANGER: IndexChanger,
    FORM_SUBMIT: {
      LOGIN_SUBMIT: LoginSubmit,
    },
  },
};
export default Provider;
