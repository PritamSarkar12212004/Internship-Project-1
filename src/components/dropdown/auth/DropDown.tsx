import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Icon from '../../global/Icon';

const DropDown = () => {
  return (
    <View className="w-full gap-4 flex flex-row items-center justify-between">
      <TouchableOpacity
        activeOpacity={0.8}
        className="w-5/12 flex flex-row h-16 bg-[#eeedec] rounded-xl  items-center justify-between px-4"
      >
        <Text className="text-zinc-500">State</Text>
        <View className="h-full flex items-center justify-center pb-3">
          <Icon name={'sort-down'} color="black" size={24} />
        </View>
      </TouchableOpacity>
      <TextInput
        className={`flex-auto h-16 bg-[#eeedec] text-black } placeholder:text-zinc-500 rounded-xl px-4`}
        placeholder={'Enter Zipcode'}
        keyboardType={'number-pad'}
      />
    </View>
  );
};

export default DropDown;
