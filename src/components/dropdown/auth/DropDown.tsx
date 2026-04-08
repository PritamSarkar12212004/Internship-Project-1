import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Icon from '../../global/Icon';
import IndianStates from '../../../consts/auth/IndianStates';

interface DropDownProps {
  selectedState: string;
  zipCode: string;
  onSelectState: (value: string) => void;
  onChangeZipCode: (value: string) => void;
}

const DropDown = ({
  selectedState,
  zipCode,
  onSelectState,
  onChangeZipCode,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const stateLabel = useMemo(
    () => selectedState || 'State',
    [selectedState],
  );

  return (
    <View className="w-full gap-4">
      <View className="w-full flex flex-row items-center justify-between gap-4">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsOpen(prev => !prev)}
          className="w-5/12 flex flex-row h-16 bg-[#eeedec] rounded-xl items-center justify-between px-4"
        >
          <Text
            numberOfLines={1}
            className={selectedState ? 'text-black' : 'text-zinc-500'}
          >
            {stateLabel}
          </Text>
          <View className="h-full flex items-center justify-center pb-3">
            <Icon name={isOpen ? 'sort-up' : 'sort-down'} color="black" size={24} />
          </View>
        </TouchableOpacity>
        <TextInput
          value={zipCode}
          onChangeText={onChangeZipCode}
          className="flex-auto h-16 bg-[#eeedec] placeholder:text-zinc-500 rounded-xl px-4"
          placeholder="Enter Zipcode"
          keyboardType="number-pad"
          maxLength={6}
        />
      </View>

      {isOpen && (
        <ScrollView className="w-full bg-[#eeedec] rounded-xl p-2 max-h-56">
          <View className="flex gap-2">
            {IndianStates.map(stateItem => (
              <TouchableOpacity
                key={stateItem}
                activeOpacity={0.8}
                onPress={() => {
                  onSelectState(stateItem);
                  setIsOpen(false);
                }}
                className={`h-10 rounded-lg px-3 flex items-center justify-center ${
                  selectedState === stateItem ? 'bg-[#d5715b]' : 'bg-transparent'
                }`}
              >
                <Text
                  className={
                    selectedState === stateItem
                      ? 'text-white font-semibold'
                      : 'text-black'
                  }
                >
                  {stateItem}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default DropDown;
