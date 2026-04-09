import LayoutProvider from '../../layout/Provider';
import React, { useEffect, useState } from 'react';
import ConstProvider from '../../consts/Provider';
import {
  ActivityIndicator,
  KeyboardTypeOptions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ComProviderr from '../../components/Provider';
import DataProvider from '../../data/Provider';
import Icon from '../../components/global/Icon';
import DropDown from '../../components/dropdown/auth/DropDown';
import { SignupFormState } from '../../types/Auth/SignUpStateInterface';
import HookProvider from '../../hooks/Provider';

type SignupSectionKey = keyof SignupFormState['SignupData'];
type FarmInfoSectionKey = keyof SignupFormState['FarmInfo'];

const SignupFlowScreen = ({ navigation }: any) => {
  const data = DataProvider.SignupData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentData = data[currentIndex];
  const [signupData, setSignUpdata] = useState<SignupFormState>({
    SignupData: {
      FullName: '',
      Email: '',
      Phone: '',
      Password: '',
      ConPassword: '',
    },
    FarmInfo: {
      BussnessName: '',
      InformalName: '',
      StreetAddress: '',
      City: '',
      State: '',
      ZipCode: '',
    },
    Verification: {
      Doc: null,
    },
    BussnessTiming: [],
  });

  const handleSignupInputChange = (key: SignupSectionKey, value: string) => {
    setSignUpdata(prev => ({
      ...prev,
      SignupData: {
        ...prev.SignupData,
        [key]: value,
      },
    }));
  };

  const handleFarmInfoChange = (key: FarmInfoSectionKey, value: string) => {
    setSignUpdata(prev => ({
      ...prev,
      FarmInfo: {
        ...prev.FarmInfo,
        [key]: value,
      },
    }));
  };

  const handleBusinessHoursChange = (
    value: NonNullable<SignupFormState['BussnessTiming']>,
  ) => {
    setSignUpdata(prev => ({
      ...prev,
      BussnessTiming: value,
    }));
  };

  const handleDocumentPick = (filePath: string) => {
    setSignUpdata(prev => ({
      ...prev,
      Verification: {
        ...prev.Verification,
        Doc: filePath,
      },
    }));
  };

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
    return providers[index] ?? 'Social Signup';
  };

  const handleSocialPress = (index: number) => {
    const provider = getSocialProviderName(index);
    ComProviderr.GLOBAL.TOST({
      status: 'info',
      data: {
        head: `${provider} signup is coming soon`,
        subData: 'This feature is under development. Please use form signup.',
      },
    });
  };

  const validateCurrentStep = () => {
    if (!currentData) {
      return false;
    }

    if (currentData.State === 'name') {
      const { FullName, Email, Phone, Password, ConPassword } =
        signupData.SignupData;
      if (!FullName?.trim()) {
        showInfoToast('Full Name is required', 'Please enter your full name');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!Email?.trim()) {
        showInfoToast('Email is required', 'Please enter your email address');
        return false;
      }
      if (!emailRegex.test(Email)) {
        showInfoToast('Invalid Email', 'Please enter a valid email address');
        return false;
      }
      if (!Phone?.trim() || Phone.trim().length < 10) {
        showInfoToast('Phone is required', 'Please enter a valid phone number');
        return false;
      }
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/;
      if (!Password) {
        showInfoToast('Password is required', 'Please enter your password');
        return false;
      }
      if (!passwordRegex.test(Password)) {
        showInfoToast(
          'Weak Password',
          'Use 5+ chars with uppercase, lowercase, number and symbol',
        );
        return false;
      }
      if (!ConPassword) {
        showInfoToast('Confirm Password', 'Please confirm your password');
        return false;
      }
      if (Password !== ConPassword) {
        showInfoToast('Password Mismatch', 'Passwords do not match');
        return false;
      }
    }

    if (currentData.State === 'businessName') {
      const {
        BussnessName,
        InformalName,
        StreetAddress,
        City,
        State,
        ZipCode,
      } = signupData.FarmInfo;
      if (!BussnessName?.trim()) {
        showInfoToast(
          'Business Name is required',
          'Please enter business name',
        );
        return false;
      }
      if (!InformalName?.trim()) {
        showInfoToast(
          'Informal Name is required',
          'Please enter informal name',
        );
        return false;
      }
      if (!StreetAddress?.trim()) {
        showInfoToast(
          'Street Address is required',
          'Please enter street address',
        );
        return false;
      }
      if (!City?.trim()) {
        showInfoToast('City is required', 'Please enter city');
        return false;
      }
      if (!State?.trim()) {
        showInfoToast('State is required', 'Please select your state');
        return false;
      }
      if (!ZipCode?.trim() || ZipCode.trim().length < 6) {
        showInfoToast('Zip Code is required', 'Please enter valid zip code');
        return false;
      }
    }

    if (currentData.State === 'verification') {
      if (!signupData.Verification.Doc) {
        showInfoToast(
          'Document required',
          'Please select registration document',
        );
        return false;
      }
    }

    if (currentData.State === 'Date') {
      if (!signupData.BussnessTiming.length) {
        showInfoToast(
          'Business Hours required',
          'Please select at least one slot',
        );
        return false;
      }
    }

    return true;
  };

  const goNext = async () => {
    const isValid = validateCurrentStep();
    if (!isValid) {
      return;
    }

    if (currentData?.State === 'Date') {
      try {
        setIsSubmitting(true);

        const res = await HookProvider.AUTH.SIGNUP_API({
          data: {
            ...signupData,
            deviceToken: 'device-token',
          },
        });

        if (!res) {
          setCurrentIndex(0);
          return;
        }

        setCurrentIndex(prev => prev + 1);
        return;
      } catch (error) {
        setCurrentIndex(0);
        return;
      } finally {
        setIsSubmitting(false);
      }
    }

    if (currentIndex < data.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (
      currentIndex === 0 &&
      currentData?.Navigation?.Back?.Text?.toLowerCase() === 'login'
    ) {
      navigation.goBack();
      return;
    }
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  useEffect(() => {
    if (currentData?.State === 'Done') {
      const timer = setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: ConstProvider.ROUTES.MAIN_PATH.ROOT_PATH }],
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentData?.State]);
  return (
    <LayoutProvider.WRAPERS.AUTH
      bgColor={ConstProvider.THEME.BACKGROUND.LIGHT.FIRST}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 gap-14">
            <Text className="text-lg font-semibold">FarmerEats</Text>

            <View className="w-full flex gap-6">
              <Text className="text-4xl font-bold">{currentData?.Heading}</Text>

              {currentData?.SubHeading && (
                <Text className="opacity-70 tracking-wider leading-relaxed">
                  {currentData.SubHeading}
                </Text>
              )}

              {currentData?.State === 'Date' && (
                <ComProviderr.AUTH.DateTimeSelector
                  value={signupData.BussnessTiming ?? []}
                  onChange={handleBusinessHoursChange}
                />
              )}

              {currentData?.Attachment && (
                <ComProviderr.AUTH.ATCHMENT
                  selectedDocument={signupData.Verification.Doc ?? ''}
                  onDocumentPick={handleDocumentPick}
                />
              )}
              {currentData?.LoginOptions && (
                <View className="w-full flex gap-6">
                  <View className="flex flex-row items-center gap-4 justify-between">
                    {currentData.LoginOptions.map((item, index) => {
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

                  <Text className="text-center opacity-70 tracking-wider">
                    or signup with
                  </Text>
                </View>
              )}

              <View className="w-full flex gap-4">
                {currentData?.Input?.map((item, index) => {
                  const isSignupPage = currentData.State === 'name';
                  const value = isSignupPage
                    ? (signupData.SignupData[item.state as SignupSectionKey] ??
                      '')
                    : (signupData.FarmInfo[item.state as FarmInfoSectionKey] ??
                      '');

                  return (
                    <View
                      className="flex w-full flex-row"
                      key={index.toString()}
                    >
                      <View className="h-16 bg-[#eeedec] rounded-l-xl flex items-center justify-center px-4">
                        <ComProviderr.GLOBAL.ICON
                          color={item.Icon.color}
                          name={item.Icon.name}
                          size={item.Icon.size}
                        />
                      </View>

                      <TextInput
                        value={value}
                        onChangeText={text =>
                          isSignupPage
                            ? handleSignupInputChange(
                                item.state as SignupSectionKey,
                                text,
                              )
                            : handleFarmInfoChange(
                                item.state as FarmInfoSectionKey,
                                text,
                              )
                        }
                        className="flex-auto h-16 bg-[#eeedec] placeholder:text-zinc-500 rounded-r-xl"
                        placeholder={item.Type}
                        keyboardType={item?.keyboard as KeyboardTypeOptions}
                        secureTextEntry={
                          item.state === 'Password' ||
                          item.state === 'ConPassword'
                        }
                      />
                    </View>
                  );
                })}

                {currentData?.DropDown && (
                  <DropDown
                    selectedState={signupData.FarmInfo.State ?? ''}
                    zipCode={signupData.FarmInfo.ZipCode ?? ''}
                    onSelectState={value =>
                      handleFarmInfoChange('State', value)
                    }
                    onChangeZipCode={value =>
                      handleFarmInfoChange('ZipCode', value)
                    }
                  />
                )}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Navigation */}
        {currentData?.Navigation && (
          <View className="w-full flex flex-row items-center justify-between pb-6 gap-16 h-24">
            <TouchableOpacity
              onPress={goBack}
              activeOpacity={0.8}
              className="w-2/12"
              disabled={isSubmitting}
            >
              {currentData.Navigation.Back.Text ? (
                <Text className="text-black text-lg font-semibold underline">
                  {currentData.Navigation.Back.Text}
                </Text>
              ) : (
                <Icon
                  name={currentData.Navigation.Back.Icon}
                  color="#261C12"
                  size={25}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={goNext}
              activeOpacity={0.8}
              disabled={isSubmitting}
              className="bg-[#d5715b] h-full flex-auto rounded-[140px] flex items-center justify-center"
            >
              {isSubmitting ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text className=" text-lg font-semibold text-white ">
                  {currentData.Navigation.Forward.Button}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </LayoutProvider.WRAPERS.AUTH>
  );
};

export default SignupFlowScreen;
