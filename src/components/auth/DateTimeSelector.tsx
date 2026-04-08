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
interface SelectedDayTiming {
  Day: string;
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
const ShowTime = ({
  item,
  selected,
  onPress,
}: {
  item: TimeSlot;
  selected: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`h-16 rounded-xl items-center justify-center ${
        selected ? 'bg-[#d5715b]' : 'bg-[#eeedec]'
      }`}
    >
      <Text className={selected ? 'text-white' : 'text-black'}>
        {item.Start} - {item.End}
      </Text>
    </TouchableOpacity>
  );
};

const DateTimeSelector = ({
  value,
  onChange,
}: {
  value: SelectedDayTiming[];
  onChange: (next: SelectedDayTiming[]) => void;
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const selectedDay = DataProvider.DatePickerData[selectedDayIndex];
  const selectedMap = React.useMemo(() => {
    return value.reduce<Record<string, TimeSlot[]>>((acc, entry) => {
      acc[entry.Day] = entry.Time;
      return acc;
    }, {});
  }, [value]);

  const isDaySelected = (day: string) => {
    return Boolean(selectedMap[day]?.length);
  };

  const isTimeSelected = (day: string, slot: TimeSlot) => {
    const daySlots = selectedMap[day] ?? [];
    return daySlots.some(
      item => item.Start === slot.Start && item.End === slot.End,
    );
  };

  const toggleTimeSlot = (day: string, slot: TimeSlot) => {
    const currentSlots = selectedMap[day] ?? [];
    const exists = currentSlots.some(
      item => item.Start === slot.Start && item.End === slot.End,
    );
    const nextSlots = exists
      ? currentSlots.filter(
          item => !(item.Start === slot.Start && item.End === slot.End),
        )
      : [...currentSlots, slot];

    const withoutDay = value.filter(item => item.Day !== day);
    if (!nextSlots.length) {
      onChange(withoutDay);
      return;
    }
    onChange([...withoutDay, { Day: day, Time: nextSlots }]);
  };

  return (
    <View className="mt-4  w-full flex gap-10">
      <FlatList
        data={DataProvider.DatePickerData}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        renderItem={({ item, index }) => (
          <ShowDay
            item={item}
            selected={isDaySelected(item.Day) || index === selectedDayIndex}
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
            <ShowTime
              item={item}
              selected={isTimeSelected(selectedDay.Day, item)}
              onPress={() => toggleTimeSlot(selectedDay.Day, item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DateTimeSelector;
