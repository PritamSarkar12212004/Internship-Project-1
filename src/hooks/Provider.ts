import ForgetPassword from './api/auth/ForgetPassword';
import SignUpApi from './api/auth/SignUpApi';
const Provider = {
  AUTH: {
    FORGET_PASSWORD: ForgetPassword,
    SIGNUP_API: SignUpApi,
  },
};
export default Provider;
