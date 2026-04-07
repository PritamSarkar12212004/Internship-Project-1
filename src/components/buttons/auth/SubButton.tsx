import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const SubButton = ({ btContent }: { btContent: string }) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <Text className="text-lg underline">{btContent}</Text>
    </TouchableOpacity>
  );
};

export default SubButton;
