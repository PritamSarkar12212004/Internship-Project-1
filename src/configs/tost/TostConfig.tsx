import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const typeStyles = {
  success: { progressColor: '#22c55e', borderColor: '#22c55e' },
  error: { progressColor: '#ef4444', borderColor: '#ef4444' },
  info: { progressColor: '#3b82f6', borderColor: '#3b82f6' },
};

interface ModernToastProps {
  text1?: string;
  text2?: string;
  type: keyof typeof typeStyles;
  hide?: () => void;
  visibilityTime?: number;
}

const ModernToast: React.FC<ModernToastProps> = ({
  text1,
  text2,
  type,
  hide,
  visibilityTime = 1800,
}) => {
  const progressAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 0,
      duration: visibilityTime,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      hide?.();
    }, visibilityTime);

    return () => {
      clearTimeout(timer);
      progressAnim.stopAnimation();
    };
  }, [visibilityTime, hide, progressAnim]);

  const { progressColor, borderColor } = typeStyles[type];

  return (
    <View style={styles.container}>
      <View style={[styles.toast, { borderLeftColor: borderColor }]}>
        <View style={styles.textContainer}>
          {text1 && <Text style={styles.title}>{text1}</Text>}
          {text2 && <Text style={styles.description}>{text2}</Text>}
        </View>
        <TouchableOpacity onPress={hide} style={styles.closeButton}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.progressBar,
          {
            backgroundColor: progressColor,
            width: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

export const toastConfig = {
  success: (props: any) => (
    <ModernToast
      text1={props.text1}
      text2={props.text2}
      type="success"
      hide={props.hide}
      visibilityTime={props.visibilityTime}
    />
  ),
  error: (props: any) => (
    <ModernToast
      text1={props.text1}
      text2={props.text2}
      type="error"
      hide={props.hide}
      visibilityTime={props.visibilityTime}
    />
  ),
  info: (props: any) => (
    <ModernToast
      text1={props.text1}
      text2={props.text2}
      type="info"
      hide={props.hide}
      visibilityTime={props.visibilityTime}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 32,
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e293b',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#22c55e',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: -0.3,
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#cbd5e1',
    lineHeight: 18,
  },
  closeButton: {
    padding: 6,
    marginLeft: 8,
  },
  closeText: {
    fontSize: 18,
    color: '#94a3b8',
    fontWeight: '400',
  },
  progressBar: {
    height: 3,
    backgroundColor: '#22c55e',
  },
});
