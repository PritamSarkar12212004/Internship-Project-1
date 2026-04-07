import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import LayoutProvider from '../../layout/Provider';
import ConstProvider from '../../consts/Provider';
import { TextInput } from 'react-native-gesture-handler';
import ComProviderr from '../../components/Provider';
import DataProvider from '../../data/Provider';
import FuncProvider from '../../functions/Provider';
const AuthFlowScreen = () => {
  const [currentData, setCurrentData] = useState<AuthPage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [LoginData, setLoginData] = useState<{
    login: {
      email?: string | null;
      password?: string | null;
    };
    forget: {
      phoneNumber?: string | null;
    };
    verify: {
      otp?: number | null;
    };
    reset: {
      newPass?: string | null;
      ConformPass?: string | null;
    };
  } | null>({
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
  });

  const [funLoader, setFunLoader] = useState<boolean>(false);

  const data = DataProvider.AuthData;
  useEffect(() => {
    setCurrentData(data[currentIndex]);
  }, [currentIndex]);
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
            <TouchableOpacity
              onPress={() =>
                FuncProvider.AUTH.INDEX_CHANGER({
                  state: 'login',
                  setCurrentIndex: setCurrentIndex,
                  setLoginData: setLoginData,
                })
              }
              activeOpacity={0.8}
            >
              <Text className="text-[#e29c8c]">
                {currentData?.Helper.Action}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full flex gap-6">
          {currentData?.Input.map((item, index) => {
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
                  className={`flex-auto h-16 bg-[#eeedec] text-black ${item.Adistional ? '' : 'rounded-r-xl'} placeholder:text-zinc-500`}
                  placeholder={item.Type}
                  keyboardType={item?.keyboard}
                  secureTextEntry={item.state === 'password' ? true : false}
                  value={
                    item.state === 'email'
                      ? LoginData?.login.email
                      : item.state === 'password'
                        ? LoginData?.login.password
                        : item.state === 'phoneNumber'
                          ? LoginData?.forget.phoneNumber?.toString()
                          : ''
                  }
                  onChangeText={data =>
                    FuncProvider.AUTH.INPUT_HANDLER({
                      data: data,
                      LoginData: LoginData,
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
          })}
          <View className=" mt-4">
            {currentData?.Button?.MainButton ? (
              <ComProviderr.BUTTONS.AUTH.MAIN_BUTTON
                funLoader={funLoader}
                fun={() =>
                  currentData.state === 'login'
                    ? FuncProvider.AUTH.FORM_SUBMIT.LOGIN_SUBMIT({
                        email: LoginData?.login.email,
                        password: LoginData?.login.password,
                      })
                    : null
                }
                btContent={currentData.Button.MainButton.Head}
                btColor={ConstProvider.THEME.BUTTONS.First}
              />
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
      </View>
    </LayoutProvider.WRAPERS.AUTH>
  );
};

export default AuthFlowScreen;
