import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

const MainButton = ({
  btColor,
  btContent,
  fun,
  funLoader,
}: {
  btContent: string;
  btColor: string;
  fun?: any;
  funLoader: boolean;
}) => {
  return (
    <TouchableOpacity
      disabled={funLoader}
      activeOpacity={0.9}
      className="w-full h-16 rounded-[117px] flex items-center justify-center tracking-wider leading-loose"
      style={{
        backgroundColor: btColor,
      }}
      onPress={() => fun()}
    >
      {funLoader ? (
        <ActivityIndicator size={'small'} color="white" />
      ) : (
        <Text className="text-white font-semibold text-lg">{btContent}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
