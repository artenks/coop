import React from 'react';
import {Animated, StyleSheet} from 'react-native';

interface Props {
  offset: Animated.Value;
}

const Header: React.FC<Props> = ({offset, ...rest}) => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#f0f0f0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      left: 0,
      right: 0,
      padding: 4,
    },
  });

  return (
    <Animated.View
      {...rest}
      style={[
        styles.header,
        {
          elevation: offset.interpolate({
            inputRange: [150, 155],
            outputRange: [0, 8],
            extrapolate: 'clamp',
          }),
        },
      ]}
    />
  );
};

export default Header;

// background: ${({theme}) => theme.colors.primary};
