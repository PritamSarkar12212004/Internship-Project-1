import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const MainButton = ({
  btColor,
  btContent,
}: {
  btContent: string;
  btColor: string;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="w-full h-16 rounded-[117px] flex items-center justify-center"
      style={{
        backgroundColor: btColor,
      }}
    >
      <Text className="text-white font-semibold text-lg">{btContent}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
