import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DataProvider from '../../data/Provider';

interface TimeSlot {
  Start: string;
  End: string;
}

interface DayData {
  Day: string;
  Index: number;
  Time: TimeSlot[];
}
const ShowDay = ({
  item,
  selected,
  onPress,
}: {
  item: DayData;
  selected: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`h-12 w-12 rounded-lg items-center justify-center ${
        selected ? 'bg-[#d5715b]' : 'bg-[#eeedec]'
      }`}
    >
      <Text className={selected ? 'text-white' : 'text-black'}>{item.Day}</Text>
    </TouchableOpacity>
  );
};
const ShowTime = ({ item }: { item: TimeSlot }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-16 bg-[#eeedec] rounded-xl items-center justify-center"
    >
      <Text>
        {item.Start} - {item.End}
      </Text>
    </TouchableOpacity>
  );
};

const DateTimeSelector = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const selectedDay = DataProvider.DatePickerData[selectedDayIndex];

  return (
    <View className="mt-4  w-full flex gap-10">
      <FlatList
        data={DataProvider.DatePickerData}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        renderItem={({ item, index }) => (
          <ShowDay
            item={item}
            selected={index === selectedDayIndex}
            onPress={() => setSelectedDayIndex(index)}
          />
        )}
        contentContainerStyle={{
          justifyContent: 'space-between',
          width: '100%',
        }}
      />
      <FlatList
        data={selectedDay.Time}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
        renderItem={({ item }) => (
          <View className="w-[48%]">
            <ShowTime item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default DateTimeSelector;
