import React, {useEffect, useCallback, useContext} from 'react';
import {Animated, Keyboard, Platform, StyleSheet} from 'react-native';

import {BottomTabBar, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ThemeContext} from 'styled-components/native';

const BottomBar: React.FC<BottomTabBarProps> = props => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    bar: {
      backgroundColor: colors.primaryLight,
      borderRadius: 24,
      borderTopWidth: 1,
      borderTopColor: 'rgba(0, 0, 0, 0.01)',

      height: 48,
      paddingHorizontal: 8,
      width: 264,

      elevation: 4,

      shadowColor: colors.primaryDark,
      shadowOffset: {width: 0, height: 20},
      shadowOpacity: 0.5,
      shadowRadius: 20,
    },

    container: {position: 'absolute', alignSelf: 'center', bottom: 16},
  });

  const visible = new Animated.Value(1);

  const handleKeyboardShow = useCallback(() => {
    Animated.timing(visible, {
      toValue: 0,
      duration: 150,
    }).start();
  }, [visible]);

  const handleKeyboardHide = useCallback(() => {
    Animated.timing(visible, {
      toValue: 1,
      duration: 100,
    }).start();
  }, [visible]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', handleKeyboardShow);
      Keyboard.addListener('keyboardWillHide', handleKeyboardHide);
    } else {
      Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
      Keyboard.addListener('keyboardDidHide', handleKeyboardHide);
    }

    return () => {
      if (Platform.OS === 'ios') {
        Keyboard.removeListener('keyboardWillShow', handleKeyboardShow);
        Keyboard.removeListener('keyboardWillHide', handleKeyboardHide);
      } else {
        Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);
        Keyboard.removeListener('keyboardDidHide', handleKeyboardHide);
      }
    };
  }, [handleKeyboardHide, handleKeyboardShow]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: visible.interpolate({
                inputRange: [0, 1],
                outputRange: [64, 0],
              }),
            },
          ],
        },
      ]}>
      <BottomTabBar
        {...props}
        showLabel={false}
        activeTintColor={colors.secondary}
        inactiveTintColor={colors.secondaryLight}
        keyboardHidesTabBar={false}
        style={styles.bar}
      />
    </Animated.View>
  );
};

export default BottomBar;
