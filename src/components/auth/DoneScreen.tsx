import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AssteProvider from '../../assets/Provider';
const DoneScreen = ({ signupData }: any) => {
  const MakeProfile = () => {
    console.log(signupData);
  };
  return (
    <View className="flex-1  flex items-center justify-end pb-6 gap-72">
      <View className="w-full flex items-center px-4 gap-8">
        <View className="w-full flex items-center justify-center mb-4">
          <AssteProvider.IMAGE.AUTH.DoneImg />
        </View>
        <Text className="text-4xl font-bold text-center">You’re all done!</Text>
        <Text className="opacity-70  tracking-wider  text-center">
          Hang tight! We are currently reviewing your account and will follow up
          with you in 2-3 business days. In the meantime, you can setup your
          inventory.
        </Text>
      </View>
      <View className="w-full">
        <TouchableOpacity
          onPress={() => MakeProfile()}
          activeOpacity={0.8}
          className="bg-[#d5715b] h-16 flex-auto rounded-[140px] flex items-center justify-center"
        >
          <Text className=" text-lg font-semibold text-white ">Got it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoneScreen;
