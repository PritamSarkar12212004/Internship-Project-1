import React, { ReactNode } from 'react';
import { View, StatusBar, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenLayout = ({
  children,
  bgColor = '#ffffff',
  barStyle = 'dark-content',
}: {
  children: ReactNode;
  bgColor?: string;
  barStyle?: StatusBarStyle;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={barStyle}
      />
      <View style={{ height: insets.top, backgroundColor: bgColor }} />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default ScreenLayout;
