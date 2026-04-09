import Api from '../../services/api/Api';
import ComProvider from '../../components/Provider';
import { saveAuthData } from '../storage/AuthStorage';

const LoginSubmit = async ({
  email,
  password,
  setFunLoader,
  navigation,
  RoutesPath,
}: {
  email: string | any;
  password: string | any;
  setFunLoader: (val: boolean) => void;
  navigation: any;
  RoutesPath: any;
}) => {
  if (!email || !password) return null;
  
  setFunLoader(true);
  try {
    const payload = {
      email,
      password,
      role: 'farmer',
      device_token: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx', // Placeholder as per example
      type: 'email',
      social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
    };
    
    const response = await Api.post('/user/login', payload);
    
    const isSuccess = response.data.token || 
                      String(response.data.success).toLowerCase() === 'true' || 
                      response.data.success === true;
    
    if (isSuccess) {
      saveAuthData(response.data);
      ComProvider.GLOBAL.TOST({
        status: 'success',
        data: {
          head: 'Login Successful',
          subData: response.data.message || 'Welcome back!',
        },
      });
      // Navigate to main screen
      navigation.replace(RoutesPath.MAIN_PATH.ROOT_PATH);
    } else {
      ComProvider.GLOBAL.TOST({
        status: 'error',
        data: {
          head: 'Login Failed',
          subData: response.data.message || 'Invalid credentials',
        },
      });
    }
  } catch (error: any) {
    ComProvider.GLOBAL.TOST({
      status: 'error',
      data: {
        head: 'Server Error',
        subData: error?.response?.data?.message || 'Something went wrong',
      },
    });
  } finally {
    setFunLoader(false);
  }
};

const ForgotPassSubmit = async ({
  mobile,
  setFunLoader,
  onSuccess,
}: {
  mobile: string;
  setFunLoader: (val: boolean) => void;
  onSuccess: () => void;
}) => {
  setFunLoader(true);
  try {
    const response = await Api.post('/user/forgot-password', { mobile });
    if (String(response.data.success).toLowerCase() === 'true' || response.data.success === true) {
      ComProvider.GLOBAL.TOST({
        status: 'success',
        data: {
          head: 'OTP Sent',
          subData: response.data.message || 'OTP sent to your mobile',
        },
      });
      onSuccess();
    } else {
      ComProvider.GLOBAL.TOST({
        status: 'error',
        data: {
          head: 'Request Failed',
          subData: response.data.message || 'Could not send OTP',
        },
      });
    }
  } catch (error: any) {
    ComProvider.GLOBAL.TOST({
      status: 'error',
      data: {
        head: 'Server Error',
        subData: error?.response?.data?.message || 'Something went wrong',
      },
    });
  } finally {
    setFunLoader(false);
  }
};

const VerifyOtpSubmit = async ({
  otp,
  setFunLoader,
  onSuccess,
}: {
  otp: string;
  setFunLoader: (val: boolean) => void;
  onSuccess: (token: string) => void;
}) => {
  setFunLoader(true);
  try {
    const response = await Api.post('/user/verify-otp', { otp });
    if (response.data.token || String(response.data.success).toLowerCase() === 'true' || response.data.success === true) {
      ComProvider.GLOBAL.TOST({
        status: 'success',
        data: {
          head: 'OTP Verified',
          subData: response.data.message || 'OTP verified successfully',
        },
      });
      onSuccess(response.data.token);
    } else {
      ComProvider.GLOBAL.TOST({
        status: 'error',
        data: {
          head: 'Verification Failed',
          subData: response.data.message || 'Invalid OTP',
        },
      });
    }
  } catch (error: any) {
    ComProvider.GLOBAL.TOST({
      status: 'error',
      data: {
        head: 'Server Error',
        subData: error?.response?.data?.message || 'Something went wrong',
      },
    });
  } finally {
    setFunLoader(false);
  }
};

const ResetPassSubmit = async ({
  token,
  password,
  cpassword,
  setFunLoader,
  onSuccess,
}: {
  token: string;
  password: string;
  cpassword: string;
  setFunLoader: (val: boolean) => void;
  onSuccess: () => void;
}) => {
  setFunLoader(true);
  try {
    const response = await Api.post('/user/reset-password', {
      token,
      password,
      cpassword,
    });
    if (String(response.data.success).toLowerCase() === 'true' || response.data.success === true) {
      ComProvider.GLOBAL.TOST({
        status: 'success',
        data: {
          head: 'Password Reset',
          subData: response.data.message || 'Password successfully changed',
        },
      });
      onSuccess();
    } else {
      ComProvider.GLOBAL.TOST({
        status: 'error',
        data: {
          head: 'Reset Failed',
          subData: response.data.message || 'Could not reset password',
        },
      });
    }
  } catch (error: any) {
    ComProvider.GLOBAL.TOST({
      status: 'error',
      data: {
        head: 'Server Error',
        subData: error?.response?.data?.message || 'Something went wrong',
      },
    });
  } finally {
    setFunLoader(false);
  }
};

export { LoginSubmit, ForgotPassSubmit, VerifyOtpSubmit, ResetPassSubmit };

