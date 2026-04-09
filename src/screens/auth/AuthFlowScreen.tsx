import { View, Text, TouchableOpacity } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import LayoutProvider from '../../layout/Provider';
import ConstProvider from '../../consts/Provider';
import { TextInput } from 'react-native-gesture-handler';
import ComProviderr from '../../components/Provider';
import DataProvider from '../../data/Provider';
import FuncProvider from '../../functions/Provider';
import RoutesPath from '../../consts/routes/RoutesPath';
import { AuthPage } from '../../types/Auth/AuthTypes';

type AuthFlowScreenProps = {
  navigation: any;
};
 
type LoginState = {
  login: {
    email: string | null;
    password: string | null;
  };
  forget: {
    phoneNumber: string | null;
  };
  verify: {
    otp: string | null;
  };
  reset: {
    newPass: string | null;
    ConformPass: string | null;
  };
};

const initialLoginData: LoginState = {
  login: {
    email: null,
    password: null,
  },
  forget: {
    phoneNumber: null,
  },
  verify: {
    otp: null,
  },
  reset: {
    newPass: null,
    ConformPass: null,
  },
};

const AuthFlowScreen = ({ navigation }: AuthFlowScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loginData, setLoginData] = useState<LoginState>(initialLoginData);
  const [funLoader, setFunLoader] = useState<boolean>(false);
  const [resetToken, setResetToken] = useState<string | null>(null);
  const otpInputRef = useRef<any>(null);

  const data = DataProvider.AuthData;
  const currentData = useMemo<AuthPage | null>(
    () => data[currentIndex] ?? null,
    [data, currentIndex],
  );
  const currentStep = useMemo(() => {
    if (currentData?.state) return currentData.state;
    if (currentIndex === 1) return 'forget';
    if (currentIndex === 2) return 'verify';
    if (currentIndex === 3) return 'reset';
    return 'login';
  }, [currentData?.state, currentIndex]);

  const showInfoToast = (head: string, subData: string) => {
    ComProviderr.GLOBAL.TOST({
      status: 'info',
      data: {
        head,
        subData,
      },
    });
  };

  const getSocialProviderName = (index: number) => {
    const providers = ['Google', 'Apple', 'Facebook'];
    return providers[index] ?? 'Social Login';
  };

  const handleSocialPress = (index: number) => {
    const provider = getSocialProviderName(index);
    ComProviderr.GLOBAL.TOST({
      status: 'info',
      data: {
        head: `${provider} login is coming soon`,
        subData: 'This feature is under development. Please use normal login.',
      },
    });
  };

  const goToSignupOrLogin = () => {
    if (currentData?.state === 'login') {
      navigation.navigate(RoutesPath.AUTH_PATH.SCREEN_PATH.SSIGNUP_FLOW);
      return;
    }
    FuncProvider.AUTH.INDEX_CHANGER({
      state: 'login',
      setCurrentIndex: setCurrentIndex,
      setLoginData: setLoginData,
    });
  };

  const getInputValue = (state: string) => {
    if (state === 'email') return loginData.login.email ?? '';
    if (state === 'password') return loginData.login.password ?? '';
    if (state === 'phoneNumber') return loginData.forget.phoneNumber ?? '';
    if (state === 'newPass') return loginData.reset.newPass ?? '';
    if (state === 'ConformPass') return loginData.reset.ConformPass ?? '';
    return '';
  };

  const onChangeOtp = (value: string) => {
    const onlyDigits = value.replace(/\D/g, '').slice(0, 5);
    setLoginData(prev => ({
      ...prev,
      verify: {
        ...prev.verify,
        otp: onlyDigits,
      },
    }));
  };

  const handleMainAction = () => {
    if (currentStep === 'login') {
      const { email, password } = loginData.login;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email?.trim()) {
        showInfoToast('Email is required', 'Enter email address');
        return null;
      }
      if (!emailRegex.test(email)) {
        showInfoToast('Invalid Email', 'Please enter a valid email address');
        return null;
      }
      if (!password?.trim()) {
        showInfoToast('Password is required', 'Enter password');
        return null;
      }
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/;
      if (!passwordRegex.test(password)) {
        showInfoToast(
          'Enter Valid Password',
          'Password must have uppercase, lowercase, number and symbol',
        );
        return null;
      }
      return FuncProvider.AUTH.FORM_SUBMIT.LOGIN_SUBMIT({
        email,
        password,
        setFunLoader,
        navigation,
        RoutesPath,
      });
    }

    if (currentStep === 'forget') {
      const phone = loginData.forget.phoneNumber?.trim();
      if (!phone || phone.length < 10) {
        showInfoToast('Phone is required', 'Enter valid phone number');
        return null;
      }
      return FuncProvider.AUTH.FORM_SUBMIT.FORGOT_PASSWORD_SUBMIT({
        mobile: phone,
        setFunLoader,
        onSuccess: () => setCurrentIndex(2),
      });
    }

    if (currentStep === 'verify') {
      const otp = loginData.verify.otp?.trim() ?? '';
      if (otp.length < 5) {
        showInfoToast('Invalid OTP', 'Please enter 5 digit OTP');
        return null;
      }
      return FuncProvider.AUTH.FORM_SUBMIT.VERIFY_OTP_SUBMIT({
        otp,
        setFunLoader,
        onSuccess: (token: string) => {
          setResetToken(token);
          setCurrentIndex(3);
        },
      });
    }

    if (currentStep === 'reset') {
      const { newPass, ConformPass } = loginData.reset;
      if (!newPass) {
        showInfoToast('New password required', 'Enter your new password');
        return null;
      }
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/;
      if (!passwordRegex.test(newPass)) {
        showInfoToast(
          'Weak Password',
          'Use 5+ chars with uppercase, lowercase, number and symbol',
        );
        return null;
      }
      if (!ConformPass) {
        showInfoToast('Confirm Password', 'Re-enter the new password');
        return null;
      }
      if (newPass !== ConformPass) {
        showInfoToast('Password Mismatch', 'Both passwords must be same');
        return null;
      }

      if (!resetToken) {
        showInfoToast('Session Expired', 'Please verify your OTP again');
        setCurrentIndex(2);
        return null;
      }

      return FuncProvider.AUTH.FORM_SUBMIT.RESET_PASSWORD_SUBMIT({
        token: resetToken,
        password: newPass,
        cpassword: ConformPass,
        setFunLoader,
        onSuccess: () => {
          FuncProvider.AUTH.INDEX_CHANGER({
            state: 'login',
            setCurrentIndex: setCurrentIndex,
            setLoginData: setLoginData,
          });
          setResetToken(null);
        },
      });
    }

    return null;
  };

  return (
    <LayoutProvider.WRAPERS.AUTH
      bgColor={ConstProvider.THEME.BACKGROUND.LIGHT.FIRST}
    >
      <View className="flex-1 gap-14">
        <View>
          <Text className="text-lg font-semibold">FarmerEats</Text>
        </View>
        <View className="w-full flex gap-6">
          <Text className="text-4xl font-bold">{currentData?.Head}</Text>
          <View className="flex flex-row">
            <Text className="opacity-70">{currentData?.Helper.Support}</Text>
            <TouchableOpacity onPress={goToSignupOrLogin} activeOpacity={0.8}>
              <Text className="text-[#e29c8c]">
                {currentData?.Helper.Action}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full flex gap-6">
          {currentStep === 'verify' ? (
            <View className="w-full flex items-center gap-6">
              <TextInput
                ref={otpInputRef}
                value={loginData.verify.otp ?? ''}
                onChangeText={onChangeOtp}
                keyboardType="number-pad"
                maxLength={5}
                className="w-full h-14 opacity-0 absolute"
                autoFocus
              />
              <View className="w-full flex flex-row items-center justify-between">
                {[0, 1, 2, 3, 4].map(index => (
                  <TouchableOpacity
                    key={index.toString()}
                    activeOpacity={0.8}
                    onPress={() => otpInputRef.current?.focus?.()}
                    className="h-14 w-[18%] bg-[#eeedec] rounded-xl flex items-center justify-center"
                  >
                    <Text className="text-lg font-semibold text-black">
                      {loginData.verify.otp?.[index] ?? ''}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : (
            currentData?.Input.map((item, index) => {
              return (
                <View className="flex flex-row" key={index.toString()}>
                  <View className="h-16 bg-[#eeedec] rounded-l-xl flex items-center justify-center px-4">
                    <ComProviderr.GLOBAL.ICON
                      color={item.Icon.color}
                      name={item.Icon.name}
                      size={item.Icon.size}
                    />
                  </View>
                  <TextInput
                    className={`flex-auto h-16 bg-[#eeedec] ${
                      item.Adistional ? '' : 'rounded-r-xl'
                    } placeholder:text-zinc-500`}
                    style={{ color: '#261C12' }}
                    placeholder={item.Type}
                    keyboardType={item?.keyboard}
                    secureTextEntry={
                      item.state === 'password' ||
                      item.state === 'newPass' ||
                      item.state === 'ConformPass'
                    }
                    value={getInputValue(item.state)}
                    onChangeText={value =>
                      FuncProvider.AUTH.INPUT_HANDLER({
                        data: value,
                        LoginData: loginData,
                        setLoginData: setLoginData,
                        state: item.state,
                      })
                    }
                  />
                  {item.Adistional ? (
                    <TouchableOpacity
                      onPress={() =>
                        FuncProvider.AUTH.INDEX_CHANGER({
                          state: 'forget',
                          setCurrentIndex: setCurrentIndex,
                          setLoginData: setLoginData,
                        })
                      }
                      activeOpacity={1}
                      className="h-16 bg-[#eeedec] rounded-r-xl flex items-center justify-center px-4"
                    >
                      <Text className="text-[#e29c8c]">
                        {item.Adistional.Head}
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              );
            })
          )}
          <View className=" mt-4">
            {currentData?.Button?.MainButton ? (
              <ComProviderr.BUTTONS.AUTH.MAIN_BUTTON
                funLoader={funLoader}
                fun={handleMainAction}
                btContent={currentData.Button.MainButton.Head}
                btColor={ConstProvider.THEME.BUTTONS.First}
              />
            ) : null}
            {currentStep === 'verify' ? (
              <TouchableOpacity
                onPress={() =>
                  FuncProvider.AUTH.FORM_SUBMIT.FORGOT_PASSWORD_SUBMIT({
                    mobile: loginData.forget.phoneNumber ?? '',
                    setFunLoader,
                    onSuccess: () => {},
                  })
                }
                activeOpacity={0.8}
                className="w-full mt-6 items-center"
              >
                <Text className="text-black underline text-base">
                  Resend Code
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        {currentData?.Button.OptionButton ? (
          <View className="flex items-center justify-center">
            <Text className="text-zinc-500 text-sm">or login with</Text>
          </View>
        ) : null}
        <View className=" flex flex-row items-center  gap-4 justify-between">
          {currentData?.Button.OptionButton &&
            currentData?.Button.OptionButton.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleSocialPress(index)}
                  key={index.toString()}
                  activeOpacity={0.8}
                  className="h-16 flex-auto border-[1px] border-zinc-300 rounded-[30px] flex items-center justify-center"
                >
                  <item.icon />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </LayoutProvider.WRAPERS.AUTH>
  );
};

export default AuthFlowScreen;
