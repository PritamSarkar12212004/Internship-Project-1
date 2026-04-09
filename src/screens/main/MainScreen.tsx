import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LayputProvider from '../../layout/Provider';
import ConstProvider from '../../consts/Provider';

const MainScreen = () => {
  return (
    <LayputProvider.WRAPERS.MAIN
      bgColor={ConstProvider.THEME.BACKGROUND.LIGHT.FIRST}
    >
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-5xl font-bold text-[#d5715b] tracking-wider">
          FarmerEats
        </Text>
        <Text className="text-2xl font-semibold mt-8 text-center">
          Welcome to FarmerEats 👋
        </Text>

        <Text className="text-base opacity-70 mt-3 text-center leading-relaxed">
          Your smart partner to manage farm business, track activities and grow
          faster with digital ease.
        </Text>
      </View>
    </LayputProvider.WRAPERS.MAIN>
  );
};

export default MainScreen;
