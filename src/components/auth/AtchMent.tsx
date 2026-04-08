import { View, Text, TouchableOpacity } from 'react-native';
import Theme from '../../consts/theme/Theme';
import React from 'react';
import Icon from '../global/Icon';

const AtchMent = () => {
  return (
    <View className="w-full flex flex-row items-center justify-between mt-4">
      <Text className="text-ls font-semibold">
        Attach proof of registration
      </Text>
      <TouchableOpacity
        activeOpacity={0.9}
        className="h-16 w-16 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: Theme.BUTTONS.First,
        }}
      >
        <Icon name={'camera'} color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default AtchMent;
