import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const SubButton = ({
  btContent,
  onPress,
}: {
  btContent: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <Text className="text-lg underline">{btContent}</Text>
    </TouchableOpacity>
  );
};

export default SubButton;
