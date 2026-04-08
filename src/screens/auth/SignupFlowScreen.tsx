import LayoutProvider from '../../layout/Provider';
import React, { useEffect, useState } from 'react';
import ConstProvider from '../../consts/Provider';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SignUpInterfaceType from '../../types/Auth/SignUpInterface';
import { TextInput } from 'react-native-gesture-handler';
import ComProviderr from '../../components/Provider';
import DataProvider from '../../data/Provider';
import Icon from '../../components/global/Icon';
import DropDown from '../../components/dropdown/auth/DropDown';
import { SignupFormState } from '../../types/Auth/SignUpStateInterface';
const SignupFlowScreen = () => {
  const [currentData, setCurrentData] = useState<SignUpInterfaceType | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState(4);
  const [funLoader, setFunLoader] = useState<boolean>(false);
  const [signupData, setSignUpdata] = useState<SignupFormState | null>({
    SignupData: {
      FullName: null,
      Email: null,
      Phone: null,
      Password: null,
      ConPassword: null,
    },
    FarmInfo: {
      BussnessName: null,
      InformalName: null,
      StreetAddress: null,
      City: null,
      State: null,
      ZipCode: null,
    },
    Verification: {
      Doc: null,
    },
    BussnessTiming: null,
  });
  const data = DataProvider.SignupData;
  useEffect(() => {
    setCurrentData(data[currentIndex]);
  }, [currentIndex]);
  if (currentData?.State === 'Done') {
    return (
      <LayoutProvider.WRAPERS.AUTH
        bgColor={ConstProvider.THEME.BACKGROUND.LIGHT.FIRST}
      >
        <ComProviderr.AUTH.DoneScreenCom />
      </LayoutProvider.WRAPERS.AUTH>
    );
  }
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
            <View>
              <Text className="text-lg font-semibold">FarmerEats</Text>
            </View>
            <View className="w-full flex gap-6">
              <Text className="text-4xl font-bold">{currentData?.Heading}</Text>
              <View className="flex flex-row">
                {currentData?.SubHeading && (
                  <Text className="opacity-70  tracking-wider  leading-relaxed">
                    {currentData.SubHeading}
                  </Text>
                )}
              </View>
              <View>
                {currentData?.State === 'Date' ? (
                  <ComProviderr.AUTH.DateTimeSelector />
                ) : null}
                {currentData?.Attachment && <ComProviderr.AUTH.ATCHMENT />}
                {currentData?.LoginOptions && (
                  <View className="w-full flex gap-6">
                    <View className="flex flex-row items-center  gap-4 justify-between">
                      {currentData?.LoginOptions.map((item, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() => item.Function()}
                            key={index.toString()}
                            activeOpacity={0.8}
                            className="h-16 flex-auto border-[1px] border-zinc-300 rounded-[30px] flex items-center justify-center"
                          >
                            <item.icon />
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                    <Text className="text-center opacity-70  tracking-wider">
                      or signup with
                    </Text>
                  </View>
                )}
              </View>
              <View className="w-full flex gap-4">
                {currentData?.Input &&
                  currentData?.Input.map((item, index) => {
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
                          className={`flex-auto h-16 bg-[#eeedec] text-black } placeholder:text-zinc-500 rounded-r-xl`}
                          placeholder={item.Type}
                          keyboardType={item?.keyboard}
                          secureTextEntry={
                            item.state === 'newPass' ||
                            item.state === 'ConformPass'
                              ? true
                              : false
                          }
                        />
                      </View>
                    );
                  })}
                {currentData?.DropDown && <DropDown />}
              </View>
            </View>
          </View>
        </ScrollView>
        {currentData?.Navigation && (
          <View className="w-full flex flex-row  items-center justify-between pb-6 gap-16 h-24">
            <TouchableOpacity activeOpacity={0.8}>
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
              activeOpacity={0.8}
              className="bg-[#d5715b] h-full flex-auto rounded-[140px] flex items-center justify-center"
            >
              {currentData.Page === 3 ? (
                signupData?.Verification?.Doc ? (
                  <Text className=" text-lg font-semibold text-white ">
                    {currentData.Navigation.Forward.Button}
                  </Text>
                ) : (
                  <Text className=" text-lg font-semibold text-white ">
                    Continue
                  </Text>
                )
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
