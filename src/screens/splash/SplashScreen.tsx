import { View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import LayoutProvider from '../../layout/Provider';
import DataProvider from '../../data/Provider';
import ConstProvider from '../../consts/Provider';
import ComponentProvider from '../../components/Provider';
import FuncProvider from '../../functions/Provider';

const SplashScreen = ({ navigation }: any) => {
  // state hooks
  const [currentData, setCurrentData] = useState<{
    topic: string;
    dis: string;
    button_colour: string;
    button_content: string;
    bg_color: string;
    index: number;
    IMG: any;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swipeRef = useRef<any>(null);
  // data provider
  const data = DataProvider.SplashData;
  const ComponentImg = currentData?.IMG;

  // actions
  const RightAction = () => {
    return (
      <View
        style={{
          width: 1,
        }}
      />
    );
  };
  const LeftAction = () => {
    return (
      <View
        style={{
          width: 1,
        }}
      />
    );
  };
  const onOpen = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => {
        if (prev < data.length - 1) return prev + 1;
        return prev;
      });
    } else {
      setCurrentIndex(prev => {
        if (prev > 0) return prev - 1;
        return prev;
      });
    }

    swipeRef.current?.close();
  };

  const finishSplash = () => {
    FuncProvider.STORAGE.SPLASH.MARK_COMPLETE();
    const parentNavigation = navigation.getParent?.();
    if (parentNavigation) {
      parentNavigation.replace(ConstProvider.ROUTES.AUTH_PATH.ROOT_PATH);
      return;
    }
    navigation.navigate(ConstProvider.ROUTES.AUTH_PATH.ROOT_PATH);
  };

  // effects
  useEffect(() => {
    setCurrentData(data[currentIndex]);
  }, [currentIndex]);

  // conditions
  if (!data || !currentData) {
    return <View />;
  }
  return (
    <LayoutProvider.WRAPERS.SPLASH bgColor={currentData?.bg_color}>
      <View className="flex-1 flex items-center justify-between">
        <Swipeable
          ref={swipeRef}
          renderRightActions={RightAction}
          renderLeftActions={LeftAction}
          onSwipeableOpen={onOpen}
          overshootLeft={false}
          overshootRight={false}
          childrenContainerStyle={{
            transform: [{ translateX: 0 }],
          }}
          containerStyle={{
            flex: 1,
          }}
        >
          <View className="h-[50%] w-full">
            <ComponentImg />
          </View>
          <View className="flex-1 w-full bg-white rounded-t-[52px] py-12 px-12 flex items-center justify-between">
            <View className="w-full flex items-center gap-8">
              <Text className="text-3xl font-bold">{currentData.topic}</Text>
              <Text className="text-center tracking-widest leading-relaxed ">
                {currentData.dis}
              </Text>
            </View>
            <View className="flex w-full items-center justify-center gap-4">
              <View className="flex-row gap-2 mb-4">
                {data.map((_, i) => (
                  <View
                    key={i}
                    style={{
                      height: 8,
                      borderRadius: 10,
                      backgroundColor:
                        ConstProvider.THEME.BACKGROUND.DARK.FIRST,
                      width: currentIndex === i ? 40 : 8,
                    }}
                  />
                ))}
              </View>
              <ComponentProvider.BUTTONS.SPLASH.MAIN_BUTTON
                btColor={currentData.bg_color}
                btContent={currentData.button_content}
                onPress={finishSplash}
              />
              <ComponentProvider.BUTTONS.SPLASH.SUB_BUTTON
                btContent={'Login'}
                onPress={finishSplash}
              />
            </View>
          </View>
        </Swipeable>
      </View>
    </LayoutProvider.WRAPERS.SPLASH>
  );
};

export default SplashScreen;
